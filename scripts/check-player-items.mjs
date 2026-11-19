// node scripts/check-player-items.mjs
// Publiczne karty: handouty I tomu + mitologia, bez dorabiania fabuły.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const read=path=>fs.readFileSync(path,"utf8");
const sandbox={window:{}};
vm.runInNewContext(read("data.js"),sandbox,{filename:"data.js"});
const data=sandbox.window.CHRONICLE,items=data.items;
const ids=["gungnir","hrafnsauga-oko-kruka","srebrne-krazki","zlote-jablka-idunn"];
assert.deepEqual(Array.from(items,i=>i.id),ids,"Exact four public items");
const byId=Object.fromEntries(items.map(i=>[i.id,i]));
const eye=byId["hrafnsauga-oko-kruka"];
assert.match(eye.name,/Hrafnsauga.*Oko Kruka/);
assert.match(eye.kind,/Zaginiony/);
for(const word of ["krucze łby","rdzeń","runiczne","zaginął"])
 assert.ok(eye.history.includes(word),"Handout detail missing: "+word);
const coins=byId["srebrne-krazki"];
assert.match(coins.summary,/okrągłe/);
assert.match(coins.history,/Skjoldvik/);
assert.match(coins.history,/młot/);
const apples=byId["zlote-jablka-idunn"];
assert.match(apples.kind,/Motyw z podań/);
assert.match(apples.history,/nie potwierdza/);
assert.match(apples.history,/bez podawania fikcyjnych premii/);
assert.ok(!apples.history.includes("wyprawa po"),"Apple legend must not claim a new quest");
for(const item of items){
 assert.match(item.id,/^[a-z0-9-]+$/);
 assert.ok(item.name&&item.kind&&item.summary&&item.history&&item.symbol);
 assert.ok(item.history.length>=160,"Item text not sufficiently descriptive: "+item.id);
}
for(const item of items.slice(1)){
 assert.equal(item.placeId,null,"Do not fabricate Atlas links");
 assert.equal(item.eventId,null,"Do not fabricate Chronicle events");
 assert.ok(item.locationLabel,"Explain source / knowledge status");
}
assert.equal(byId.gungnir.eventId,"powrot-i-pogrzeby");
const html=read("index.html"),app=read("app.js"),readme=read("README.md");
assert.ok(html.includes('data.js?v=items-v4'),"Cache must refresh public data");
assert.ok(html.includes('id="items-list"'),"Items view kept");
assert.ok(app.includes('(entry.eventId && !knownEvents.has(entry.eventId))'));
assert.ok(app.includes('(entry.placeId && !knownPlaces.has(entry.placeId))'));
assert.ok(app.includes('if (entry.eventId) {')&&app.includes('if (place) {'),
  "Only real places and episodes should generate links");
assert.ok(readme.includes('Hrafnsauga — „Oko Kruka”'));
assert.ok(fs.existsSync("assets/items/README.md"),"Keep upload directory");
assert.ok(!read("data.js").includes('id: "arm-ring-ketila"'),
  "Do not add non-requested handouts without disclosure review");
console.log("PASS: four player-facing objects, handout facts, apples as legend, no fictitious links");
