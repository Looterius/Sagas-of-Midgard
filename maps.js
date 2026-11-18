/* Sagas of Midgard — publiczne Mapy Świata.
   Mapy SVG i znaczniki krain są schematyczne, nie przedstawiają potwierdzonych granic.
   Dokładne znaczniki miejsc pokazuj wyłącznie po potwierdzeniu współrzędnych przez Skalda. */
(() => {
  "use strict";
  const $ = selector => document.querySelector(selector);
  const element = (tag, className, label) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (label !== undefined) node.textContent = label;
    return node;
  };

  const MAPS = {
    midgard: {
      name: "Midgard",
      image: "assets/maps/midgard.svg",
      intro: "Świat ludzi. Wybierz poznany obszar, aby odkrywać jego krainy.",
      regions: [{ id: "drengrlands", x: 51, y: 57 }]
    },
    drengrlands: {
      name: "Ziemie Drengrów",
      image: "assets/maps/drengrlands.svg",
      intro: "Królestwa Drengrów i niezależna Eylenda. Rozmieszczenie oznaczeń jest symboliczne.",
      regions: [
        { id: "agder", x: 23, y: 70 },
        { id: "hordalands", x: 39, y: 47 },
        { id: "vestmar", x: 70, y: 68 },
        { id: "fjordane", x: 60, y: 29 },
        { id: "eylenda", x: 84, y: 38 }
      ]
    }
  };

  let data = null;
  let callbacks = {};
  let current = "midgard";
  let zoom = 1, panX = 0, panY = 0;
  const knownRegions = () => (data?.atlasRegions || []).filter(region => region.visibility === "known");
  const knownPlaces = () => (data?.places || []).filter(place => place.visibility === "known");
  const region = id => knownRegions().find(item => item.id === id);
  const place = id => knownPlaces().find(item => item.id === id);

  function updateTransform() {
    const canvas = $("#maps-canvas");
    canvas.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
    $("#maps-zoom-label").textContent = Math.round(zoom * 100) + "%";
    $("#maps-zoom-out").disabled = zoom <= 1;
    $("#maps-zoom-in").disabled = zoom >= 2.5;
  }
  function resetTransform() { zoom = 1; panX = 0; panY = 0; updateTransform(); }
  function setZoom(value) {
    zoom = Math.max(1, Math.min(2.5, Math.round(value * 100) / 100));
    if (zoom === 1) { panX = 0; panY = 0; }
    updateTransform();
  }

  function addMarker(layer, marker, mapId) {
    const r = region(marker.id);
    if (!r) return;
    const button = element("button", "maps-marker", r.name);
    button.type = "button";
    button.style.left = marker.x + "%";
    button.style.top = marker.y + "%";
    button.title = r.name;
    button.setAttribute("aria-label", "Otwórz: " + r.name);
    button.addEventListener("pointerdown", event => event.stopPropagation());
    button.addEventListener("click", () => {
      if (mapId === "midgard") show("drengrlands");
      else if (callbacks.openAtlasRegion) callbacks.openAtlasRegion(r.id);
    });
    layer.appendChild(button);
  }

  function renderPlaceLinks() {
    const container = $("#maps-place-list");
    const section = $("#maps-places-section");
    container.replaceChildren();
    section.hidden = current !== "drengrlands";
    if (section.hidden) return;

    // Nie umieszczaj nieznanych miejsc ani domniemanych współrzędnych na mapie.
    // Nazwy poniżej otwierają te same karty co Atlas lokacji.
    const items = knownPlaces().filter(p => {
      let id = p.parentRegionId, steps = 0;
      while (id && steps++ < 12) {
        if (id === "drengrlands") return true;
        id = region(id)?.parentId;
      }
      return false;
    });
    const groups = new Map();
    items.forEach(p => {
      const parent = region(p.parentRegionId);
      const label = parent?.name || "Pozostałe miejsca";
      if (!groups.has(label)) groups.set(label, []);
      groups.get(label).push(p);
    });
    for (const [name, sites] of groups) {
      const group = element("div", "maps-site-group");
      group.appendChild(element("h3", "", name));
      const list = element("div", "maps-site-links");
      sites.forEach(site => {
        const link = element("button", "maps-site-link", site.name);
        link.type = "button";
        link.addEventListener("click", () => callbacks.openPlace?.(site.id));
        list.appendChild(link);
      });
      group.appendChild(list);
      container.appendChild(group);
    }
    if (!items.length) container.appendChild(element("p", "maps-empty", "Nie ma jeszcze przypisanych miejsc."));
  }

  function show(id = "midgard") {
    current = MAPS[id] && region(id) ? id : "midgard";
    const config = MAPS[current];
    $("#maps-current-title").textContent = config.name;
    $("#maps-current-description").textContent = config.intro;
    $("#maps-art").src = config.image;
    $("#maps-back").hidden = current === "midgard";
    const breadcrumbs = $("#maps-breadcrumbs");
    breadcrumbs.replaceChildren();
    const world = element("button", "maps-crumb", "Midgard");
    world.type = "button";
    world.disabled = current === "midgard";
    world.addEventListener("click", () => show("midgard"));
    breadcrumbs.appendChild(world);
    if (current !== "midgard") {
      breadcrumbs.appendChild(element("span", "maps-separator", "›"));
      breadcrumbs.appendChild(element("span", "maps-current", config.name));
    }
    const layer = $("#maps-marker-layer");
    layer.replaceChildren();
    config.regions.forEach(item => addMarker(layer, item, current));
    resetTransform();
    renderPlaceLinks();
  }

  function showForPlace(placeId) {
    const p = place(placeId);
    if (!p) { show("midgard"); return; }
    show("drengrlands");
    // Bez zatwierdzonych koordynatów nie ustawiamy fikcyjnego znacznika.
    const matches = [...$("#maps-place-list").querySelectorAll(".maps-site-link")];
    const target = matches.find(button => button.textContent === p.name);
    if (target) {
      target.classList.add("maps-site-link--highlight");
      target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function bindPanAndZoom() {
    const viewport = $("#maps-viewport");
    let drag = null;
    viewport.addEventListener("pointerdown", e => {
      if (e.button !== 0 || e.target.closest("button")) return;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, panX, panY };
      viewport.setPointerCapture(e.pointerId);
    });
    viewport.addEventListener("pointermove", e => {
      if (!drag || e.pointerId !== drag.id) return;
      panX = drag.panX + e.clientX - drag.x;
      panY = drag.panY + e.clientY - drag.y;
      updateTransform();
    });
    for (const type of ["pointerup", "pointercancel", "lostpointercapture"]) {
      viewport.addEventListener(type, () => { drag = null; });
    }
    viewport.addEventListener("wheel", e => {
      if (e.ctrlKey || e.metaKey) return; // zachowaj zwykłe przewijanie strony
      if (zoom === 1 && e.deltaY > 0) return;
      e.preventDefault();
      setZoom(zoom * (e.deltaY < 0 ? 1.13 : 0.89));
    }, { passive: false });
    $("#maps-zoom-in").addEventListener("click", () => setZoom(zoom * 1.25));
    $("#maps-zoom-out").addEventListener("click", () => setZoom(zoom / 1.25));
    $("#maps-reset").addEventListener("click", resetTransform);
    $("#maps-back").addEventListener("click", () => show("midgard"));
    $("#maps-open-atlas").addEventListener("click", () => callbacks.openAtlasRegion?.(current));
  }

  function mount(options) {
    data = options.data;
    callbacks = options;
    bindPanAndZoom();
    show("midgard");
  }
  window.SOM_MAPS = { mount, show, showForPlace };
})();
