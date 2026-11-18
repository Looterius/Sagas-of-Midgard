// node scripts/check-mobile-rwd.mjs — publiczne referencje i podstawy RWD.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
const ctx={window:{}};
vm.runInNewContext(fs.readFileSync("data.js","utf8"),ctx,{filename:"data.js"});
const data=ctx.window.CHRONICLE;
const app=fs.readFileSync("app.js","utf8");
const html=fs.readFileSync("index.html","utf8");
const css=fs.readFileSync("styles.css","utf8");
assert.ok(html.includes('name="viewport" content="width=device-width,initial-scale=1"'));
assert.ok(html.includes('id="map-viewport"'));
assert.ok(html.includes('class="mobile-map-hint"'));
for(const token of ['const fingers = new Map()','gesture.kind === "pinch"',
  'gesture.startZoom * distance(points[0], points[1]) / gesture.startDistance',
  'gesture.worldX - 800','gesture.worldY - 500',
  'if (e.pointerType === "touch")','lastTouchGestureEnd',
  'e.timeStamp - lastTouchGestureEnd < 650','beginTouchGesture()']) {
  assert.ok(app.includes(token),"Missing pinch or tap-protection logic: "+token);
}
for(const token of ['.character-overlay:not([hidden]) .character-dialog',
  'overflow-x:hidden;overflow-y:auto','height:100dvh',
  'max-width:100vw','.character-title','overflow-wrap:anywhere',
  '.character-details .relation-link','min-height:63px']) {
  assert.ok(css.includes(token),"Mobile CSS or relation controls missing: "+token);
}
for(const token of ['"relation-chip relation-link"',
  'button.addEventListener("click", () => selectPerson(other.id))',
  'window.SOM_ATLAS?.open(place.id)',
  'window.SOM_ATLAS?.showRegion(region.id)',
  'if (place.visibility === "known" && place.personIds?.includes(id))',
  'region.id === regionId && region.visibility === "known"',
  'const buttons = [...$("#inspector").querySelectorAll("button:not([disabled])")]']) {
  assert.ok(app.includes(token),"Missing related link or accessible keyboard nav: "+token);
}
const ids=new Set(data.people.map(p=>p.id));
for(const r of data.relationships) {
  assert.ok(ids.has(r.from) && ids.has(r.to),"Invalid public person reference");
}
const placeIds=new Set(data.places.filter(p=>p.visibility==="known").map(p=>p.id));
for(const p of data.people) {
  for(const id of p.grouping?.settlementIds||[])
    assert.ok(placeIds.has(id),"Nonpublic place in character grouping "+p.id);
}
assert.ok(data.people.find(p=>p.id==="sianita").grouping.settlementIds.includes("hrafnvik"));
assert.ok(data.people.find(p=>p.id==="asgrim").grouping.kingdomIds.includes("agder"));
console.log("PASS — mobile pinch/pan, public relation links, narrow dialog CSS, keyboard controls");
