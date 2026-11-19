// node scripts/check-bestiary-encounters.mjs
// Publiczny Bestiariusz: tylko spotkania znane graczom i właściwe grafiki miejsc.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const contents = path => fs.readFileSync(path, "utf8");
const sandbox={window:{}};
vm.runInNewContext(contents("data.js"),sandbox,{filename:"data.js"});
const data=sandbox.window.CHRONICLE;
const entries=new Map(data.bestiary.map(item=>[item.id,item]));
const expected=["troll-w-klatce","backahast","draugry-kurhanu",
  "harald-hardrada-nieumarly","zjawy-z-gospodarstwa"];
assert.deepEqual(Array.from(entries.keys()),expected,"Five public entries, stable IDs and story order");
const events=new Set(data.chronicle.map(item=>item.id));
const places=new Map(data.places.map(item=>[item.id,item]));
for(const entry of entries.values()){
 assert.ok(entry.name&&entry.kind&&entry.summary&&entry.history&&entry.symbol);
 assert.ok(entry.summary.length>35&&entry.history.length>150,"Complete prose: "+entry.id);
 assert.ok(!/HP\s*\d|Rollover\s*\d|Tylko dla Skalda|przyszł(?:a|y|o)e zdarzeni/i.test(entry.history),
   "No hidden GM notes or stats: "+entry.id);
 if(entry.id==="backahast"){
   assert.equal(entry.placeId,null);
   assert.equal(entry.eventId,null);
   assert.match(entry.locationLabel,/Czarna sadzawka/);
   assert.match(entry.summary,/pierwszym sezonie/);
 }else{
   assert.ok(events.has(entry.eventId),"Missing public event: "+entry.id);
   assert.ok(places.has(entry.placeId),"Missing public place: "+entry.id);
 }
}
assert.equal(entries.get("draugry-kurhanu").eventId,"kurhan-gungnir");
assert.equal(entries.get("harald-hardrada-nieumarly").placeId,"hardrada-mound");
assert.equal(entries.get("zjawy-z-gospodarstwa").eventId,"gospodarstwo-zapomnianych");
assert.match(entries.get("zjawy-z-gospodarstwa").history,/nie pokonała ich w bitwie/);
const encounterArt={
  "backahast": "assets/bestiary/Wikingowie kontra morski potwór w jaskini.png",
  "draugry-kurhanu": "assets/bestiary/Howling Draugr Beneath Ancient Runes.png",
  "harald-hardrada-nieumarly": "assets/bestiary/Clash in the Glacial Sanctuary.png",
  "zjawy-z-gospodarstwa": "assets/bestiary/Aurora Welcome at the Turf House.png"
};
for(const [id,path] of Object.entries(encounterArt)){
 assert.equal(entries.get(id)?.image,path,"Wrong beast illustration "+id);
 assert.ok(fs.existsSync(path),"Missing uploaded monster art "+path);
 const bytes=fs.readFileSync(path);
 assert.ok(bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),
  "Not a PNG: "+path);
 assert.ok(bytes.readUInt32BE(16)>=600&&bytes.readUInt32BE(20)>=600,
  "Image too small "+path);
}
assert.equal(entries.get("troll-w-klatce").image,"assets/bestiary/Viking Warriors Face the Caged Highland Giant.png","Caged troll must have its own illustration");
assert.ok(fs.existsSync(entries.get("troll-w-klatce").image),"Missing uploaded troll art");
const trollImage=fs.readFileSync(entries.get("troll-w-klatce").image);
assert.ok(trollImage.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),"Troll image not PNG");
assert.ok(trollImage.readUInt32BE(16)>=600&&trollImage.readUInt32BE(20)>=600,"Troll art too small");
const unassigned="assets/bestiary/Verðandi in the Moonlit Shrine.png";
assert.ok(fs.existsSync(unassigned),"Preserve user-provided unmatched art");
assert.ok(!data.bestiary.some(e=>e.image===unassigned),"Unconfirmed identity must not be attached");

assert.equal(data.items.length,4,"Four public item cards including Gungnir");
const images=[
 ["gods-cauldron","assets/locations/Boiling Lake Beneath Stormy Peaks.png"],
 ["harstad","assets/locations/Harstad_ Royal Mead-Hall at Dusk.png"],
 ["yppsala-wodenhorgr","assets/locations/Stormbound Ritual at the World Tree.png"],
 ["thingvellir","assets/locations/Stormlit Thingvellir Assembly Plain.png"],
 ["omen","assets/locations/Viking Forge Market in a Snowy Fjord.png"]
];
for(const [id,image] of images){
 assert.equal(places.get(id)?.image,image,"Wrong visual for "+id);
 assert.ok(fs.existsSync(image),"Missing image "+image);
 const file=fs.readFileSync(image);
 assert.ok(file.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),
  "Expected original PNG "+image);
 assert.ok(file.readUInt32BE(16)>=600&&file.readUInt32BE(20)>=600,
  "Image below basic visual quality threshold "+image);
}
assert.ok(fs.existsSync("assets/locations/Stormlit Thingvellir Assembly Plain (1).png"),
 "Uploaded duplicate is kept, not silently deleted");
const app=contents("app.js"),html=contents("index.html");
assert.ok(app.includes('(entry.eventId && !knownEvents.has(entry.eventId))'),
 "Entries without events must not be filtered out");
assert.ok(app.includes('if (entry.eventId) {')&&app.includes('if (place) {'),
 "Only create real Atlas and Chronicle links");
assert.ok(app.includes('entry.locationLabel'),"Allow truthful location label");
assert.ok(html.includes('src="data.js?v=bestiary-art-v6"'),"Latest data cache version needed");
assert.ok(html.includes('src="data.js?v='),"Data must have browser cache version");
assert.ok(html.includes('src="app.js?v='),"Renderer must have browser cache version");
console.log("PASS — five public bestiary encounters, truthful links, original location images and no hidden stats");
