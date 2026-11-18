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

  const valid = route => route && typeof route === "object" &&
    ["relationships", "maps", "locations", "chronicle"].includes(route.view);
  const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const current = () => window.history.state?.[KEY];

  function write(route, depth, method) {
    window.history[method](
      { ...(window.history.state || {}), [KEY]: { session, depth, route } },
      "",
      window.location.href
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
      write(snapshot(), 0, "replaceState");
    }
  }

  window.SOM_NAV = { mount, changed, closeLayer };
})();