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
  const graph = window.SOM_GRAPH_GEOMETRY;
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
  const activeCatalog = { bestiary: null, items: null };
  // Indywidualny, lokalny układ dla każdego widoku/filtra. Zmiana zakładki
  // nie może kasować pozycji, które użytkownik właśnie sam ustawił.
  const savedLayouts = new Map();
  const editedLayouts = new Set();
  const layoutKey = () => JSON.stringify({
    primary: groupFilter.primary,
    dimension: groupFilter.dimension,
    value: groupFilter.value,
    search: groupFilter.search.trim()
  });
  let activeLayoutKey = null;
  const groups = window.SOM_GROUPS;
  const nodes = new Map();
  const NS = "http://www.w3.org/2000/svg";
  // Przesunięcie palcem nie może przypadkowo otwierać karty postaci.
  let lastTouchGestureEnd = -Infinity;

  function initials(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(x => x[0]).join("").toUpperCase();
  }

  function make(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  // Zamiast wczytywania 2–3 MB zdjęć dla kart 180×189:
  // miniatura WebP na mapie, szczegół WebP dopiero po otwarciu biografii.
  const portraitObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const photo = entry.target;
          if (photo.dataset.pendingSrc) {
            photo.src = photo.dataset.pendingSrc;
            delete photo.dataset.pendingSrc;
          }
          portraitObserver.unobserve(photo);
        }
      }, { root: viewport, rootMargin: "150px", threshold: 0 })
    : null;

  function setArt(el, image, size = "thumb") {
    if (!image || !/^assets\/portraits\/[^<>"'?#\\]+\.(png|jpe?g|webp|avif)$/i.test(image))
      return;
    const entry = window.SOM_PORTRAITS?.[image];
    if (entry?.missing) return; // brak potwierdzonego pliku: bez zbędnego 404
    const preferred = size === "full" ? entry?.full : entry?.thumb;
    // Jeśli nowy portret nie został jeszcze zoptymalizowany, nadal zadziała oryginał.
    const choices = [...new Set([preferred, image].filter(Boolean))];
    const sources = choices.map(file =>
      file.split("/").map(encodeURIComponent).join("/")
    );
    sources.push("https://raw.githubusercontent.com/Looterius/Sagas-of-Midgard/main/" +
      image.split("/").map(encodeURIComponent).join("/"));
    const portrait = document.createElement("img");
    portrait.alt = "";
    portrait.className = "asset-photo";
    portrait.decoding = "async";
    portrait.draggable = false; // natywny drag obrazu nie może blokować ruchu karty
    portrait.loading = size === "full" ? "eager" : "lazy";
    portrait.fetchPriority = size === "full" ? "high" : "low";
    let attempt = 0;
    portrait.onload = () => el.classList.add("has-photo");
    portrait.onerror = () => {
      attempt++;
      if (attempt < sources.length) {
        portrait.src = sources[attempt];
      } else {
        portraitObserver?.unobserve(portrait);
        portrait.remove();
        el.classList.remove("has-photo");
      }
    };
    // Tylko widoczne miniatury sieci pobieramy z wyprzedzeniem.
    // Zoom/pan aktualizują IntersectionObserver automatycznie.
    if (size === "thumb" && portraitObserver && el.classList.contains("person-art")) {
      portrait.dataset.pendingSrc = sources[0];
      portraitObserver.observe(portrait);
    } else {
      portrait.src = sources[0];
    }
    el.appendChild(portrait);
  }

  function drawConnections() {
    svg.replaceChildren();
    nodes.forEach(node => node.classList.remove("related-highlight"));
    if (!graph) return;
    for (const rel of data.relationships || []) {
      if (!state.visibleIds.has(rel.from) || !state.visibleIds.has(rel.to)) continue;
      const route = graph.link(rel.from, rel.to, state.positions, state.visibleIds);
      if (!route) continue;
      const linkType = ["family", "ally", "hostile"].includes(rel.type) ? rel.type : "other";
      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", route.path);
      path.setAttribute("class", "graph-link graph-link--" + linkType);
      const from = data.people.find(p => p.id === rel.from);
      const to = data.people.find(p => p.id === rel.to);
      const title = document.createElementNS(NS, "title");
      title.textContent = (from?.name || rel.from) + " — " + (to?.name || rel.to) +
        (rel.label ? ": " + rel.label : "");
      path.appendChild(title);
      const setHighlight = on => {
        nodes.get(rel.from)?.classList.toggle("related-highlight", on);
        nodes.get(rel.to)?.classList.toggle("related-highlight", on);
      };
      path.addEventListener("pointerenter", () => setHighlight(true));
      path.addEventListener("pointerleave", () => setHighlight(false));
      svg.appendChild(path);
      // Kotwice dokładnie na ramkach portretów, a nie wewnątrz zdjęć.
      for (const point of [route.from, route.to]) {
        const dot = document.createElementNS(NS, "circle");
        dot.setAttribute("cx", point.x);
        dot.setAttribute("cy", point.y);
        dot.setAttribute("r", 5);
        dot.setAttribute("class", "graph-anchor graph-anchor--" + linkType);
        svg.appendChild(dot);
      }
    }
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
      if (p.grouping?.role === "hero" || p.grouping?.lifeStatus === "deceased" ||
          p.grouping?.statuses?.includes("captive")) {
        const dead = p.grouping?.lifeStatus === "deceased";
        const captive = p.grouping?.statuses?.includes("captive");
        const label = dead ? "† ZMARŁY" : captive ? "JENIEC" : "BOHATER";
        const marker = make("span", "person-role-badge" +
          (dead ? " is-deceased" : captive ? " is-captive" : ""), label);
        card.appendChild(marker);
      }
      layer.appendChild(card);
      nodes.set(p.id, card);
      positionCard(p.id);
      card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectPerson(p.id); } });
      // Lewy: przeciągaj kartę; zwykłe kliknięcie nadal otwiera historię.
      // Prawy: zdarzenie przechodzi do viewportu i przesuwa całą mapę.
      let dragging = null, lastDragEnd = -Infinity, touchHold = null;
      const clearTouchHold = () => {
        if (touchHold) clearTimeout(touchHold.timer);
        touchHold = null;
      };
      card.addEventListener("dragstart", e => e.preventDefault());
      card.addEventListener("pointerdown", e => {
        if (!state.visibleIds.has(p.id)) return;
        if (e.pointerType === "touch") {
          // Krótki tap otwiera kartę, przeciągnięcie palcem przesuwa planszę.
          // Dopiero przytrzymanie 380 ms przełącza gest na przeciąganie postaci.
          if (!e.isPrimary) return;
          clearTouchHold();
          const point = {id:e.pointerId,x:e.clientX,y:e.clientY};
          point.timer = setTimeout(() => {
            if (touchHold !== point || dragging) return;
            const pos=state.positions[p.id];
            if (!pos) return;
            dragging = {pointerId:point.id,x:point.x,y:point.y,
              startX:pos.x,startY:pos.y,moved:false,touch:true};
            clearTouchHold();
            card.classList.add("is-dragging");
            card.setPointerCapture(point.id);
          },380);
          touchHold = point;
          return; // viewport nadal obsługuje zwykłe przesuwanie planszy
        }
        if (e.button !== 0) return;
        e.stopPropagation();
        const pos = state.positions[p.id];
        dragging = {
          pointerId: e.pointerId, x: e.clientX, y: e.clientY,
          startX: pos.x, startY: pos.y, moved: false
        };
        card.setPointerCapture(e.pointerId);
      });
      card.addEventListener("pointermove", e => {
        if (touchHold && e.pointerId === touchHold.id &&
            Math.hypot(e.clientX-touchHold.x,e.clientY-touchHold.y)>9)
          clearTouchHold(); // gest przesuwania planszy, nie karty
        if (!dragging || dragging.pointerId !== e.pointerId) return;
        e.stopPropagation(); // przytrzymana karta nie może równocześnie przesuwać planszy
        const dx = e.clientX - dragging.x;
        const dy = e.clientY - dragging.y;
        // Małe ruchy dłoni traktujemy jak kliknięcie, nie przestawienie karty.
        if (!dragging.moved && Math.hypot(dx, dy) < 5) return;
        dragging.moved = true;
        card.classList.add("is-dragging");
        // Przeliczenie pikseli ekranu na jednostki płótna niezależnie od zoomu.
        // Wolne płótno: bez sztucznej granicy 1600×1000.
        // Portrety mogą wyjść poza początkową scenę; przyciskiem Dopasuj
        // użytkownik może ponownie zobaczyć wszystkie widoczne postacie.
        state.positions[p.id] = {
          x: dragging.startX + dx / state.zoom,
          y: dragging.startY + dy / state.zoom
        };
        positionCard(p.id);
        drawConnections();
        if (activeLayoutKey !== null) editedLayouts.add(activeLayoutKey);
        $("#reset-positions").hidden = false;
      });
      function stopCardDrag(e) {
        if (touchHold && touchHold.id === e.pointerId) clearTouchHold();
        if (!dragging || dragging.pointerId !== e.pointerId) return;
        // Po długim przytrzymaniu nie otwieramy przypadkowo biografii,
        // nawet jeżeli palec nie przemieścił karty.
        if (dragging.moved || dragging.touch) lastDragEnd = e.timeStamp;
        dragging = null;
        card.classList.remove("is-dragging");
      }
      card.addEventListener("pointerup", stopCardDrag);
      card.addEventListener("pointercancel", stopCardDrag);
      card.addEventListener("lostpointercapture", stopCardDrag);
      card.addEventListener("click", e => {
        if (e.timeStamp - lastTouchGestureEnd < 650 ||
            e.timeStamp - lastDragEnd < 500) {
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
        window.SOM_NAV?.changed();
      });
      panel.appendChild(button);
    }
  }

  function applyGrouping(reset = false) {
    if (!groups) return;
    const people = data.people.filter(person => groups.matches(data, person, groupFilter));
    const isDefault = groupFilter.primary === "all" &&
      !groupFilter.value && !groupFilter.search.trim();
    const nextKey = layoutKey();
    const copyPositions = positions => Object.fromEntries(
      Object.entries(positions).map(([id, pos])=>[id,{...pos}]));
    if (activeLayoutKey !== null && activeLayoutKey !== nextKey)
      savedLayouts.set(activeLayoutKey,copyPositions(state.positions));
    if (reset) {
      savedLayouts.delete(nextKey);
      editedLayouts.delete(nextKey);
    }
    const earlier = !reset && activeLayoutKey === nextKey
      ? state.positions : savedLayouts.get(nextKey);
    state.visibleIds = new Set(people.map(person => person.id));
    state.positions = earlier ? copyPositions(earlier) : isDefault
      ? copyPositions(officialPositions) : groups.layout(people);
    activeLayoutKey = nextKey;
    $("#reset-positions").hidden = !editedLayouts.has(nextKey);
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
        window.SOM_NAV?.changed();
      });
    });
    document.querySelectorAll("[data-character-dimension]").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.characterDimension;
        groupFilter.expanded = groupFilter.expanded === id ? null : id;
        renderGroupOptions();
        $("#character-group-reset").hidden = !groupFilter.expanded &&
          groupFilter.primary === "all" && !groupFilter.value && !groupFilter.search.trim();
        window.SOM_NAV?.changed();
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
      window.SOM_NAV?.changed();
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
      (p.grouping?.lifeStatus === "deceased" ? " · ZMARŁY" :
       p.grouping?.statuses?.includes("captive") ? " · JENIEC" : "") + " · KRONIKA";
    $("#inspector-name").textContent = p.name;
    $("#inspector-description").textContent =
      p.description || "Postać znana z kroniki. Jej historia i motywacje będą uzupełniane wraz z odkryciami graczy.";
    const art = $("#inspector-art");
    art.style.backgroundImage = "";
    art.classList.remove("has-photo");
    art.replaceChildren(make("span", "", initials(p.name)));
    setArt(art, p.image, "full");
    const relations = $("#inspector-relations");
    relations.replaceChildren();
    relations.className = "character-relations";
    let hasLinks = false;
    const known = (data.relationships || []).filter(r => r.from === id || r.to === id);
    if (known.length) {
      for (const r of known) {
        const other = data.people.find(p2 => p2.id === (r.from === id ? r.to : r.from));
        if (!other) continue;
        const button = make("button", "relation-chip relation-link");
        button.type = "button";
        button.setAttribute("aria-label", "Otwórz postać: " + other.name +
          (r.label ? ", " + r.label : ""));
        button.appendChild(make("span", "relation-link-name", other.name));
        button.appendChild(make("small", "", r.label || r.type || "Powiązanie"));
        button.appendChild(make("span", "relation-arrow", "→"));
        button.addEventListener("click", () => selectPerson(other.id));
        relations.appendChild(button);
        hasLinks = true;
      }
    }
    // Jawne miejsca z Atlasu: powiązanie, nie domniemane miejsce urodzenia.
    const knownPlaceIds = new Set(p.grouping?.settlementIds || []);
    for (const place of data.places || []) {
      if (place.visibility === "known" && place.personIds?.includes(id))
        knownPlaceIds.add(place.id);
    }
    const linkedPlaces = [...knownPlaceIds]
      .map(placeId => (data.places || []).find(place =>
        place.id === placeId && place.visibility === "known"))
      .filter(Boolean);
    const linkedRegions = [...new Set(p.grouping?.kingdomIds || [])]
      .map(regionId => (data.atlasRegions || []).find(region =>
        region.id === regionId && region.visibility === "known"))
      .filter(Boolean);
    if (linkedPlaces.length || linkedRegions.length) {
      relations.appendChild(make("div", "relation-subheading", "ZWIĄZANE MIEJSCA I KRAINY"));
    }
    for (const place of linkedPlaces) {
      const button = make("button", "relation-chip relation-link relation-link--place");
      button.type = "button";
      button.appendChild(make("span", "relation-link-name", "⌖ " + place.name));
      button.appendChild(make("small", "", "Znany związek z miejscem · Otwórz Atlas"));
      button.appendChild(make("span", "relation-arrow", "→"));
      button.addEventListener("click", () => {
        closeCharacter();
        switchView("locations");
        window.SOM_ATLAS?.open(place.id);
      });
      relations.appendChild(button);
      hasLinks = true;
    }
    for (const region of linkedRegions) {
      const button = make("button", "relation-chip relation-link relation-link--place");
      button.type = "button";
      button.appendChild(make("span", "relation-link-name", "⌖ " + region.name));
      button.appendChild(make("small", "", "Znany związek z krainą · Otwórz Atlas"));
      button.appendChild(make("span", "relation-arrow", "→"));
      button.addEventListener("click", () => {
        closeCharacter();
        switchView("locations");
        window.SOM_ATLAS?.showRegion(region.id);
      });
      relations.appendChild(button);
      hasLinks = true;
    }
    if (!hasLinks) {
      relations.textContent = "Brak ujawnionych relacji. Sieć powiązań zostanie uzupełniona po kolejnych sesjach.";
      relations.className = "relations-empty";
    }
    const dialog = $("#inspector");
    dialog.classList.toggle("is-deceased", p.grouping?.lifeStatus === "deceased");
    dialog.hidden = false;
    dialog.setAttribute("aria-hidden", "false");
    dialog.classList.add("open");
    document.body.classList.add("character-modal-open");
    // Nawigacja między powiązanymi osobami zawsze rozpoczyna kartę od góry.
    const scroller = dialog.querySelector(".character-dialog");
    if (scroller) scroller.scrollTop = 0;
    const details = dialog.querySelector(".character-details");
    if (details) details.scrollTop = 0;
    $("#close-inspector").focus();
    window.SOM_NAV?.changed();
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

  // Bestiariusz i przedmioty zawierają wyłącznie wydarzenia już zapisane
  // w PUBLICZNEJ kronice. Brak danych = pusty dział, bez sekretów MG.
  function setCatalogEntry(view, id) {
    const container = $(view === "bestiary" ? "#bestiary-list" : "#items-list");
    if (!container) return;
    const selected = [...container.querySelectorAll(".lore-entry")]
      .find(node => node.dataset.entryId === id) ? id : null;
    activeCatalog[view] = selected;
    for (const card of container.querySelectorAll(".lore-entry"))
      card.open = card.dataset.entryId === selected;
  }

  function renderCatalog(view, entries) {
    const container = $(view === "bestiary" ? "#bestiary-list" : "#items-list");
    container.replaceChildren();
    const knownEvents = new Set((data.chronicle || []).map(event => event.id));
    const knownPlaces = new Set((data.places || [])
      .filter(place => place.visibility === "known").map(place => place.id));
    for (const entry of entries || []) {
      if (!entry?.id || !entry.name || !knownEvents.has(entry.eventId) ||
          !knownPlaces.has(entry.placeId)) continue;
      const card = make("details", "lore-entry");
      card.dataset.entryId = entry.id;
      const summary = make("summary", "lore-entry-summary");
      const illustration = make("span", "lore-entry-symbol", entry.symbol || "ᛟ");
      illustration.setAttribute("aria-hidden", "true");
      summary.appendChild(illustration);
      const content = make("div", "lore-entry-overview");
      content.appendChild(make("span", "lore-entry-kind", entry.kind));
      content.appendChild(make("h3", "lore-entry-title", entry.name));
      content.appendChild(make("p", "lore-entry-excerpt", entry.summary));
      summary.appendChild(content);
      summary.appendChild(make("span", "lore-entry-arrow", "⌄"));
      card.appendChild(summary);
      const body = make("div", "lore-entry-detail");
      body.appendChild(make("p", "", entry.history));
      const actions = make("div", "lore-entry-actions");
      const place = (data.places || []).find(p => p.id === entry.placeId);
      const atlasLink = make("button", "lore-entry-action", "⌖ " + (place?.name || "Atlas"));
      atlasLink.type = "button";
      atlasLink.addEventListener("click", () => {
        switchView("locations");
        window.SOM_ATLAS?.open(entry.placeId);
      });
      actions.appendChild(atlasLink);
      const eventLink = make("button", "lore-entry-action", "ᚱ Zobacz w Kronice");
      eventLink.type = "button";
      eventLink.addEventListener("click", () => {
        switchView("chronicle");
        const target = document.querySelector('[data-event-id="' + entry.eventId + '"]');
        if (!target) return;
        if (target.querySelector(".chronicle-story")?.hidden)
          target.querySelector(".chronicle-expand")?.click();
        target.scrollIntoView({behavior:"smooth",block:"center"});
      });
      actions.appendChild(eventLink);
      body.appendChild(actions);
      card.appendChild(body);
      card.addEventListener("toggle", () => {
        if (card.open) {
          if (activeCatalog[view] === entry.id) return;
          activeCatalog[view] = entry.id;
          for (const other of container.querySelectorAll(".lore-entry"))
            if (other !== card) other.open = false;
          window.SOM_NAV?.changed();
        } else if (activeCatalog[view] === entry.id) {
          activeCatalog[view] = null;
          window.SOM_NAV?.changed();
        }
      });
      container.appendChild(card);
    }
    if (!container.children.length)
      container.appendChild(make("p", "lore-catalog-empty",
        "Brak jeszcze opisanych odkryć w tym dziale. Nowe wpisy pojawią się po kolejnych sesjach."));
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
      $("#chronicle-count").textContent = shown.length + (shown.length === 1 ? " wydarzenie" : " wydarzeń") + " · " + new Set(shown.map(e => e.chapter)).size + " części";
      if (!shown.length) list.appendChild(make("p", "chronicle-empty", "Nie zapisano jeszcze wydarzeń z tego miejsca."));
      let previousChapter = null;
      for (const item of shown) {
        if (item.chapter !== previousChapter) {
          previousChapter = item.chapter;
          const chapter = (data.chronicleChapters || []).find(c => c.id === item.chapter);
          const heading = make("header", "chronicle-section-heading");
          heading.appendChild(make("span", "chronicle-section-kicker", "CZĘŚĆ " + item.chapter));
          heading.appendChild(make("h3", "chronicle-section-title", chapter?.title || "Kronika"));
          if (chapter?.subtitle) heading.appendChild(make("p", "chronicle-section-subtitle", chapter.subtitle));
          list.appendChild(heading);
        }
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
        const toggle = make("button", "chronicle-expand", "Czytaj całą opowieść");
        toggle.type = "button";
        toggle.setAttribute("aria-expanded", "false");
        toggle.addEventListener("click", () => {
          const opening = expanded.hidden;
          expanded.hidden = !opening;
          toggle.textContent = opening ? "Zwiń opowieść" : "Czytaj całą opowieść";
          toggle.setAttribute("aria-expanded", String(opening));
          window.SOM_NAV?.changed();
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
    filter.addEventListener("change", () => {
      paint();
      window.SOM_NAV?.changed();
    });
    paint();
  }

  function switchView(view) {
    const previousView = state.view;
    state.view = view;
    for (const b of document.querySelectorAll("[data-view]"))
      b.classList.toggle("active", b.dataset.view === view);
    const viewIds = {
      relationships: "relationships-view", maps: "maps-view",
      locations: "locations-view", chronicle: "chronicle-view",
      bestiary: "bestiary-view", items: "items-view"
    };
    for (const section of document.querySelectorAll(".view")) {
      const show = section.id === viewIds[view];
      section.classList.toggle("active", show);
      section.hidden = !show;
    }
    $("#page-title").textContent = ({ relationships: "Sieć postaci", maps: "Mapy świata", locations: "Atlas lokacji",
       chronicle: "Kronika wydarzeń", bestiary: "Bestiariusz", items: "Przedmioty" })[view];
    $("#eyebrow").textContent = ({ relationships: "SAGA · ŚWIAT POSTACI", maps: "SAGA · KARTOGRAFIA",
       locations: "SAGA · ODKRYTE KRAINY", chronicle: "SAGA · ZAPISANE CZYNY",
       bestiary: "SAGA · ZNANE STWORZENIA", items: "SAGA · RELIKWIE I PRZEDMIOTY" })[view];
    $("#page-description").textContent = ({
      relationships: "Portrety, powiązania i losy ludzi Północy.",
      maps: "Interaktywne mapy poznanych krain i miejsc.",
      locations: "Miejsca odwiedzone i wspominane w kronice.",
      chronicle: "Dzieje bohaterów spisane w pamięci Północy.",
      bestiary: "Istoty napotkane w znanych już wyprawach.",
      items: "Odkryte relikwie i przedmioty drużyny."
    })[view];
    if (view === "relationships" && previousView !== "relationships") fit();
    closeCharacter();
    if (previousView !== view) window.scrollTo(0, 0);
    window.SOM_NAV?.changed();
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
    window.SOM_NAV?.changed();
  }

  function applyTransform() {
    scene.style.setProperty("--scale", state.zoom);
    scene.style.setProperty("--pan-x", state.panX + "px");
    scene.style.setProperty("--pan-y", state.panY + "px");
    $("#zoom-text").textContent = Math.round(state.zoom * 100) + "%";
  }

  function setZoom(value) {
    state.zoom = Math.max(.01, Math.min(3, value));
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
    // Daj kartom margines w obrębie rzeczywistego płótna, bez urywania ramki.
    const padding = Math.min(52, viewport.clientWidth * .075, viewport.clientHeight * .075);
    const availableWidth = Math.max(100, viewport.clientWidth - padding * 2);
    const availableHeight = Math.max(100, viewport.clientHeight - padding * 2);
    state.zoom = Math.max(.01, Math.min(1.15,
      availableWidth / groupWidth, availableHeight / groupHeight));
    state.panX = (800 - (minX + maxX) / 2) * state.zoom;
    state.panY = (500 - (minY + maxY) / 2) * state.zoom;
    applyTransform();
  }

  function bindViewportPan() {
    let pan = null;
    const fingers = new Map();
    let gesture = null;
    let movedTouch = false;
    const midpoint = (a, b) => ({
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2
    });
    const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

    function beginTouchGesture() {
      const points = [...fingers.values()];
      if (points.length >= 2) {
        const mid = midpoint(points[0], points[1]);
        const rect = viewport.getBoundingClientRect();
        gesture = {
          kind: "pinch",
          startDistance: Math.max(1, distance(points[0], points[1])),
          startZoom: state.zoom,
          worldX: 800 + (mid.x - rect.left - viewport.clientWidth / 2 - state.panX) / state.zoom,
          worldY: 500 + (mid.y - rect.top - viewport.clientHeight / 2 - state.panY) / state.zoom
        };
        movedTouch = true; // każdy dwupalcowy gest wyłącza przypadkowy klik
      } else if (points.length === 1) {
        gesture = {
          kind: "pan", x: points[0].x, y: points[0].y,
          startPanX: state.panX, startPanY: state.panY
        };
      } else {
        gesture = null;
      }
    }
    viewport.addEventListener("contextmenu", e => e.preventDefault());
    viewport.addEventListener("pointerdown", e => {
      if (e.pointerType === "touch") {
        fingers.set(e.pointerId, {x: e.clientX, y: e.clientY});
        if (fingers.size === 1) movedTouch = false;
        beginTouchGesture();
        return; // zostaw naturalny tap na karcie, nie przechwytuj wskaźnika
      }
      if (e.button !== 0 && e.button !== 2) return;
      if (e.button === 0 && e.target.closest(".person-card")) return;
      if (e.button === 2) e.preventDefault();
      pan = { id: e.pointerId, x: e.clientX, y: e.clientY,
        startX: state.panX, startY: state.panY };
      viewport.setPointerCapture(e.pointerId);
      viewport.classList.add("is-panning");
    });
    viewport.addEventListener("pointermove", e => {
      if (e.pointerType === "touch") {
        if (!fingers.has(e.pointerId)) return;
        fingers.set(e.pointerId, {x: e.clientX, y: e.clientY});
        const points = [...fingers.values()];
        if (!gesture) return;
        if (gesture.kind === "pinch" && points.length >= 2) {
          const mid = midpoint(points[0], points[1]);
          const rect = viewport.getBoundingClientRect();
          const newZoom = Math.max(.01, Math.min(3,
            gesture.startZoom * distance(points[0], points[1]) / gesture.startDistance));
          state.zoom = newZoom;
          // Zachowaj ten sam punkt mapy dokładnie pod środkiem dwóch palców.
          state.panX = mid.x - rect.left - viewport.clientWidth / 2 -
            (gesture.worldX - 800) * newZoom;
          state.panY = mid.y - rect.top - viewport.clientHeight / 2 -
            (gesture.worldY - 500) * newZoom;
          movedTouch = true;
          applyTransform();
        } else if (gesture.kind === "pan" && points.length === 1) {
          const dx = points[0].x - gesture.x, dy = points[0].y - gesture.y;
          if (Math.hypot(dx, dy) > 6) movedTouch = true;
          if (movedTouch) {
            state.panX = gesture.startPanX + dx;
            state.panY = gesture.startPanY + dy;
            applyTransform();
          }
        }
        return;
      }
      if (!pan || pan.id !== e.pointerId) return;
      state.panX = pan.startX + e.clientX - pan.x;
      state.panY = pan.startY + e.clientY - pan.y;
      applyTransform();
    });
    const stopPan = e => {
      if (e.pointerType === "touch") {
        if (!fingers.has(e.pointerId)) return;
        if (movedTouch) lastTouchGestureEnd = e.timeStamp;
        fingers.delete(e.pointerId);
        // Po puszczeniu jednego palca można kontynuować przesuwanie bez skoku.
        beginTouchGesture();
        return;
      }
      if (!pan || pan.id !== e.pointerId) return;
      pan = null;
      viewport.classList.remove("is-panning");
    };
    for (const name of ["pointerup", "pointercancel", "lostpointercapture"])
      viewport.addEventListener(name, stopPan);
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
    // Przywróć układ tylko wybranego filtra, nie kasuj innych ustawień.
    applyGrouping(true);
  });
  const requestCloseCharacter = () => {
    if (window.SOM_NAV) window.SOM_NAV.closeLayer(closeCharacter);
    else closeCharacter();
  };
  $("#close-inspector").addEventListener("click", requestCloseCharacter);
  $("#inspector").addEventListener("click", e => {
    if (e.target === $("#inspector")) requestCloseCharacter();
  });
  document.addEventListener("keydown", e => {
    if ($("#inspector").hidden) return;
    if (e.key === "Escape") { e.preventDefault(); requestCloseCharacter(); return; }
    if (e.key === "Tab") {
      const buttons = [...$("#inspector").querySelectorAll("button:not([disabled])")]
        .filter(button => button.getClientRects().length > 0);
      if (!buttons.length) return;
      const first = buttons[0], last = buttons[buttons.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  window.addEventListener("resize", () => { if (state.view === "relationships") fit(); });

  // Stan nawigacji to WYŁĄCZNIE jawne identyfikatory i lokalne ustawienia UI.
  // Nie zapisujemy danych Skalda ani plików w historii przeglądarki.
  function captureNavigation() {
    const atlas = window.SOM_ATLAS?.getNavigationState() || {};
    return {
      view: state.view,
      person: $("#inspector").hidden ? null : state.selected,
      place: atlas.place || null,
      region: atlas.region || "midgard",
      map: window.SOM_MAPS?.getCurrent() || "midgard",
      group: {
        primary: groupFilter.primary,
        dimension: groupFilter.dimension,
        value: groupFilter.value,
        expanded: groupFilter.expanded
      },
      entry: (state.view === "bestiary" || state.view === "items")
        ? activeCatalog[state.view] : null,
      chronicleFilter: $("#chronicle-place-filter").value,
      chronicleExpanded: [...document.querySelectorAll(".chronicle-card")]
        .filter(card => !card.querySelector(".chronicle-story")?.hidden)
        .map(card => card.dataset.eventId)
    };
  }

  function restoreNavigation(route) {
    const views = new Set(["relationships", "maps", "locations", "chronicle", "bestiary", "items"]);
    if (!views.has(route.view)) return;

    // Wyczyść aktualne modale przed przywróceniem poprzedniego ekranu.
    closeCharacter();
    window.SOM_ATLAS?.close();

    const group = route.group || {};
    if (["all", "heroes", "npc", "deceased", "rulers", "captives"].includes(group.primary)) {
      const different = groupFilter.primary !== group.primary ||
        groupFilter.dimension !== (group.dimension || null) ||
        groupFilter.value !== (group.value || null) ||
        groupFilter.expanded !== (group.expanded || null);
      if (different) {
        groupFilter.primary = group.primary;
        groupFilter.dimension = group.dimension || null;
        const supported = group.dimension &&
          groups.options(data, group.dimension).some(item => item.id === group.value);
        groupFilter.value = supported ? group.value : null;
        groupFilter.dimension = supported ? group.dimension : null;
        groupFilter.expanded = group.expanded || null;
        applyGrouping();
      }
    }

    const previousRegion = window.SOM_ATLAS?.getNavigationState()?.region;
    const previousMap = window.SOM_MAPS?.getCurrent();
    if (previousRegion !== route.region)
      window.SOM_ATLAS?.showRegion(route.region || "midgard");
    if (previousMap !== route.map)
      window.SOM_MAPS?.show(route.map || "midgard");

    const filter = $("#chronicle-place-filter");
    if (route.chronicleFilter && filter.value !== route.chronicleFilter) {
      filter.value = route.chronicleFilter;
      filter.dispatchEvent(new Event("change"));
    }
    const intended = new Set(route.chronicleExpanded || []);
    for (const card of document.querySelectorAll(".chronicle-card")) {
      const story = card.querySelector(".chronicle-story");
      if (story && story.hidden === intended.has(card.dataset.eventId))
        card.querySelector(".chronicle-expand")?.click();
    }

    const wasView = state.view;
    switchView(route.view);
    // Wstecz między poziomami Atlasu/Map nie powinno pozostawiać ekranu
    // przewiniętego do przypadkowego miejsca w poprzedniej krainie.
    if (wasView === route.view &&
        ((route.view === "locations" && previousRegion !== route.region) ||
         (route.view === "maps" && previousMap !== route.map)))
      window.scrollTo(0, 0);
    if (route.place && data.places.some(p => p.id === route.place && p.visibility === "known"))
      window.SOM_ATLAS?.open(route.place);
    if (route.person && route.view === "relationships" &&
        data.people.some(p => p.id === route.person))
      selectPerson(route.person);
    if (route.view === "bestiary" || route.view === "items")
      setCatalogEntry(route.view, route.entry || null);
  }

  renderPeople();
  setupGrouping();
  renderPlaces();
  renderMaps();
  renderChronicle();
  renderCatalog("bestiary", data.bestiary);
  renderCatalog("items", data.items);
  bindViewportPan();
  fit();
  window.SOM_NAV?.mount({ snapshot: captureNavigation, restore: restoreNavigation });
})();
