// Uruchom: node scripts/check-public-maps.mjs
// Kontrola publicznej kartografii bez zależności i bez potrzeby uruchamiania przeglądarki.
import fs from "node:fs";
import vm from "node:vm";

const errors = [];
const text = file => fs.readFileSync(file, "utf8");
const sandbox = { window: {} };
vm.runInNewContext(text("data.js"), sandbox, { filename: "data.js" });
const data = sandbox.window.CHRONICLE;
if (!data) throw new Error("Missing CHRONICLE data");
const html = text("index.html");
const js = text("maps.js");
const atlas = text("atlas.js");
const app = text("app.js");

for (const file of ["maps.js", "assets/maps/midgard.svg", "assets/maps/drengrlands.svg"]) {
  if (!fs.existsSync(file)) errors.push("Missing map asset: " + file);
}
for (const id of ["maps-view", "maps-viewport", "maps-canvas", "maps-art", "maps-marker-layer",
  "maps-breadcrumbs", "maps-zoom-in", "maps-zoom-out", "maps-reset",
  "maps-open-atlas", "maps-place-list", "atlas2-dialog-map"]) {
  if (!html.includes('id="' + id + '"')) errors.push("Missing map HTML element: " + id);
}
for (const src of ["maps.js", "atlas.js", "app.js"]) {
  if (!html.includes('src="' + src + "?")) errors.push("Missing script reference: " + src);
}
if (!html.includes('data-view="maps"')) errors.push("Missing Mapy świata navigation");
if (!app.includes("SOM_MAPS?.showForPlace") || !app.includes("SOM_ATLAS?.open(id)")) {
  errors.push("Map and Atlas are not linked bidirectionally");
}
if (!atlas.includes('atlas2-dialog-map')) errors.push("Missing Atlas-to-map action");
for (const id of ["midgard", "drengrlands", "agder", "hordalands", "vestmar", "fjordane", "eylenda"]) {
  if (!data.atlasRegions.some(region => region.id === id && region.visibility === "known")) {
    errors.push("Missing known region: " + id);
  }
}
for (const place of data.places || []) {
  const p = place.mapPosition;
  if (!p) continue;
  if (place.visibility !== "known" || p.confirmed !== true || !["midgard", "drengrlands"].includes(p.mapId) ||
      !Number.isFinite(p.x) || !Number.isFinite(p.y) ||
      p.x < 5 || p.x > 95 || p.y < 5 || p.y > 95) {
    errors.push("Unverified or invalid public map coordinates: " + place.id);
  }
}
if (!js.includes("pin.confirmed !== true")) errors.push("Confirmed map pins are not enforced");
if (errors.length) { console.error(errors.join("\n")); process.exitCode = 1; }
else console.log("PASS — map files, bidirectional navigation and public coordinates");
