/* Sagas of Midgard — nawigacja przez historię przeglądarki.
   Ekrany i otwarte karty to kolejne prawdziwe wpisy History API.
   Nie przechwytujemy Back na ekranie startowym — wyjście z witryny pozostaje możliwe. */
(() => {
  "use strict";
  const KEY = "somNavigation";
  let snapshot = null;
  let restore = null;
  let active = false;
  let restoring = false;
  let scheduled = false;
  let session = "";

  const VIEWS = ["relationships", "maps", "chronicle", "runes", "bestiary", "items"];
  const PRIMARY = ["all", "heroes", "npc", "deceased", "rulers", "captives"];
  const DIMENSIONS = ["kingdoms", "settlements", "families", "factions"];
  const valid = route => route && typeof route === "object" && VIEWS.includes(route.view);

  // Stabilne, publiczne adresy odtwarzające widok na innym urządzeniu.
  // Zawierają tylko znane ID, nigdy historii prywatnej ani pozycji kart.
  function shareUrl(route = snapshot?.()) {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    if (!valid(route)) return url.href;
    url.searchParams.set("view", route.view);
    if (route.view === "relationships") {
      const group = route.group || {};
      if (group.primary && group.primary !== "all" && PRIMARY.includes(group.primary))
        url.searchParams.set("grupa", group.primary);
      if (DIMENSIONS.includes(group.dimension) && group.value) {
        url.searchParams.set("dimension", group.dimension);
        url.searchParams.set("value", group.value);
      }
      if (route.person) url.searchParams.set("postac", route.person);
    } else if (route.view === "maps") {
      if (route.map && route.map !== "drengrlands") url.searchParams.set("map", route.map);
      if (route.region && route.region !== "drengrlands") url.searchParams.set("region", route.region);
      if (route.place) url.searchParams.set("place", route.place);
    } else if (route.view === "chronicle") {
      if (route.chronicleFilter && route.chronicleFilter !== "all")
        url.searchParams.set("filter", route.chronicleFilter);
      if (route.chronicleExpanded?.[0]) url.searchParams.set("event", route.chronicleExpanded[0]);
    } else if (route.view === "runes" && route.rune) {
      url.searchParams.set("rune", route.rune);
    } else if ((route.view === "bestiary" || route.view === "items") && route.entry) {
      url.searchParams.set("entry", route.entry);
    }
    return url.href;
  }

  function parseSharedRoute() {
    const params = new URL(window.location.href).searchParams;
    if (![ "view", "grupa", "group", "postac", "dimension" ].some(p => params.has(p)))
      return null;
    // Stare linki do Atlasu wciąż otwierają to samo miejsce w jednym widoku.
    const requested = params.get("view") || "relationships";
    const view = requested === "locations" ? "maps" : requested;
    if (!VIEWS.includes(view)) return null;
    const base = snapshot();
    if (!valid(base)) return null;
    const route = { ...base, view };
    if (view === "relationships") {
      const primary = params.get("grupa") || params.get("group") || "all";
      const dimension = params.get("dimension");
      const value = params.get("value");
      route.group = {
        primary: PRIMARY.includes(primary) ? primary : "all",
        dimension: DIMENSIONS.includes(dimension) && value ? dimension : null,
        value: DIMENSIONS.includes(dimension) && value ? value : null,
        expanded: DIMENSIONS.includes(dimension) && value ? dimension : null
      };
      route.person = params.get("postac") || params.get("person") || null;
    } else if (view === "maps") {
      route.map = params.get("map") || "drengrlands";
      route.region = params.get("region") || "drengrlands";
      route.place = params.get("place") || null;
    } else if (view === "chronicle") {
      route.chronicleFilter = params.get("filter") || "all";
      route.chronicleExpanded = params.get("event") ? [params.get("event")] : [];
    } else if (view === "runes") {
      route.rune = params.get("rune") || null;
    } else {
      route.entry = params.get("entry") || null;
    }
    return route;
  }
  const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const current = () => window.history.state?.[KEY];

  function write(route, depth, method) {
    window.history[method](
      { ...(window.history.state || {}), [KEY]: { session, depth, route } },
      "",
      shareUrl(route)
    );
  }

  function changed() {
    if (!active || restoring || scheduled) return;
    scheduled = true;
    // Atlas, mapa i zakładka mogą zmienić się w jednym kliknięciu.
    // Jeden mikro-task = jeden wpis, nie trzy sztuczne kroki wstecz.
    queueMicrotask(() => {
      scheduled = false;
      if (!active || restoring) return;
      const route = snapshot();
      const previous = current();
      if (!valid(route) || (previous?.session === session && equal(route, previous.route))) return;
      write(route, previous?.session === session ? previous.depth + 1 : 1, "pushState");
    });
  }

  function closeLayer(fallback) {
    const entry = current();
    // Cofnij tylko własną podstronę, nigdy do obcej witryny.
    if (entry?.session === session && entry.depth > 0 &&
        (entry.route?.person || entry.route?.place)) {
      window.history.back();
      return;
    }
    // Otwarta karta po odświeżeniu lub otwarciu linku może nie mieć rodzica.
    // Zamknij ją bez dopisywania historii i bez pułapki Back → ponowne otwarcie.
    restoring = true;
    try { fallback(); }
    finally { restoring = false; }
    if (active && valid(snapshot())) write(snapshot(), 0, "replaceState");
  }

  function mount(options) {
    if (active) return;
    snapshot = options.snapshot;
    restore = options.restore;
    const inherited = current();
    session = inherited?.session || "som-" + Date.now().toString(36) + "-" +
      Math.random().toString(36).slice(2);
    active = true;
    window.addEventListener("popstate", e => {
      const destination = e.state?.[KEY];
      if (!destination || destination.session !== session || !valid(destination.route)) return;
      restoring = true;
      try { restore(destination.route); }
      finally { restoring = false; }
    });
    if (inherited?.session === session && valid(inherited.route)) {
      restoring = true;
      try { restore(inherited.route); }
      finally { restoring = false; }
    } else {
      const shared = parseSharedRoute();
      if (shared) {
        restoring = true;
        try { restore(shared); }
        finally { restoring = false; }
      }
      write(snapshot(), 0, "replaceState");
    }
  }

  window.SOM_NAV = { mount, changed, closeLayer, shareUrl };
})();