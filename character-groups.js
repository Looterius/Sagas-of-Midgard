/* Publiczne grupowanie postaci.
   Nie zgaduj roli, śmierci, rodu ani frakcji. Brak przypisania oznacza brak potwierdzenia. */
(() => {
  "use strict";

  const PRIMARY = [
    { id: "all", label: "Wszyscy" },
    { id: "heroes", label: "Bohaterowie" },
    { id: "npc", label: "NPC" },
    { id: "deceased", label: "Zmarli" },
    { id: "rulers", label: "Władcy i jarlowie" },
    { id: "captives", label: "Jeńcy" }
  ];
  const DIMENSIONS = [
    { id: "kingdoms", label: "Królestwa i krainy" },
    { id: "settlements", label: "Osady" },
    { id: "families", label: "Rody i rodziny" },
    { id: "factions", label: "Frakcje" }
  ];

  const field = person => person.grouping || {};
  const has = (values, value) => Array.isArray(values) && values.includes(value);

  function inPrimary(person, groupId) {
    const g = field(person);
    switch (groupId) {
      case "all": return true;
      case "heroes": return g.role === "hero";
      case "npc": return g.role === "npc";
      case "deceased": return g.lifeStatus === "deceased";
      case "rulers": return has(g.titles, "jarl") || has(g.titles, "ruler");
      case "captives": return has(g.statuses, "captive");
      default: return false;
    }
  }

  function hasSubgroup(data, person, dimension, value) {
    const g = field(person);
    if (dimension === "kingdoms") return has(g.kingdomIds, value);
    if (dimension === "families") return has(g.familyIds, value);
    if (dimension === "factions") return has(g.factionIds, value);
    if (dimension === "settlements") {
      const place = (data.places || []).find(p => p.id === value && p.visibility === "known");
      // Publiczne personIds reprezentuje znane powiązanie z osadą, nie pochodzenie.
      return has(g.settlementIds, value) || has(place?.personIds, person.id);
    }
    return false;
  }

  function options(data, dimension) {
    const people = data.people || [];
    const regions = data.atlasRegions || [];
    const places = data.places || [];
    const catalog = data.characterGroupCatalog || {};
    let candidates = [];
    if (dimension === "kingdoms") {
      candidates = regions.filter(r => r.visibility === "known" &&
        (r.kind === "Królestwo Drengrów" || r.kind === "Niezależna wyspa"))
        .map(r => ({ id: r.id, label: r.name }));
    } else if (dimension === "settlements") {
      candidates = places.filter(p => p.visibility === "known" &&
        (p.id === "hrafnvik" || p.kind?.toLocaleLowerCase("pl").includes("osada")))
        .map(p => ({ id: p.id, label: p.name }));
    } else if (dimension === "families" || dimension === "factions") {
      candidates = (catalog[dimension] || []).filter(item => item.visibility === "known")
        .map(item => ({ id: item.id, label: item.name }));
    }
    // Pokazuj wyłącznie grupy, do których publicznie przypisano choć jedną kartę.
    return candidates.filter(item =>
      people.some(person => hasSubgroup(data, person, dimension, item.id))
    ).sort((a, b) => a.label.localeCompare(b.label, "pl"));
  }

  function matches(data, person, filter) {
    if (!inPrimary(person, filter.primary)) return false;
    if (filter.dimension && filter.value &&
        !hasSubgroup(data, person, filter.dimension, filter.value)) return false;
    const query = (filter.search || "").trim().toLocaleLowerCase("pl");
    return !query || person.name.toLocaleLowerCase("pl").includes(query);
  }

  function layout(people) {
    // Stabilna, automatyczna siatka tylko dla filtrowanego widoku.
    const columns = Math.min(10, Math.max(1, Math.ceil(Math.sqrt(people.length * 1.5))));
    const rows = Math.max(1, Math.ceil(people.length / columns));
    const stepX = 225, stepY = rows >= 4 ? 245 : 290, cardWidth = 180, cardHeight = 240;
    const startX = (1600 - (columns - 1) * stepX - cardWidth) / 2;
    const startY = (1000 - (rows - 1) * stepY - cardHeight) / 2;
    return Object.fromEntries(people.map((p, i) => [
      p.id,
      { x: startX + (i % columns) * stepX, y: startY + Math.floor(i / columns) * stepY }
    ]));
  }

  window.SOM_GROUPS = { PRIMARY, DIMENSIONS, options, matches, layout };
})();