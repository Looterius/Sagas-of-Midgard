/* Sagas of Midgard — publiczne Mapy Świata.
   Mapa Ziem Drengrów jest ilustracją dodaną przez autora kampanii.
   Hotspoty odpowiadają wydrukowanym nazwom, nie ustanawiają granic ani nowego kanonu.
   Dodatkowe pinezki wymagają potwierdzenia przez Skalda. */
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
    drengrlands: {
      name: "Ziemie Drengrów",
      image: "assets/maps/Drengrlands.png",
      intro: "Oryginalna mapa kampanii. Kliknij nazwę krainy na obrazie albo wybierz ją z listy poniżej.",
      // Prostokąty wskazują wydrukowane nazwy krain, nie ich polityczne granice.
      regions: [
        { id: "eylenda", x: 22.4, y: 41.9, w: 15.3, h: 5.4 },
        { id: "agder", x: 30.9, y: 60.5, w: 11.6, h: 5.6 },
        { id: "hordalands", x: 57.3, y: 40.8, w: 16.3, h: 5.6 },
        { id: "vestmar", x: 63.5, y: 62.2, w: 11, h: 5.3 },
        { id: "fjordane", x: 84.2, y: 69, w: 13.2, h: 5.4 }
      ]
      // Nie przypinamy tu miejsc do arbitralnych punktów.
      // Miejsce może mieć pinezkę wyłącznie po zatwierdzeniu mapPosition.
    }
  };

  let data = null;
  let callbacks = {};
  let current = "drengrlands";
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
    $("#maps-zoom-in").disabled = zoom >= 4;
  }
  function resetTransform() { zoom = 1; panX = 0; panY = 0; updateTransform(); }
  function setZoom(value) {
    zoom = Math.max(1, Math.min(4, Math.round(value * 100) / 100));
    if (zoom === 1) { panX = 0; panY = 0; }
    updateTransform();
  }

  function addMarker(layer, marker) {
    const r = region(marker.id);
    if (!r) return;
    const button = element("button", "maps-hotspot maps-hotspot--region");
    button.type = "button";
    button.dataset.regionId = r.id;
    button.dataset.label = r.name;
    button.style.left = marker.x + "%";
    button.style.top = marker.y + "%";
    button.style.width = marker.w + "%";
    button.style.height = marker.h + "%";
    button.title = r.name;
    button.setAttribute("aria-label", "Otwórz krainę w Atlasie: " + r.name);
    button.addEventListener("pointerdown", event => event.stopPropagation());
    button.addEventListener("click", () => callbacks.openAtlasRegion?.(r.id));
    layer.appendChild(button);
  }

  function renderRegionLinks() {
    const container = $("#maps-region-links");
    container.replaceChildren();
    const ids = ["agder", "hordalands", "vestmar", "fjordane", "eylenda", "osady-bohaterow"];
    for (const id of ids) {
      const entry = region(id);
      if (!entry) continue;
      const button = element("button", "maps-region-link", entry.name);
      button.type = "button";
      button.dataset.regionId = id;
      button.addEventListener("click", () => callbacks.openAtlasRegion?.(id));
      container.appendChild(button);
    }
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
        link.dataset.placeId = site.id;
        link.addEventListener("click", () => callbacks.openPlace?.(site.id));
        list.appendChild(link);
      });
      group.appendChild(list);
      container.appendChild(group);
    }
    if (!items.length) container.appendChild(element("p", "maps-empty", "Nie ma jeszcze przypisanych miejsc."));
  }

  function show(id = "drengrlands") {
    // Stare linki z map=midgard otwierają prawdziwą mapę kampanii,
    // bez niepotrzebnego, dekoracyjnego ekranu pośredniego.
    current = "drengrlands";
    const config = MAPS[current];
    $("#maps-current-title").textContent = config.name;
    $("#maps-current-description").textContent = config.intro;
    $("#maps-accuracy").textContent = "Położenia miejsc bez zatwierdzonych współrzędnych nie są oznaczane pinezką. Znajdziesz je w spisie pod mapą; krainy wybierzesz również z przycisków nad nią.";
    $("#maps-art").src = config.image;
    $("#maps-viewport").dataset.mapId = current;
    const breadcrumbs = $("#maps-breadcrumbs");
    breadcrumbs.replaceChildren();
    breadcrumbs.appendChild(element("span", "maps-crumb-label", "Midgard"));
    breadcrumbs.appendChild(element("span", "maps-separator", "›"));
    breadcrumbs.appendChild(element("span", "maps-current", config.name));
    const layer = $("#maps-marker-layer");
    layer.replaceChildren();
    config.regions.forEach(item => addMarker(layer, item));
    // Używamy TYLKO współrzędnych osobiście zatwierdzonych dla mapy.
    knownPlaces().forEach(site => {
      const pin = site.mapPosition;
      if (!pin || pin.confirmed !== true || pin.mapId !== current) return;
      if (!Number.isFinite(pin.x) || !Number.isFinite(pin.y) ||
          pin.x < 5 || pin.x > 95 || pin.y < 5 || pin.y > 95) return;
      const button = element("button", "maps-marker maps-marker--place", site.name);
      button.type = "button";
      button.dataset.placeId = site.id;
      button.style.left = pin.x + "%";
      button.style.top = pin.y + "%";
      button.title = site.name;
      button.setAttribute("aria-label", "Otwórz kartę lokacji: " + site.name);
      button.addEventListener("pointerdown", event => event.stopPropagation());
      button.addEventListener("click", () => callbacks.openPlace?.(site.id));
      layer.appendChild(button);
    });
    renderRegionLinks();
    resetTransform();
    renderPlaceLinks();
    window.SOM_NAV?.changed();
  }

  function showForPlace(placeId) {
    const p = place(placeId);
    show("drengrlands");
    if (!p) return;
    // Wskaż wyłącznie zatwierdzoną pinezkę; w przeciwnym razie podświetl
    // link do Atlasu i NIE sugeruj dokładnej lokalizacji.
    const pins = [...$("#maps-marker-layer").querySelectorAll(".maps-marker--place")];
    const pin = pins.find(button => button.dataset.placeId === placeId);
    if (pin) pin.classList.add("maps-hotspot--selected");
    const links = [...$("#maps-place-list").querySelectorAll(".maps-site-link")];
    const link = links.find(button => button.dataset.placeId === placeId);
    if (link) {
      link.classList.add("maps-site-link--highlight");
      link.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
    $("#maps-open-atlas").addEventListener("click", () => callbacks.openAtlasRegion?.(current));
  }

  function mount(options) {
    data = options.data;
    callbacks = options;
    bindPanAndZoom();
    show("drengrlands");
  }
  window.SOM_MAPS = { mount, show, showForPlace, getCurrent: () => current };
})();
