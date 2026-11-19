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

for (const file of ["maps.js", "assets/maps/Drengrlands.png"]) {
  if (!fs.existsSync(file)) errors.push("Missing map asset: " + file);
}
for (const id of ["maps-view", "maps-viewport", "maps-canvas", "maps-art", "maps-marker-layer",
  "maps-breadcrumbs", "maps-zoom-in", "maps-zoom-out", "maps-reset",
  "maps-open-atlas", "maps-place-list", "maps-region-links", "atlas2-dialog-map"]) {
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

const artwork = fs.readFileSync("assets/maps/Drengrlands.png");
if (!artwork.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])))
  errors.push("Uploaded Drengrlands image is not a PNG");
else {
  const width = artwork.readUInt32BE(16), height = artwork.readUInt32BE(20);
  if (width < 800 || height < 500 || Math.abs(width / height - 1190 / 896) > 0.04)
    errors.push("Unexpected aspect ratio or size of Drengrlands.png: " + width + "x" + height);
}

// Lokacje bez potwierdzonego punktu nie mogą być klikalnymi pinezkami
// o arbitralnych współrzędnych. Zamiast tego trafiają do spisu poniżej mapy.
if (js.includes("sites: [")) errors.push("Unverified hand-placed site markers remain");
if (!js.includes("renderPlaceLinks()") || !js.includes("renderRegionLinks()"))
  errors.push("Accessible map navigation links missing");
if (!js.includes('show("drengrlands");'))
  errors.push("Map must open actual Drengrlands artwork");

for (const id of ["eylenda", "agder", "hordalands", "vestmar", "fjordane"]) {
  if (!js.includes('id: "' + id + '", x:'))
    errors.push("Map missing clickable region: " + id);
}
if (!js.includes('image: "assets/maps/Drengrlands.png"'))
  errors.push("New artwork is not used by maps.js");
if (!js.includes("pin.confirmed !== true")) errors.push("Confirmed map pins are not enforced");
if (!text("styles.css").includes(".maps-hotspot,.maps-marker--place{pointer-events:auto}"))
  errors.push("Map hotspots must receive pointer events");

if (errors.length) { console.error(errors.join("\n")); process.exitCode = 1; }
else console.log("PASS — map files, bidirectional navigation and public coordinates");
