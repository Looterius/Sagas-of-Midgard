// node scripts/check-chronicle-reader.mjs
// Kontrola publicznej Kroniki i pojedynczego czytnika bez zależności npm.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source={window:{}};
vm.runInNewContext(fs.readFileSync("data.js","utf8"),source,{filename:"data.js"});
const data=source.window.CHRONICLE;
const app=fs.readFileSync("app.js","utf8");
const html=fs.readFileSync("index.html","utf8");
const css=fs.readFileSync("styles.css","utf8");
const nav=fs.readFileSync("navigation.js","utf8");
const knownPlaces=new Set(data.places.filter(p=>p.visibility==="known").map(p=>p.id));
const chapters=new Set(data.chronicleChapters.map(c=>c.id));
const eventIds=new Set();
for(const event of data.chronicle){
 assert.ok(!eventIds.has(event.id),"Duplicate event "+event.id);
 eventIds.add(event.id);
 assert.ok(chapters.has(event.chapter),"Missing chapter "+event.id);
 assert.ok(knownPlaces.has(event.placeId),"Nonpublic place "+event.id);
 assert.ok(Array.isArray(event.paragraphs),"Missing paragraphs "+event.id);
}
assert.equal(data.chronicleChapters.length,5);
assert.equal(data.chronicle.length,21);
for(const v of ['id="chronicle-chapter-tabs"','id="chronicle-event-index"','id="chronicle-index"','id="chronicle-list"','src="app.js?v=chronicle-reader-v1"'])
 assert.ok(html.includes(v),"Missing UI "+v);
for(const v of ['let chronicleCurrentEventId = null','chronicleSelect = (id,','chronicleCurrentEventId ? [chronicleCurrentEventId] : []','chronicleSelect(target, { notify: false, focus: false })','chronicleSelect(eventId)','chronicleSelect(entry.eventId)'])
 assert.ok(app.includes(v),"Missing reader integration "+v);
assert.ok(nav.includes('url.searchParams.set("event", route.chronicleExpanded[0])'));
assert.ok(css.includes(".chronicle-reader-layout"));
class Element{
 constructor(tag="div",className="",text=""){this.tagName=tag;this.className=className;this.textContent=text;this.children=[];this.dataset={};this.attrs={};this.handlers={};this.value="all";this.open=true;}
 appendChild(x){this.children.push(x);return x;}
 replaceChildren(...xs){this.children=xs;}
 setAttribute(k,v){this.attrs[k]=v;}
 addEventListener(k,f){this.handlers[k]=f;}
 focus(){this.focused=true;}
 scrollIntoView(){this.scrolled=true;}
}
const nodes=Object.fromEntries(["chronicle-place-filter","chronicle-chapter-tabs","chronicle-event-index","chronicle-list","chronicle-count","chronicle-index-count","chronicle-index"].map(id=>["#"+id,new Element()]));
let changes=0;
const sandbox={window:{CHRONICLE:data,matchMedia:()=>({matches:true}),SOM_NAV:{changed:()=>changes++}},nodes,Element};
const start=app.indexOf("  function renderChronicle() {");
const end=app.indexOf("\n  function switchView(view) {",start);
assert.ok(start>=0 && end>start);
const renderer=app.slice(start,end);
const harness="(() => {const data=window.CHRONICLE; const $=x=>nodes[x]; const make=(t,c,v)=>new Element(t,c,v);const setArt=()=>{}; const selectPerson=()=>{}; const switchView=()=>{};let chronicleCurrentEventId=null;let chronicleSelect=()=>{};"+renderer+";renderChronicle();return {pick:(id,opts)=>chronicleSelect(id,opts),current:()=>chronicleCurrentEventId};})()";
const reader=vm.runInNewContext(harness,sandbox,{filename:"chronicle-dom-test.js"});
const list=nodes["#chronicle-list"],tabs=nodes["#chronicle-chapter-tabs"],index=nodes["#chronicle-event-index"];
assert.equal(list.children.filter(x=>x.className==="chronicle-card").length,1);
assert.equal(tabs.children.length,5);
assert.equal(index.children.length,3);
assert.equal(reader.current(),data.chronicle[0].id);
tabs.children.find(x=>x.dataset.chapter==="II").handlers.click();
assert.equal(index.children.length,5);
reader.pick("kurhan-gungnir",{focus:false});
assert.equal(reader.current(),"kurhan-gungnir");
assert.equal(list.children.filter(x=>x.className==="chronicle-card").length,1);
const filter=nodes["#chronicle-place-filter"];filter.value="hrafnvik";filter.handlers.change();
reader.pick("kurhan-gungnir",{focus:false});
assert.equal(filter.value,"all");
const prior=changes;
reader.pick("ogien-i-olbrzymy",{notify:false,focus:false});
assert.equal(changes,prior,"Back should not append new navigation");
assert.ok(changes>0);
console.log("PASS — Chronicle: 5 chapters, 21 known events, one reader, filters and navigation");
