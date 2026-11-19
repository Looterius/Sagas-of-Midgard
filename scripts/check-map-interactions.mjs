// node scripts/check-map-interactions.mjs
// Symulacja DOM: sprawdź rzeczywisty start na mapie, przyciski i linki do Atlasu.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync("data.js","utf8"),sandbox,{filename:"data.js"});
const data=sandbox.window.CHRONICLE;
class Element {
 constructor(tag="div") {
   this.tagName=tag;this.children=[];this.className="";this.dataset={};this.style={};this.events={};
   this.textContent="";this.hidden=false;this.disabled=false;this.src="";
   this.classList={add:x=>{this.className+=" "+x;}};
 }
 appendChild(child){this.children.push(child);return child}
 replaceChildren(...children){this.children=children}
 addEventListener(name,cb){this.events[name]=cb}
 setAttribute(k,v){this[k]=v}
 setPointerCapture(){}
 scrollIntoView(){this.scrolled=true}
 querySelectorAll(selector){
   const all=[];
   const scan=n=>{for(const c of n.children){all.push(c);scan(c)}};
   scan(this);
   const cls=selector.startsWith(".")?selector.slice(1):null;
   return all.filter(x=>cls?x.className.split(/\s+/).includes(cls):selector==="button"&&x.tagName==="button");
 }
}
const ids=["maps-canvas","maps-zoom-label","maps-zoom-out","maps-zoom-in","maps-reset","maps-current-title",
  "maps-current-description","maps-accuracy","maps-art","maps-viewport","maps-breadcrumbs",
  "maps-marker-layer","maps-region-links","maps-place-list","maps-places-section","maps-open-atlas"];
const nodes=Object.fromEntries(ids.map(id=>["#"+id,new Element()]));
const document={querySelector:selector=>nodes[selector],createElement:tag=>new Element(tag)};
const actions=[];
sandbox.document=document;
sandbox.window.SOM_NAV={changed:()=>actions.push(["changed"])};
vm.runInNewContext(fs.readFileSync("maps.js","utf8"),sandbox,{filename:"maps.js"});
const maps=sandbox.window.SOM_MAPS;
assert.ok(maps);
maps.mount({data,openPlace:id=>actions.push(["place",id]),openAtlasRegion:id=>actions.push(["region",id])});
assert.equal(maps.getCurrent(),"drengrlands","Map tab must open the actual artwork");
assert.equal(nodes["#maps-art"].src,"assets/maps/Drengrlands.png");
assert.equal(nodes["#maps-viewport"].dataset.mapId,"drengrlands");
assert.equal(nodes["#maps-marker-layer"].children.length,5,"Only verified region labels; no guessed site pins");
assert.equal(nodes["#maps-region-links"].children.length,6,"Six accessible regions including home settlement");
for(const id of ["agder","hordalands","vestmar","fjordane","eylenda"]){
 const hit=nodes["#maps-marker-layer"].children.find(x=>x.dataset.regionId===id);
 assert.ok(hit,"Missing region hotspot "+id);
 hit.events.click();
 assert.deepEqual(actions.at(-1),["region",id],"Map hotspot did not open Atlas region");
 assert.ok(hit.events.pointerdown,"Region marker must handle pointer clicks");
 const quick=nodes["#maps-region-links"].children.find(x=>x.dataset.regionId===id);
 quick.events.click();
 assert.deepEqual(actions.at(-1),["region",id],"Quick region link broken");
}
nodes["#maps-region-links"].children.find(x=>x.dataset.regionId==="osady-bohaterow").events.click();
assert.deepEqual(actions.at(-1),["region","osady-bohaterow"]);
const allPlaceLinks=nodes["#maps-place-list"].querySelectorAll(".maps-site-link");
assert.ok(allPlaceLinks.length>=12,"Known locations not linked in the list");
for(const id of ["hrafnvik","skjorvik","ejkjavik","fafnir-cave"]){
 const link=allPlaceLinks.find(x=>x.dataset.placeId===id);
 assert.ok(link,"Missing known place "+id);
 link.events.click();
 assert.deepEqual(actions.at(-1),["place",id],"Place must open Atlas card");
}
maps.showForPlace("hrafnvik");
const highlighted=nodes["#maps-place-list"].querySelectorAll(".maps-site-link").find(x=>x.dataset.placeId==="hrafnvik");
assert.ok(highlighted.className.includes("maps-site-link--highlight"));
assert.ok(highlighted.scrolled,"Map-to-place return should highlight the link");
assert.equal(nodes["#maps-places-section"].open,true,
  "Find place on map must first expand the collapsed all-places list");
maps.show("midgard");
assert.equal(maps.getCurrent(),"drengrlands","Old Midgard deep link should redirect");
assert.equal(nodes["#maps-art"].src,"assets/maps/Drengrlands.png");
nodes["#maps-open-atlas"].events.click();
assert.deepEqual(actions.at(-1),["region","drengrlands"]);
const app=fs.readFileSync("app.js","utf8");
assert.ok(app.includes('function openAtlasPlace(id)') &&
  app.includes('switchView("maps");') &&
  app.includes('window.SOM_ATLAS?.open(id)'),
  "Map place links must open within Atlas świata");
assert.ok(app.includes('window.SOM_MAPS?.show("drengrlands")'),
  "Map tab still starts on the actual campaign map");
assert.ok(app.includes('window.SOM_ATLAS?.showRegion("drengrlands");'),
  "Atlas world must open directly at known lands");
const css=fs.readFileSync("styles.css","utf8");
assert.ok(css.includes(".maps-hotspot,.maps-marker--place{pointer-events:auto}"),
  "Hotspot layer buttons must receive pointer events");
const atlas=fs.readFileSync("atlas.js","utf8");
assert.ok(atlas.includes('showRegion("drengrlands");'),"Atlas should start at known regions");
console.log("PASS: direct map, 5 working hotspots, 6 region buttons, location links, Atlas return and legacy link");
