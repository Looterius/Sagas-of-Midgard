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
const artPaths={
  "gungnir": "assets/items/Mythic Runic Spear of Asgard (1).png",
  "hrafnsauga-oko-kruka": "assets/items/Nordycki Amulet Wszechwidzącego Oka.png",
  "srebrne-krazki": "assets/items/Tajemnicze srebrne medaliony w półmroku.png",
  "zlote-jablka-idunn": "assets/items/Golden Apples in a Norse Great Hall.png"
};
for (const [id,path] of Object.entries(artPaths)) {
 assert.equal(byId[id]?.image,path,"Wrong item image assignment: "+id);
 assert.ok(fs.existsSync(path),"Missing uploaded item illustration: "+path);
 const bytes=fs.readFileSync(path);
 assert.ok(bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),
  "Expected PNG asset: "+path);
 assert.ok(bytes.readUInt32BE(16)>=600 && bytes.readUInt32BE(20)>=600,"Image too small: "+path);
}
assert.ok(fs.existsSync("assets/items/Futurystyczna szklana kapsuła na satynie.png"),
  "Do not delete unassigned user uploads");
const html=read("index.html"),app=read("app.js"),readme=read("README.md");
assert.ok(html.includes('src="data.js?v='),"Public data must have browser cache version");
assert.ok(html.includes('app.js?v=item-art-v3'),"Image renderer must refresh");
assert.ok(html.includes('id="items-list"'),"Items view kept");
assert.ok(app.includes('(entry.eventId && !knownEvents.has(entry.eventId))'));
assert.ok(app.includes('(entry.placeId && !knownPlaces.has(entry.placeId))'));
assert.ok(app.includes('lore-entry-thumbnail')&&app.includes('lore-entry-large-image'),
 "Items must show thumbnails and full illustrations");
assert.ok(app.includes('if (entry.eventId) {')&&app.includes('if (place) {'),
  "Only real places and episodes should generate links");
assert.ok(readme.includes('Hrafnsauga — „Oko Kruka”'));
assert.ok(fs.existsSync("assets/items/README.md"),"Keep upload directory");
assert.ok(!read("data.js").includes('id: "arm-ring-ketila"'),
  "Do not add non-requested handouts without disclosure review");
console.log("PASS: four player-facing objects, handout facts, apples as legend, no fictitious links");
