// Run: node scripts/check-character-groups.mjs
// Publiczne przypisania i stabilność grupowania — nie publikuj niezweryfikowanych tagów.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const context = { window: {} };
vm.runInNewContext(fs.readFileSync("data.js", "utf8"), context, { filename: "data.js" });
vm.runInNewContext(fs.readFileSync("character-groups.js", "utf8"), context, { filename: "character-groups.js" });
const data = context.window.CHRONICLE;
const groups = context.window.SOM_GROUPS;
assert.ok(data && groups, "Missing public data or group module");

const ids = data.people.map(p => p.id);
assert.equal(new Set(ids).size, ids.length, "Duplicate person ID");
const value = (primary, dimension, id) => data.people.filter(p =>
  groups.matches(data, p, { primary, dimension, value: id, search: "" })).map(p => p.id).sort();

assert.equal(value("all", null, null).length, data.people.length);
assert.equal(value("heroes", null, null).length, 0, "Do not guess player-character status");
assert.equal(value("deceased", null, null).length, 0, "Do not publish unconfirmed deaths");
assert.equal(value("npc", null, null).join(","), ["anslem", "aslak", "hroald", "runa"].sort().join(","));
assert.equal(value("rulers", null, null).join(","), "hroald");
assert.equal(value("captives", null, null).join(","), "aslak");
assert.equal(value("all", "settlements", "hrafnvik").join(","), ["anslem", "hroald", "runa"].sort().join(","));
assert.equal(value("all", "settlements", "skjorvik").join(","), "aslak");
assert.equal(value("captives", "settlements", "hrafnvik").length, 0, "Filters must intersect");
assert.equal(value("all", null, null).length - 1, data.people.filter(p =>
  groups.matches(data, p, { primary: "all", dimension: null, value: null, search: "Hroald" }) === false).length);

const settlementOptions = groups.options(data, "settlements").map(x => x.id).sort();
assert.equal(settlementOptions.join(","), "hrafnvik,skjorvik");
for (const kind of ["kingdoms", "families", "factions"]) {
  assert.equal(groups.options(data, kind).length, 0, "No invented " + kind + " relationships");
}

const validRoles = new Set(["hero", "npc"]);
const validLife = new Set(["living", "deceased"]);
const validTitles = new Set(["jarl", "ruler"]);
const validStatuses = new Set(["captive"]);
for (const p of data.people) {
  const g = p.grouping;
  if (!g) continue;
  if (g.role) assert.ok(validRoles.has(g.role), "Invalid role for " + p.id);
  if (g.lifeStatus) assert.ok(validLife.has(g.lifeStatus), "Invalid life status for " + p.id);
  for (const t of g.titles || []) assert.ok(validTitles.has(t), "Invalid title for " + p.id);
  for (const status of g.statuses || []) assert.ok(validStatuses.has(status), "Invalid status for " + p.id);
  for (const ref of g.kingdomIds || []) assert.ok(data.atlasRegions.some(r => r.id === ref && r.visibility === "known"), "Unknown kingdom for " + p.id);
  for (const ref of g.settlementIds || []) assert.ok(data.places.some(r => r.id === ref && r.visibility === "known"), "Unknown settlement for " + p.id);
  for (const [field, catalog] of [["familyIds","families"], ["factionIds","factions"]]) {
    for (const ref of g[field] || []) assert.ok((data.characterGroupCatalog?.[catalog] || []).some(item =>
      item.id === ref && item.visibility === "known"), "Unknown " + field + " for " + p.id);
  }
}

// Przy dużej liczbie kart układ jest powtarzalny, bez nakładania kart.
const many = Array.from({ length: 110 }, (_, i) => ({ id: "sample" + i }));
const layout = groups.layout(many);
const points = many.map(p => layout[p.id]);
assert.equal(points.length, 110);
for (const p of points) assert.ok(Number.isFinite(p.x) && Number.isFinite(p.y));
assert.equal(new Set(points.map(p => p.x + "/" + p.y)).size, 110);
assert.equal(JSON.stringify(layout), JSON.stringify(groups.layout(many)));

const html = fs.readFileSync("index.html", "utf8");
const app = fs.readFileSync("app.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
for (const id of ["character-group-tabs", "character-group-dimensions", "character-group-options",
  "character-group-reset", "character-group-empty", "character-group-summary"]) {
  assert.ok(html.includes('id="' + id + '"'), "Missing grouping UI " + id);
}
assert.ok(html.includes('src="character-groups.js?v='), "Grouping script not loaded");
assert.ok(css.includes(".person-card[hidden]"), "Filtered cards should be hidden");
assert.ok(app.includes("groupFilter.primary") && app.includes("state.visibleIds.has(rel.from)"),
  "Missing filtered layout or relations");
console.log("PASS — character grouping, public metadata, 110-card layout and UI bindings");
