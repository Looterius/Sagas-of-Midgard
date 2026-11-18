/* Sagas of Midgard — bez zależności zewnętrznych.
   Tylko dane publiczne z data.js. Żadnych sekretów MG w frontendzie! */
(() => {
  "use strict";
  const data = window.CHRONICLE;
  if (!data) return;
  const $ = (selector) => document.querySelector(selector);
  const viewport = $("#map-viewport");
  const scene = $("#map-scene");
  const layer = $("#people-layer");
  const svg = $("#connections");
  // Użytkownicy mogą przesuwać karty tylko w pamięci bieżącej strony.
  // Pozycje w publicznym data.js pozostają oficjalne i niemodyfikowalne przez gości.
  const officialPositions = Object.fromEntries(data.people.map(p => [p.id, { x: p.x, y: p.y }]));
  const state = {
    zoom: 0.66, panX: 0, panY: 0, selected: null, view: "relationships",
    positions: Object.fromEntries(
      Object.entries(officialPositions).map(([id, pos]) => [id, { ...pos }])
    ),
    visibleIds: new Set(data.people.map(p => p.id))
  };
  const groupFilter = { primary: "all", dimension: null, value: null, expanded: null, search: "" };
  const groups = window.SOM_GROUPS;
  const nodes = new Map();
  const NS = "http://www.w3.org/2000/svg";

  function initials(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(x => x[0]).join("").toUpperCase();
  }

  function make(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  function setArt(el, image) {
    // Zdjęcia mogą mieć spacje i polskie znaki. Używamy prawdziwego <img>,
    // nie tła CSS, i sprawdzamy alternatywny publiczny adres GitHuba.
    if (!image || !/^assets\/portraits\/[^<>"'?#\\]+\.(png|jpe?g|webp|avif)$/i.test(image)) return;
    const path = image.split("/").map(encodeURIComponent).join("/");
    const sources = [
      path,
      "https://raw.githubusercontent.com/Looterius/Sagas-of-Midgard/main/" + path
    ];
    const portrait = document.createElement("img");
    portrait.alt = "";
    portrait.className = "asset-photo";
    portrait.decoding = "async";
    portrait.loading = "eager";
    let attempt = 0;
    portrait.onload = () => el.classList.add("has-photo");
    portrait.onerror = () => {
      attempt++;
      if (attempt < sources.length) portrait.src = sources[attempt];
      else {
        portrait.remove();
        el.classList.remove("has-photo");
      }
    };
    portrait.src = sources[attempt];
    el.appendChild(portrait);
  }

  function addLine(x1, y1, x2, y2, cssClass = "") {
    const l = document.createElementNS(NS, "line");
    l.setAttribute("x1", x1); l.setAttribute("y1", y1);
    l.setAttribute("x2", x2); l.setAttribute("y2", y2);
    if (cssClass) l.setAttribute("class", cssClass);
    svg.appendChild(l);
  }

  function drawConnections() {
    svg.replaceChildren();
    (data.relationships || []).forEach(rel => {
      if (!state.visibleIds.has(rel.from) || !state.visibleIds.has(rel.to)) return;
      const a = state.positions[rel.from], b = state.positions[rel.to];
      if (!a || !b) return;
      const ax = a.x + 90, ay = a.y + 120, bx = b.x + 90, by = b.y + 120;
      addLine(ax, ay, bx, by, "real " + (["hostile","ally","family"].includes(rel.type) ? rel.type : ""));
      if (rel.label) {
        const label = document.createElementNS(NS, "text");
        label.setAttribute("x", (ax + bx) / 2);
        label.setAttribute("y", (ay + by) / 2 - 10);
        label.setAttribute("text-anchor", "middle");
        label.textContent = rel.label;
        svg.appendChild(label);
      }
    });
  }

  function renderPeople() {
    for (const p of data.people) {
      const card = make("div", "person-card");
      card.tabIndex = 0;
      card.role = "button";
      card.setAttribute("aria-label", "Otwórz: " + p.name);
      card.dataset.id = p.id;
      card.classList.toggle("is-deceased", p.grouping?.lifeStatus === "deceased");
      const art = make("div", "person-art");
      art.appendChild(make("span", "avatar-rune", initials(p.name)));
      setArt(art, p.image);
      card.appendChild(art);
      const name = make("div", "card-name" + (p.name.length > 21 ? " long" : ""), p.name);
      card.appendChild(name);
      card.appendChild(make("span", "card-corner", "ᛟ"));
      if (p.grouping?.role === "hero") {
        const dead = p.grouping.lifeStatus === "deceased";
        const marker = make("span", "person-role-badge" + (dead ? " is-deceased" : ""),
          dead ? "† ZMARŁY" : "BOHATER");
        card.appendChild(marker);
      }
      layer.appendChild(card);
      nodes.set(p.id, card);
      positionCard(p.id);
      card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectPerson(p.id); } });
      // Lewy: przeciągaj kartę; zwykłe kliknięcie nadal otwiera historię.
      // Prawy: zdarzenie przechodzi do viewportu i przesuwa całą mapę.
      let dragging = null, lastDragEnd = -Infinity;
      card.addEventListener("pointerdown", e => {
        if (e.button !== 0 || !state.visibleIds.has(p.id)) return;
        e.stopPropagation();
        const pos = state.positions[p.id];
        dragging = {
          pointerId: e.pointerId, x: e.clientX, y: e.clientY,
          startX: pos.x, startY: pos.y, moved: false
        };
        card.setPointerCapture(e.pointerId);
      });
      card.addEventListener("pointermove", e => {
        if (!dragging || dragging.pointerId !== e.pointerId) return;
        const dx = e.clientX - dragging.x;
        const dy = e.clientY - dragging.y;
        // Małe ruchy dłoni traktujemy jak kliknięcie, nie przestawienie karty.
        if (!dragging.moved && Math.hypot(dx, dy) < 5) return;
        dragging.moved = true;
        card.classList.add("is-dragging");
        // Przeliczenie pikseli ekranu na jednostki płótna niezależnie od zoomu.
        state.positions[p.id] = {
          x: Math.max(0, Math.min(1600 - 180, dragging.startX + dx / state.zoom)),
          y: Math.max(0, Math.min(1000 - 240, dragging.startY + dy / state.zoom))
        };
        positionCard(p.id);
        drawConnections();
        $("#reset-positions").hidden = false;
      });
      function stopCardDrag(e) {
        if (!dragging || dragging.pointerId !== e.pointerId) return;
        if (dragging.moved) lastDragEnd = e.timeStamp;
        dragging = null;
        card.classList.remove("is-dragging");
      }
      card.addEventListener("pointerup", stopCardDrag);
      card.addEventListener("pointercancel", stopCardDrag);
      card.addEventListener("lostpointercapture", stopCardDrag);
      card.addEventListener("click", e => {
        if (e.timeStamp - lastDragEnd < 500) {
          e.preventDefault(); // po przeciągnięciu nie otwieraj karty
          return;
        }
        selectPerson(p.id);
      });
    }
    drawConnections();
    $("#people-count").textContent = data.people.length;
    $("#links-count").textContent = (data.relationships || []).length;
  }

  function renderGroupOptions() {
    const panel = $("#character-group-options");
    const dimension = groupFilter.expanded;
    panel.replaceChildren();
    panel.hidden = !dimension;
    document.querySelectorAll("[data-character-dimension]").forEach(button => {
      const isOpen = button.dataset.characterDimension === dimension;
      button.setAttribute("aria-expanded", String(isOpen));
      button.classList.toggle("active", isOpen);
      button.classList.toggle("chosen", button.dataset.characterDimension === groupFilter.dimension);
    });
    if (!dimension) return;
    const available = groups.options(data, dimension);
    if (!available.length) {
      panel.appendChild(make("p", "character-group-unavailable",
        "Nie ma jeszcze potwierdzonych przynależności postaci do tej kategorii."));
      return;
    }
    for (const option of available) {
      const selected = groupFilter.dimension === dimension && groupFilter.value === option.id;
      const button = make("button", "character-group-option", option.label);
      button.type = "button";
      button.setAttribute("aria-pressed", String(selected));
      button.addEventListener("click", () => {
        groupFilter.dimension = selected ? null : dimension;
        groupFilter.value = selected ? null : option.id;
        applyGrouping();
      });
      panel.appendChild(button);
    }
  }

  function applyGrouping() {
    if (!groups) return;
    const people = data.people.filter(person => groups.matches(data, person, groupFilter));
    const isDefault = groupFilter.primary === "all" &&
      !groupFilter.value && !groupFilter.search.trim();
    state.visibleIds = new Set(people.map(person => person.id));
    // Filtr zmienia tylko lokalny widok, nie zapisane pozycje postaci.
    state.positions = isDefault
      ? Object.fromEntries(Object.entries(officialPositions).map(([id, pos]) => [id, { ...pos }]))
      : groups.layout(people);
    $("#reset-positions").hidden = true;
    nodes.forEach((card, id) => {
      card.hidden = !state.visibleIds.has(id);
      if (!card.hidden) {
        positionCard(id);
        card.classList.remove("muted");
      }
    });
    drawConnections();
    const relationCount = (data.relationships || []).filter(rel =>
      state.visibleIds.has(rel.from) && state.visibleIds.has(rel.to)).length;
    $("#people-count").textContent = people.length;
    $("#links-count").textContent = relationCount;
    $("#character-group-summary").textContent = people.length + " z " + data.people.length + " postaci";
    const empty = $("#character-group-empty");
    empty.hidden = people.length > 0;
    if (!people.length) {
      empty.textContent = "Brak potwierdzonych postaci w tym widoku. Możesz wybrać inną grupę lub wyczyścić filtry.";
    }
    document.querySelectorAll("[data-character-primary]").forEach(button => {
      const selected = button.dataset.characterPrimary === groupFilter.primary;
      button.setAttribute("aria-pressed", String(selected));
      button.classList.toggle("active", selected);
    });
    $("#character-group-reset").hidden = isDefault && !groupFilter.expanded;
    renderGroupOptions();
    if (state.view === "relationships") fit();
  }

  function setupGrouping() {
    document.querySelectorAll("[data-character-primary]").forEach(button => {
      button.addEventListener("click", () => {
        groupFilter.primary = button.dataset.characterPrimary;
        if (groupFilter.primary === "all") {
          groupFilter.dimension = null;
          groupFilter.value = null;
          groupFilter.expanded = null;
        }
        applyGrouping();
      });
    });
    document.querySelectorAll("[data-character-dimension]").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.characterDimension;
        groupFilter.expanded = groupFilter.expanded === id ? null : id;
        renderGroupOptions();
        $("#character-group-reset").hidden = !groupFilter.expanded &&
          groupFilter.primary === "all" && !groupFilter.value && !groupFilter.search.trim();
      });
    });
    $("#character-group-reset").addEventListener("click", () => {
      groupFilter.primary = "all";
      groupFilter.dimension = null;
      groupFilter.value = null;
      groupFilter.expanded = null;
      groupFilter.search = "";
      $("#search").value = "";
      applyGrouping();
    });
    applyGrouping();
  }

  function positionCard(id) {
    const pos = state.positions[id], card = nodes.get(id);
    if (card) { card.style.left = pos.x + "px"; card.style.top = pos.y + "px"; }
  }

  function selectPerson(id) {
    const p = data.people.find(x => x.id === id);
    if (!p) return;
    state.selected = id;
    nodes.forEach((el, key) => el.classList.toggle("selected", key === id));
    $("#inspector-type").textContent = p.kind.toUpperCase() +
      (p.grouping?.lifeStatus === "deceased" ? " · ZMARŁY" : "") + " · KRONIKA";
    $("#inspector-name").textContent = p.name;
    $("#inspector-description").textContent =
      p.description || "Postać znana z kroniki. Jej historia i motywacje będą uzupełniane wraz z odkryciami graczy.";
    const art = $("#inspector-art");
    art.style.backgroundImage = "";
    art.classList.remove("has-photo");
    art.replaceChildren(make("span", "", initials(p.name)));
    setArt(art, p.image);
    const relations = $("#inspector-relations");
    relations.replaceChildren();
    const known = (data.relationships || []).filter(r => r.from === id || r.to === id);
    if (!known.length) {
      relations.textContent = "Brak ujawnionych relacji. Sieć powiązań zostanie uzupełniona po kolejnych sesjach.";
      relations.className = "relations-empty";
    } else {
      relations.className = "";
      for (const r of known) {
        const other = data.people.find(p2 => p2.id === (r.from === id ? r.to : r.from));
        const chip = make("div", "relation-chip", other ? other.name : "Nieznana postać");
        chip.appendChild(make("small", "", r.label || r.type || "Powiązanie"));
        relations.appendChild(chip);
      }
    }
    const dialog = $("#inspector");
    dialog.classList.toggle("is-deceased", p.grouping?.lifeStatus === "deceased");
    dialog.hidden = false;
    dialog.setAttribute("aria-hidden", "false");
    dialog.classList.add("open");
    document.body.classList.add("character-modal-open");
    $("#close-inspector").focus();
  }

  function renderPlaces() {
    if (!window.SOM_ATLAS) return;
    window.SOM_ATLAS.mount({
      data,
      openPerson: id => selectPerson(id),
      openMap: placeId => {
        switchView("maps");
        window.SOM_MAPS?.showForPlace(placeId);
      },
      openChronicle: eventId => {
        switchView("chronicle");
        const card = document.querySelector('[data-event-id="' + eventId + '"]');
        if (!card) return;
        const story = card.querySelector(".chronicle-story");
        if (story && story.hidden) card.querySelector(".chronicle-expand")?.click();
        card.scrollIntoView({behavior:"smooth",block:"center"});
      }
    });
  }

  function renderMaps() {
    window.SOM_MAPS?.mount({
      data,
      openPlace: id => window.SOM_ATLAS?.open(id),
      openAtlasRegion: id => {
        switchView("locations");
        window.SOM_ATLAS?.showRegion(id);
      }
    });
  }

  function renderChronicle() {
    const placeMap = new Map(data.places.map(p => [p.id, p]));
    const filter = $("#chronicle-place-filter");
    const list = $("#chronicle-list");
    const all = data.chronicle || [];
    for (const id of new Set(all.map(e => e.placeId))) {
      const place = placeMap.get(id);
      if (!place) continue;
      const opt = make("option", "", place.name);
      opt.value = id;
      filter.appendChild(opt);
    }
    function paint() {
      list.replaceChildren();
      const shown = all.filter(e => filter.value === "all" || e.placeId === filter.value);
      $("#chronicle-count").textContent = shown.length + (shown.length === 1 ? " rozdział" : " rozdziały");
      if (!shown.length) list.appendChild(make("p", "chronicle-empty", "Nie zapisano jeszcze wydarzeń z tego miejsca."));
      for (const item of shown) {
        const place = placeMap.get(item.placeId);
        const card = make("article", "chronicle-card");
        card.dataset.eventId = item.id;
        const cover = make("div", "chronicle-cover");
        cover.appendChild(make("div", "chronicle-chapter", "ROZDZIAŁ " + item.chapter));
        cover.appendChild(make("div", "chronicle-cover-sigil", "ᚱ"));
        cover.appendChild(make("div", "chronicle-cover-place", place ? place.name : "Północ"));
        setArt(cover, item.image);
        const body = make("div", "chronicle-body");
        body.appendChild(make("p", "chronicle-overline", item.kind + " · " + (place ? place.name : "Północ")));
        body.appendChild(make("h3", "chronicle-title", item.title));
        body.appendChild(make("p", "chronicle-lead", item.intro));
        const expanded = make("div", "chronicle-story");
        expanded.hidden = true;
        for (const paragraph of item.paragraphs) expanded.appendChild(make("p", "", paragraph));
        if (item.participants && item.participants.length) {
          const related = make("div", "chronicle-participants");
          related.appendChild(make("span", "", "Znane postacie: "));
          for (const id of item.participants) {
            const person = data.people.find(p => p.id === id);
            if (!person) continue;
            const button = make("button", "chronicle-person-link", person.name);
            button.type = "button";
            button.addEventListener("click", () => selectPerson(person.id));
            related.appendChild(button);
          }
          expanded.appendChild(related);
        }
        body.appendChild(expanded);
        const actions = make("div", "chronicle-actions");
        const toggle = make("button", "chronicle-expand", "Czytaj kronikę");
        toggle.type = "button";
        toggle.setAttribute("aria-expanded", "false");
        toggle.addEventListener("click", () => {
          const opening = expanded.hidden;
          expanded.hidden = !opening;
          toggle.textContent = opening ? "Zwiń opowieść" : "Czytaj kronikę";
          toggle.setAttribute("aria-expanded", String(opening));
        });
        actions.appendChild(toggle);
        if (place) {
          const go = make("button", "chronicle-place-link", "Miejsce: " + place.name);
          go.type = "button";
          go.addEventListener("click", () => {
            switchView("locations");
            window.SOM_ATLAS?.open(item.placeId, go);
          });
          actions.appendChild(go);
        }
        body.appendChild(actions);
        card.appendChild(cover);
        card.appendChild(body);
        list.appendChild(card);
      }
    }
    filter.addEventListener("change", paint);
    paint();
  }

  function switchView(view) {
    state.view = view;
    for (const b of document.querySelectorAll("[data-view]"))
      b.classList.toggle("active", b.dataset.view === view);
    const viewIds = { relationships: "relationships-view", maps: "maps-view", locations: "locations-view", chronicle: "chronicle-view" };
    for (const section of document.querySelectorAll(".view")) {
      const show = section.id === viewIds[view];
      section.classList.toggle("active", show);
      section.hidden = !show;
    }
    $("#page-title").textContent = ({ relationships: "Sieć postaci", maps: "Mapy świata", locations: "Atlas lokacji", chronicle: "Kronika wydarzeń" })[view];
    $("#eyebrow").textContent = ({ relationships: "SAGA · ŚWIAT POSTACI", maps: "SAGA · KARTOGRAFIA", locations: "SAGA · ODKRYTE KRAINY", chronicle: "SAGA · ZAPISANE CZYNY" })[view];
    $("#page-description").textContent = ({
      relationships: "Portrety, powiązania i losy ludzi Północy.",
      maps: "Interaktywne mapy poznanych krain i miejsc.",
      locations: "Miejsca odwiedzone i wspominane w kronice.",
      chronicle: "Dzieje bohaterów spisane w pamięci Północy."
    })[view];
    if (view === "relationships") fit();
    closeCharacter();
  }

  function closeCharacter() {
    const dialog = $("#inspector");
    if (dialog.hidden) return;
    dialog.classList.remove("open");
    dialog.setAttribute("aria-hidden", "true");
    dialog.hidden = true;
    document.body.classList.remove("character-modal-open");
    if (state.selected && nodes.get(state.selected) && !nodes.get(state.selected).hidden)
      nodes.get(state.selected).focus({preventScroll:true});
    state.selected = null;
  }

  function applyTransform() {
    scene.style.setProperty("--scale", state.zoom);
    scene.style.setProperty("--pan-x", state.panX + "px");
    scene.style.setProperty("--pan-y", state.panY + "px");
    $("#zoom-text").textContent = Math.round(state.zoom * 100) + "%";
  }

  function setZoom(value) {
    state.zoom = Math.max(.06, Math.min(1.7, value));
    applyTransform();
  }
  function fit() {
    if (!viewport.clientWidth || !viewport.clientHeight) return;
    // Dopasowanie wszystkich WIDOCZNYCH kart. Ich zapisane pozycje pozostają niezmienione.
    const shown = [...state.visibleIds].map(id => state.positions[id]).filter(Boolean);
    if (!shown.length) {
      state.zoom = .66; state.panX = 0; state.panY = 0;
      applyTransform();
      return;
    }
    const minX = Math.min(...shown.map(p => p.x));
    const maxX = Math.max(...shown.map(p => p.x + 180));
    const minY = Math.min(...shown.map(p => p.y));
    const maxY = Math.max(...shown.map(p => p.y + 240));
    const groupWidth = Math.max(180, maxX - minX);
    const groupHeight = Math.max(240, maxY - minY);
    const availableWidth = Math.max(100, viewport.clientWidth - 70);
    const availableHeight = Math.max(100, viewport.clientHeight - 70);
    state.zoom = Math.max(.06, Math.min(1.15,
      availableWidth / groupWidth, availableHeight / groupHeight));
    state.panX = (800 - (minX + maxX) / 2) * state.zoom;
    state.panY = (500 - (minY + maxY) / 2) * state.zoom;
    applyTransform();
  }

  function bindViewportPan() {
    let pan = null;
    // Prawy przycisk: przesuwaj mapę również po rozpoczęciu na portrecie.
    // Lewy przycisk: przesuwaj tło, natomiast na karcie przeciągaj tę kartę.
    viewport.addEventListener("contextmenu", e => e.preventDefault());
    viewport.addEventListener("pointerdown", e => {
      if (e.button !== 0 && e.button !== 2) return;
      if (e.button === 0 && e.target.closest(".person-card")) return;
      if (e.button === 2) e.preventDefault();
      pan = { id: e.pointerId, x: e.clientX, y: e.clientY,
        startX: state.panX, startY: state.panY };
      viewport.setPointerCapture(e.pointerId);
      viewport.classList.add("is-panning");
    });
    viewport.addEventListener("pointermove", e => {
      if (!pan || pan.id !== e.pointerId) return;
      state.panX = pan.startX + e.clientX - pan.x;
      state.panY = pan.startY + e.clientY - pan.y;
      applyTransform();
    });
    const stopPan = e => {
      if (!pan || pan.id !== e.pointerId) return;
      pan = null;
      viewport.classList.remove("is-panning");
    };
    for (const eventName of ["pointerup", "pointercancel", "lostpointercapture"]) {
      viewport.addEventListener(eventName, stopPan);
    }
    viewport.addEventListener("wheel", e => {
      e.preventDefault();
      setZoom(state.zoom * (e.deltaY < 0 ? 1.08 : .92));
    }, { passive: false });
  }

  document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => {
    // Każde otwarcie zakładki Atlas lokacji zaczyna się na poziomie Midgardu.
    if (b.dataset.view === "locations") window.SOM_ATLAS?.showRegion("midgard");
    if (b.dataset.view === "maps") window.SOM_MAPS?.show("midgard");
    switchView(b.dataset.view);
  }));
  $("#search").addEventListener("input", e => {
    groupFilter.search = e.target.value.trim();
    applyGrouping();
  });
  $("#zoom-in").addEventListener("click", () => setZoom(state.zoom * 1.17));
  $("#zoom-out").addEventListener("click", () => setZoom(state.zoom / 1.17));
  $("#fit").addEventListener("click", fit);
  $("#reset-positions").addEventListener("click", () => {
    // Przywróć układ aktualnie wybranej grupy; filtr i wyszukiwarka bez zmian.
    applyGrouping();
  });
  $("#close-inspector").addEventListener("click", closeCharacter);
  $("#inspector").addEventListener("click", e => {
    if (e.target === $("#inspector")) closeCharacter();
  });
  document.addEventListener("keydown", e => {
    if ($("#inspector").hidden) return;
    if (e.key === "Escape") { e.preventDefault(); closeCharacter(); return; }
    if (e.key === "Tab") {
      // Modal pozostaje klawiaturowo zamknięty; jedynym interaktywnym elementem jest zamknięcie.
      e.preventDefault();
      $("#close-inspector").focus();
    }
  });
  window.addEventListener("resize", () => { if (state.view === "relationships") fit(); });
  renderPeople();
  setupGrouping();
  renderPlaces();
  renderMaps();
  renderChronicle();
  bindViewportPan();
  fit();
})();
