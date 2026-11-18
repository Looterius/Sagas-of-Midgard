// node scripts/check-character-groups.mjs
// Weryfikacja jawnego kanonu, biografii, relacji, statusów i interfejsu.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const context={window:{}};
for (const file of ["data.js","character-groups.js"])
  vm.runInNewContext(fs.readFileSync(file,"utf8"),context,{filename:file});
const data=context.window.CHRONICLE, groups=context.window.SOM_GROUPS;
assert.ok(data&&groups,"Missing public data/groups");
const people=data.people, ids=people.map(p=>p.id), peopleById=new Map(people.map(p=>[p.id,p]));
const value=(primary,dimension,id)=>people.filter(p=>groups.matches(data,p,{
  primary,dimension,value:id,search:""
})).map(p=>p.id).sort();
const equals=(actual,expected,message)=>assert.equal([...actual].sort().join(","),[...expected].sort().join(","),message);

assert.equal(people.length,25,"25 known player-facing people; do not overwrite earlier cards");
assert.equal(new Set(ids).size,people.length,"Duplicate person ID");
equals(value("heroes",null,null),["sianita","halvard","haroks","ylva","floki","asgrim"],"Six playable heroes");
equals(value("npc",null,null),people.filter(p=>p.grouping?.role==="npc").map(p=>p.id),"NPC filter");
assert.equal(value("npc",null,null).length,19,"19 NPC including new canonical characters");
equals(value("deceased",null,null),["sigurd","mord","floki"],"Only confirmed deaths");
equals(value("rulers",null,null),["hroald","sigurd","sianita"],"Former and current jarls");
equals(value("captives",null,null),["aslak"],"Existing marked captive");
equals(value("all","settlements","skjorvik"),["aslak","haki","ragnvald-s"],"Skjǫrvik persons");
assert.equal(value("all","settlements","hrafnvik").length,23,"Known Hrafnvik associations");
equals(value("deceased","settlements","hrafnvik"),["sigurd","floki","mord"],"Dead Hrafnvik persons");
equals(value("heroes","settlements","hrafnvik"),["sianita","halvard","haroks","ylva","floki","asgrim"],"Hero settlement");
assert.equal(value("heroes","settlements","skjorvik").length,0);
equals(groups.options(data,"settlements").map(p=>p.id),["hrafnvik","skjorvik"]);
equals(groups.options(data,"kingdoms").map(p=>p.id),["agder"]);
equals(groups.options(data,"families").map(p=>p.id),["rod-jarla","rod-svali"]);
assert.equal(groups.options(data,"factions").length,0,"Do not invent factions");
equals(value("all","families","rod-jarla"),["sigurd","hroald","runa","sten","sianita","halvard"]);
equals(value("all","families","rod-svali"),["svala","mord","ulf"]);
equals(value("heroes","kingdoms","agder"),["asgrim"]);

const requiredDescriptions=[
  "sigurd","hroald","runa","sten","sianita","halvard","asgrim","svala",
  "mord","ulf","erik","ragnvald-p","styrbjorn","leif","hakon","floki","aslak",
  "torvald","morotar","astrid","anslem","haroks","ylva","ragnvald-s","haki"
];
equals(ids,requiredDescriptions);
for(const p of people){
  const g=p.grouping||{};
  assert.ok(p.description?.length>=240,"Missing substantive biography for "+p.id);
  assert.ok(["hero","npc"].includes(g.role),"Invalid role for "+p.id);
  if(g.lifeStatus)assert.ok(["living","deceased"].includes(g.lifeStatus),"Invalid death flag "+p.id);
  for(const t of g.titles||[])assert.ok(["ruler","jarl"].includes(t),"Invalid title "+p.id);
  for(const t of g.statuses||[])assert.ok(["captive"].includes(t),"Invalid status "+p.id);
  for(const id of g.kingdomIds||[])
    assert.ok(data.atlasRegions.some(r=>r.id===id&&r.visibility==="known"),"Unknown kingdom "+p.id);
  for(const id of g.settlementIds||[])
    assert.ok(data.places.some(r=>r.id===id&&r.visibility==="known"),"Unknown settlement "+p.id);
  for(const [key,catalog] of [["familyIds","families"],["factionIds","factions"]])
    for(const id of g[key]||[])
      assert.ok(data.characterGroupCatalog[catalog].some(r=>r.id===id&&r.visibility==="known"),
        "Unknown "+key+" "+p.id);
  assert.ok(Number.isFinite(p.x)&&Number.isFinite(p.y)&&p.x>=0&&p.y>=0&&
    p.x+180<=1600&&p.y+240<=1000,"Card exceeds 1600×1000 canvas: "+p.id);
  if(p.image && p.id!=="svala")
    assert.ok(fs.existsSync(p.image),"Missing earlier portrait for "+p.id);
}
assert.equal(peopleById.get("sianita").name,"Sianita Gunnarsdóttir",
  "Canonical name stays even though Sigurd was her father");
assert.ok(peopleById.get("sianita").description.includes("Sigurda"));
assert.equal(peopleById.get("sten").name,"Sten Hroaldsson");
assert.equal(peopleById.get("runa").name,"Runa Hroaldsdóttir");
assert.equal(peopleById.get("mord").grouping.role,"npc","Mord is not playable");
assert.equal(peopleById.get("mord").grouping.lifeStatus,"deceased");
assert.equal(peopleById.get("floki").grouping.lifeStatus,"deceased");
assert.equal(peopleById.get("sigurd").grouping.lifeStatus,"deceased");
assert.equal(peopleById.get("sten").grouping.lifeStatus,undefined,
  "Sten's fate remains unverified, don't publish confirmed death");
