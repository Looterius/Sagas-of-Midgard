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
    midgard: {
      name: "Midgard",
      image: "assets/maps/midgard.svg",
      intro: "Świat ludzi. Wybierz poznany obszar, aby odkrywać jego krainy.",
      regions: [{ id: "drengrlands", x: 51, y: 57 }]
    },
    drengrlands: {
      name: "Ziemie Drengrów",
      image: "assets/maps/Drengrlands.png",
      intro: "Mapa autora kampanii. Kliknij nazwę krainy lub złoty punkt przy znanej lokacji.",
      // Współrzędne (0–100%) wskazują napisy na przesłanej ilustracji, NIE polityczne granice.
      regions: [
        { id: "eylenda", x: 22.4, y: 41.9, w: 15.3, h: 5.4 },
        { id: "agder", x: 30.9, y: 60.5, w: 11.6, h: 5.6 },
        { id: "hordalands", x: 57.3, y: 40.8, w: 16.3, h: 5.6 },
        { id: "vestmar", x: 63.5, y: 62.2, w: 11, h: 5.3 },
        { id: "fjordane", x: 84.2, y: 69.0, w: 13.2, h: 5.4 }
      ],
      // Tylko podpisy miejsc dających się jednoznacznie połączyć z publicznym Atlasem.
      // Hrafnvik i Skjǫrvik pozostają formalnie bez przypisanego królestwa.
      sites: [
        { id: "gods-cauldron", x: 30.2, y: 27.0 },
        { id: "thingvellir", x: 26.7, y: 38.4 },
        { id: "ejkjavik", x: 16.8, y: 46.7 },
        { id: "fafnir-cave", x: 64.6, y: 22.3 },
        { id: "ice-spine-mountains", x: 60.5, y: 32.7 },
        { id: "hrafnvik", x: 46.8, y: 48.8 },
        { id: "skjorvik", x: 48.7, y: 65.2 }
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
    $("#maps-zoom-in").disabled = zoom >= 4;
  }
  function resetTransform() { zoom = 1; panX = 0; panY = 0; updateTransform(); }
  function setZoom(value) {
    zoom = Math.max(1, Math.min(4, Math.round(value * 100) / 100));
    if (zoom === 1) { panX = 0; panY = 0; }
    updateTransform();
  }

  function addMarker(layer, marker, mapId) {
    const r = region(marker.id);
    if (!r) return;
    const isArtwork = mapId === "drengrlands";
    const button = element("button", isArtwork ? "maps-hotspot maps-hotspot--region" : "maps-marker", isArtwork ? "" : r.name);
    button.type = "button";
    button.style.left = marker.x + "%";
    button.style.top = marker.y + "%";
    if (isArtwork) {
      button.style.width = marker.w + "%";
      button.style.height = marker.h + "%";
      button.dataset.label = r.name;
    }
    button.title = r.name;
    button.setAttribute("aria-label", "Otwórz krainę w Atlasie: " + r.name);
    button.addEventListener("pointerdown", event => event.stopPropagation());
    button.addEventListener("click", () => {
      if (mapId === "midgard") show("drengrlands");
      else callbacks.openAtlasRegion?.(r.id);
    });
    layer.appendChild(button);
  }

  function addSiteHotspot(layer, marker) {
    const site = place(marker.id);
    if (!site) return; // żadnych nieznanych graczom lokacji
    const button = element("button", "maps-hotspot maps-hotspot--place");
    button.type = "button";
    button.style.left = marker.x + "%";
    button.style.top = marker.y + "%";
    button.dataset.label = site.name;
    button.title = site.name;
    button.setAttribute("aria-label", "Otwórz kartę: " + site.name);
    button.addEventListener("pointerdown", event => event.stopPropagation());
    button.addEventListener("click", () => callbacks.openPlace?.(site.id));
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
    $("#maps-viewport").dataset.mapId = current;
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
    (config.sites || []).forEach(item => addSiteHotspot(layer, item));
    // Pozostałe, dodatkowe pinezki tylko po zatwierdzeniu współrzędnych przez Skalda.
    knownPlaces().forEach(site => {
      const pin = site.mapPosition;
      if (!pin || pin.confirmed !== true || pin.mapId !== current) return;
      if ((config.sites || []).some(item => item.id === site.id)) return;
      if (!Number.isFinite(pin.x) || !Number.isFinite(pin.y) ||
          pin.x < 5 || pin.x > 95 || pin.y < 5 || pin.y > 95) return;
      const button = element("button", "maps-marker maps-marker--place", site.name);
      button.type = "button";
      button.style.left = pin.x + "%";
      button.style.top = pin.y + "%";
      button.title = site.name;
      button.setAttribute("aria-label", "Otwórz kartę lokacji: " + site.name);
      button.addEventListener("pointerdown", event => event.stopPropagation());
      button.addEventListener("click", () => callbacks.openPlace?.(site.id));
      layer.appendChild(button);
    });
    resetTransform();
    renderPlaceLinks();
  }

  function showForPlace(placeId) {
    const p = place(placeId);
    if (!p) { show("midgard"); return; }
    show("drengrlands");
    // Wskazanie dotyczy podpisu na ilustracji, bez przypisywania do królestwa.
    const mapEntry = (MAPS.drengrlands.sites || []).find(item => item.id === placeId);
    const visibleHotspot = mapEntry && [...$("#maps-marker-layer").querySelectorAll("button")]
      .find(button => button.dataset.label === p.name);
    if (visibleHotspot) visibleHotspot.classList.add("maps-hotspot--selected");
    // Dla pozostałych miejsc zachowaj link w wykazie pod mapą.
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
