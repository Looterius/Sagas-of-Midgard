// node scripts/check-unified-atlas.mjs
// Jawny Atlas jako jedna zakładka: struktura DOM, linki i przyciski wejścia.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
const text = file => fs.readFileSync(file, "utf8");
const html=text("index.html"), app=text("app.js"), nav=text("navigation.js");
const css=text("styles.css"), map=text("maps.js"), atlas=text("atlas.js");
const sidebar=html.match(/<nav class="nav"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
assert.ok(sidebar,"Missing sidebar");
const order=[...sidebar.matchAll(/data-view="([^"]+)"/g)].map(x=>x[1]);
assert.equal(order.join(","),"relationships,maps,runes,bestiary,items,chronicle",
 "Kronika must be the last tab; Maps+Atlas share one tab");
assert.equal((html.match(/id="maps-view"/g)||[]).length,1);
assert.ok(!html.includes('data-view="locations"'));
assert.ok(!html.includes('id="locations-view"'));
const mapStart=html.indexOf('id="maps-view"');
const atlasStart=html.indexOf('id="atlas-world-details"');
const chronicleStart=html.indexOf('id="chronicle-view"');
assert.ok(mapStart>0&&atlasStart>mapStart&&chronicleStart>atlasStart,
 "Atlas must be embedded within the map section");
for(const id of ["maps-art","maps-region-links","maps-places-section","maps-place-list",
 "atlas2-breadcrumb","atlas2-region-grid","atlas2-region-title","atlas2-region-desc","place-dialog"])
 assert.equal((html.match(new RegExp('id="'+id+'"','g'))||[]).length,1,"Missing or duplicate element "+id);
const details=html.match(/<details id="maps-places-section"[\s\S]*?<\/details>/)?.[0];
assert.ok(details&&!details.includes(" open"),"All-places list should be collapsible and closed initially");
assert.ok(css.includes(".atlas-world-details")&&css.includes(".maps-all-places-toggle"));
for(const snippet of [
 'function openAtlasPlace(id)', 'function openAtlasRegion(id,',
 'window.SOM_ATLAS?.open(id)',
 '$("#atlas-world-details")?.scrollIntoView',
 'openPlace: openAtlasPlace', 'openAtlasRegion',
 'maps: "Atlas świata"',
 'window.SOM_MAPS?.show(desiredMap)',
 'window.SOM_ATLAS?.showRegion(id)'
])assert.ok(app.includes(snippet),"Missing unified Atlas integration: "+snippet);
assert.ok(!app.includes('switchView("locations")'));
assert.ok(nav.includes('requested === "locations" ? "maps" : requested'));
assert.ok(nav.includes('url.searchParams.set("place", route.place)'));
assert.ok(nav.includes('url.searchParams.set("region", route.region)'));
assert.ok(map.includes('$("#maps-places-section").open = true;'),"Highlight must reveal collapsed list");
assert.ok(atlas.includes('showRegion("drengrlands")'),"Known lands available");
const sandbox={window:{}};
vm.runInNewContext(text("data.js"),sandbox,{filename:"data.js"});
const data=sandbox.window.CHRONICLE;
assert.ok(data.atlasRegions.some(x=>x.id==="eylenda"&&x.visibility==="known"));
assert.equal(data.places.find(x=>x.id==="hrafnvik").parentRegionId,"osady-bohaterow");
assert.equal(data.places.find(x=>x.id==="skjorvik").parentRegionId,"drengrlands");
assert.ok(html.includes('src="assets/maps/Drengrlands.png"'),"Main campaign map retained");
assert.ok(html.includes('id="maps-world-tabs"'),"Two-map navigation missing");
console.log("PASS — unified Atlas, six tabs, Kronika last, links, mobile details and safe geography");