assert.ok(!people.some(p=>p.id==="styr"),"Retired hero name should not be a separate card");
assert.ok(peopleById.get("asgrim").description.includes("Albion"));
assert.ok(peopleById.get("asgrim").description.includes("Halfdana Czarnego"));

const pairs=new Set();
function hasRel(a,b,type,label){
  return data.relationships.some(r=>r.type===type&&r.label===label&&
    ((r.from===a&&r.to===b)||(r.from===b&&r.to===a)));
}
for(const r of data.relationships){
  assert.ok(peopleById.has(r.from)&&peopleById.has(r.to),"Nonexistent relationship endpoint");
  assert.notEqual(r.from,r.to,"No self-relationship");
  const pair=[r.from,r.to].sort().join("/");
  assert.ok(!pairs.has(pair),"Duplicate graph edge "+pair);
  pairs.add(pair);
  assert.ok(r.label&&["family","ally","hostile","other"].includes(r.type),"Invalid public relation");
}
for(const [a,b,type,label] of [
  ["sigurd","hroald","family","Bracia; Sigurd obalił Hroalda"],
  ["sigurd","sianita","family","Ojciec i córka"],
  ["sigurd","halvard","family","Ojciec i syn"],
  ["hroald","runa","family","Ojciec i córka"],
  ["hroald","sten","family","Ojciec i syn"],
  ["runa","sten","family","Rodzeństwo"],
  ["svala","mord","family","Matka i syn"],
  ["svala","ulf","family","Matka i syn"],
  ["mord","ulf","family","Bracia bliźniacy"],
  ["sianita","halvard","family","Rodzeństwo"],
  ["hroald","sianita","family","Wuj / bratanica"],
  ["hroald","halvard","family","Wuj / bratanek"],
  ["sianita","asgrim","ally","Narzeczeni"],
  ["hakon","floki","other","Dawny pracodawca / szkutnik"],
  ["hakon","aslak","other","Pracodawca / cieśla"],
  ["floki","torvald","other","Floki przywrócił Torvalda dawnej wierze"],
])assert.ok(hasRel(a,b,type,label),"Missing named relation: "+a+"/"+b);

for(const id of ["hrafnvik","skjorvik","eylenda","ejkjavik","hardrada-mound"]){
  const place=data.places.find(p=>p.id===id);
  assert.ok(place&&place.visibility==="known","Missing public Atlas location "+id);
  assert.equal(new Set(place.personIds).size,place.personIds.length,
    "Duplicate person association at "+id);
  for(const personId of place.personIds)
    assert.ok(peopleById.has(personId),"Broken Atlas person link "+id+"/"+personId);
}
const associated=data.places.find(p=>p.id==="hrafnvik").personIds;
for(const p of people.filter(p=>p.grouping.settlementIds?.includes("hrafnvik")))
  assert.ok(associated.includes(p.id),"Atlas Hrafnvik link missing "+p.id);
for(const id of ["mord","floki"])
  assert.ok(data.places.find(p=>p.id==="eylenda").personIds.includes(id));
assert.ok(data.places.find(p=>p.id==="skjorvik").personIds.includes("haki"));
assert.ok(data.places.find(p=>p.id==="skjorvik").personIds.includes("ragnvald-s"));

const positions=people.map(p=>({id:p.id,x:p.x,y:p.y}));
for(let i=0;i<positions.length;i++)for(let j=i+1;j<positions.length;j++){
  const a=positions[i],b=positions[j];
  assert.ok(a.x+180<=b.x||b.x+180<=a.x||a.y+240<=b.y||b.y+240<=a.y,
    "Overlapping cards "+a.id+"/"+b.id);
}
// All layouts for each public primary filter must fit the fixed viewport.
for(const kind of ["heroes","npc","deceased","rulers","captives"]){
  const filtered=people.filter(p=>groups.matches(data,p,{primary:kind,dimension:null,value:null,search:""}));
  const layout=groups.layout(filtered);
  for(const p of filtered){
    const pos=layout[p.id];
    assert.ok(pos.x>=0&&pos.x+180<=1600&&pos.y>=0&&pos.y+240<=1000,
      "Filtered card outside canvas "+kind+"/"+p.id);
  }
}
const many=Array.from({length:110},(_,i)=>({id:"sample"+i}));
assert.equal(new Set(Object.values(groups.layout(many)).map(p=>p.x+"/"+p.y)).size,110,
  "Many-card layout should have unique positions");

const html=fs.readFileSync("index.html","utf8");
const app=fs.readFileSync("app.js","utf8");
const css=fs.readFileSync("styles.css","utf8");
for(const id of ["character-group-tabs","character-group-dimensions","character-group-options",
 "character-group-reset","character-group-empty","character-group-summary"])
  assert.ok(html.includes('id="'+id+'"'),"Missing grouping UI "+id);
assert.ok(html.includes('src="character-groups.js?v='));
assert.ok(html.includes('data.js?v=canon-v1'),"Bust public data cache after canonical update");
assert.ok(css.includes(".person-card[hidden]"));
assert.ok(app.includes("groupFilter.primary")&&app.includes("state.visibleIds.has(rel.from)"));
assert.ok(app.includes('card.classList.toggle("is-deceased"')&&
  app.includes('dialog.classList.toggle("is-deceased"'),"Dead person portraits grayscale");
assert.ok(app.includes('p.grouping?.role === "hero" || p.grouping?.lifeStatus === "deceased"'),
  "Dead NPC must get † badge in character network");
assert.ok(css.includes("filter:grayscale(1)"));
assert.ok(app.includes('card.setPointerCapture(e.pointerId)')&&app.includes("drawConnections();"),
  "Existing drag controls must survive expansion");
assert.ok(app.includes('window.SOM_NAV?.changed()'),"History navigation preserved");
console.log("PASS — 25 canonical biographies, 17 public relationships, dead NPC and Atlas links");
