// node scripts/check-world-atlas-two-maps.mjs
// Dwa obszary, poprawna hierarchia oraz tylko jawna wiedza podręcznikowa.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const text = path => fs.readFileSync(path, "utf8");
const sandbox={window:{}};
vm.runInNewContext(text("data.js"),sandbox,{filename:"data.js"});
vm.runInNewContext(text("atlas-guide.js"),sandbox,{filename:"atlas-guide.js"});
const data=sandbox.window.CHRONICLE, lore=sandbox.window.SOM_ATLAS_GUIDE;
assert.ok(data && lore,"Missing public atlas guide/data");
const regions=new Map(data.atlasRegions.map(x=>[x.id,x]));
const places=new Map(data.places.map(x=>[x.id,x]));
assert.equal(regions.get("gardarike")?.parentId,"midgard","Rus must be separate from Drengr kingdoms");
assert.equal(regions.get("hordalands")?.kind,"Królestwo Drengrów");
assert.equal(regions.get("fjordane")?.kind,"Królestwo Drengrów");
for(const id of ["eylenda","agder","hordalands","gardarike"]){
 const paragraphs=lore.regions[id];
 assert.ok(Array.isArray(paragraphs)&&paragraphs.length>=3,"Expanded setting lore missing: "+id);
 assert.ok(paragraphs.every(p=>p.length>=85),"No empty short placeholder in "+id);
}
for(const [id,parent] of [
 ["harstad","agder"],["yppsala-wodenhorgr","agder"],["omen","agder"],
 ["holmgard","gardarike"],["novgorod","gardarike"],
 ["helgisrata","gardarike"],["truvorsberg","gardarike"]]){
 assert.equal(places.get(id)?.parentRegionId,parent,"Place in wrong world: "+id);
 assert.equal(places.get(id)?.visibility,"known");
 assert.ok(lore.places[id]?.length>=2,"Lore detail missing: "+id);
}
assert.equal(places.get("hrafnvik").parentRegionId,"osady-bohaterow");
assert.equal(places.get("skjorvik").parentRegionId,"drengrlands");
assert.equal(places.get("eylenda").image,"assets/locations/Eylenda.png");
assert.equal(places.get("ejkjavik").image,"assets/locations/Ejkjavik.png");
assert.equal(places.get("hardrada-mound").image,"assets/locations/Kurchan Harold Hardrary.png");
for(const p of data.places) if(p.image)assert.ok(fs.existsSync(p.image),"Missing art: "+p.image);
const rusImage="assets/locations/Gardarike_ Aged Rus’ Atlas Map.png";
for(const path of [rusImage,"assets/maps/Drengrlands.png"]) {
 assert.ok(fs.existsSync(path),"Missing map "+path);
 const bytes=fs.readFileSync(path);
 assert.ok(bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),"Invalid PNG "+path);
 assert.ok(bytes.readUInt32BE(16)>500 && bytes.readUInt32BE(20)>500,"Unusually small map "+path);
}
const map=text("maps.js"),atlas=text("atlas.js"),html=text("index.html"),app=text("app.js");
assert.ok(map.includes(rusImage),"Gardarike artwork not wired");
assert.ok(map.includes('regions: [] // Na nowej ilustracji nie zgadujemy współrzędnych.'),
 "No guessed Russian map hotspots");
assert.ok(html.includes('id="maps-world-tabs"'));
assert.ok(html.includes('id="atlas2-region-story"'));
assert.ok(html.includes('id="atlas2-dialog-guide"'));
assert.ok(html.includes('src="atlas-guide.js?v=public-lore-v1"'));
assert.ok(atlas.includes("SOM_ATLAS_GUIDE?.regions?.[id]"));
assert.ok(atlas.includes("SOM_ATLAS_GUIDE?.places?.[id]"));
assert.ok(app.includes('mapForRegion(place.parentRegionId)'));
assert.ok(app.includes('route.map === "gardarike"'));
for(const id of ["agder","hordalands","eylenda","gardarike"]) {
 const desc=lore.regions[id].join(" ").toLowerCase();
 assert.ok(!desc.includes("skald"),"Player-facing prose references GM role: "+id);
}
assert.ok(lore.regions.eylenda.join(" ").includes("Ejkjaviku"),
 "Must preserve campaign Althing in Ejkjavik");
assert.ok(lore.regions.hordalands.join(" ").includes("Fjordane"),
 "Trade Hordalands vs craft Fjordane must be explicit");
console.log("PASS — two real maps, four expanded setting chapters, seven new public places, no guessed pins");
