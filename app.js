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
  // Publiczny widok jest tylko do odczytu: pozycje pochodzą z danych kroniki.
  // Ani kliknięcia, ani ruchy gości nie nadpisują oficjalnego układu.
  const state = {
    zoom: 0.66, panX: 0, panY: 0, selected: null, view: "relationships",
    positions: Object.fromEntries(data.people.map(p => [p.id, { x: p.x, y: p.y }]))
  };
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
    if (image && /^assets\/[a-z0-9_\-/]+\.(png|jpe?g|webp|avif)$/i.test(image)) {
      // Nie chowaj inicjałów, dopóki plik nie będzie rzeczywiście dostępny.
      const preview = new Image();
      preview.onload = () => {
        el.style.backgroundImage = 'linear-gradient(180deg,transparent 55%,#12151a88),url("' + image + '")';
        el.classList.add("has-photo");
      };
      preview.onerror = () => {
        el.style.backgroundImage = "";
        el.classList.remove("has-photo");
      };
      preview.src = image;
    }
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
      const a = state.positions[rel.from], b = state.positions[rel.to];
      if (!a || !b) return;
      const ax = a.x + 90, ay = a.y + 120, bx = b.x + 90, by = b.y + 120;
      addLine(ax, ay, bx, by, "real " + (["hostile","ally"].includes(rel.type) ? rel.type : ""));
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
      const art = make("div", "person-art");
      art.appendChild(make("span", "avatar-rune", initials(p.name)));
      setArt(art, p.image);
      card.appendChild(art);
      const name = make("div", "card-name" + (p.name.length > 21 ? " long" : ""), p.name);
      card.appendChild(name);
      card.appendChild(make("span", "card-corner", "ᛟ"));
      layer.appendChild(card);
      nodes.set(p.id, card);
      positionCard(p.id);
      card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectPerson(p.id); } });
      // Otwarcie karty, bez przeciągania obiektu. Tło nadal można przesuwać.
      card.addEventListener("pointerdown", e => e.stopPropagation());
      card.addEventListener("click", () => selectPerson(p.id));
    }
    drawConnections();
    $("#people-count").textContent = data.people.length;
    $("#links-count").textContent = (data.relationships || []).length;
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
    $("#inspector-type").textContent = p.kind.toUpperCase() + " · KRONIKA";
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
    $("#inspector").classList.add("open");
  }

  function renderPlaces() {
    const grid = $("#atlas-grid");
    grid.replaceChildren();
    for (const place of data.places) {
      const article = make("article", "place");
      article.dataset.placeId = place.id;
      const visual = make("div", "place-top");
      visual.appendChild(make("span", "", "ᛟ"));
      setArt(visual, place.image);
      const body = make("div", "place-content");
      body.appendChild(make("span", "place-kind", place.kind));
      body.appendChild(make("h3", "", place.name));
      body.appendChild(make("p", "", place.description));
      article.appendChild(visual); article.appendChild(body);
      grid.appendChild(article);
    }
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
            const el = document.querySelector('[data-place-id="' + item.placeId + '"]');
            if (el) el.scrollIntoView({behavior:"smooth",block:"center"});
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
    for (const section of document.querySelectorAll(".view")) {
      const show = section.id === (view === "relationships" ? "relationships-view" : view === "chronicle" ? "chronicle-view" : "locations-view");
      section.classList.toggle("active", show);
      section.hidden = !show;
    }
    $("#page-title").textContent = view === "relationships" ? "Sieć postaci" : view === "chronicle" ? "Kronika wydarzeń" : "Atlas lokacji";
    $("#eyebrow").textContent = view === "relationships" ? "SAGA · ŚWIAT POSTACI" : view === "chronicle" ? "SAGA · ZAPISANE CZYNY" : "SAGA · ODKRYTE KRAINY";
    $("#page-description").textContent = view === "relationships"
      ? "Portrety, powiązania i losy ludzi Północy."
      : view === "chronicle" ? "Dzieje bohaterów spisane w pamięci Północy."
      : "Miejsca odwiedzone i wspominane w kronice."
    if (view === "relationships") fit();
    $("#inspector").classList.remove("open");
  }

  function applyTransform() {
    scene.style.setProperty("--scale", state.zoom);
    scene.style.setProperty("--pan-x", state.panX + "px");
    scene.style.setProperty("--pan-y", state.panY + "px");
    $("#zoom-text").textContent = Math.round(state.zoom * 100) + "%";
  }

  function setZoom(value) {
    state.zoom = Math.max(.28, Math.min(1.7, value));
    applyTransform();
  }
  function fit() {
    if (!viewport.clientWidth || !viewport.clientHeight) return;
    state.zoom = Math.min(1.05, Math.max(.28, Math.min((viewport.clientWidth - 55) / 1130, (viewport.clientHeight - 65) / 870)));
    state.panX = 0; state.panY = 0;
    applyTransform();
  }

  function bindViewportPan() {
    let pan = null;
    viewport.addEventListener("pointerdown", e => {
      if (e.button !== 0 || e.target.closest(".person-card")) return;
      pan = { id: e.pointerId, x: e.clientX, y: e.clientY, startX: state.panX, startY: state.panY };
      viewport.setPointerCapture(e.pointerId);
    });
    viewport.addEventListener("pointermove", e => {
      if (!pan || pan.id !== e.pointerId) return;
      state.panX = pan.startX + e.clientX - pan.x;
      state.panY = pan.startY + e.clientY - pan.y;
      applyTransform();
    });
    viewport.addEventListener("pointerup", () => { pan = null; });
    viewport.addEventListener("pointercancel", () => { pan = null; });
    viewport.addEventListener("wheel", e => {
      e.preventDefault();
      setZoom(state.zoom * (e.deltaY < 0 ? 1.08 : .92));
    }, { passive: false });
  }

  document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => switchView(b.dataset.view)));
  $("#search").addEventListener("input", e => {
    const query = e.target.value.trim().toLocaleLowerCase("pl");
    nodes.forEach((node, id) => {
      const p = data.people.find(x => x.id === id);
      node.classList.toggle("muted", !!query && !p.name.toLocaleLowerCase("pl").includes(query));
    });
  });
  $("#zoom-in").addEventListener("click", () => setZoom(state.zoom * 1.17));
  $("#zoom-out").addEventListener("click", () => setZoom(state.zoom / 1.17));
  $("#fit").addEventListener("click", fit);
  $("#close-inspector").addEventListener("click", () => $("#inspector").classList.remove("open"));
  window.addEventListener("resize", () => { if (state.view === "relationships") fit(); });
  renderPeople();
  renderPlaces();
  renderChronicle();
  bindViewportPan();
  fit();
})();
