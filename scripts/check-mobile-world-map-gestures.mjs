// node scripts/check-mobile-world-map-gestures.mjs
// Symulacja Pointer Events: pinch-to-zoom, zoom wokół centrum i pan,
// przypadkowe kliknięcia, limity, reset, dwa światy i przyciski.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
const read = path => fs.readFileSync(path, "utf8");
const sandbox={window:{addEventListener(){}}};
vm.runInNewContext(read("data.js"),sandbox,{filename:"data.js"});
const data=sandbox.window.CHRONICLE;
class Element {
 constructor(tag="div"){
  this.tagName=tag;this.children=[];this.events={};this.dataset={};this.style={};
  this.className="";this.textContent="";this.disabled=false;this.hidden=false;this.src="";
  this.classList={add:v=>this.className+=" "+v,toggle:()=>{}};
 }
 replaceChildren(...items){this.children=items}
 appendChild(x){this.children.push(x);return x}
 addEventListener(name,fn,options){(this.events[name]??=[]).push({fn,options})}
 setAttribute(k,v){this[k]=v}
 getBoundingClientRect(){return {left:10,top:20,width:400,height:300}}
 setPointerCapture(id){this.capture=id}
 scrollIntoView(){this.scrolled=true}
 querySelectorAll(selector){
  const nodes=[];const scan=root=>{for(const c of root.children){nodes.push(c);scan(c)}};scan(this);
  const cls=selector.startsWith(".")?selector.slice(1):null;
  return nodes.filter(x=>cls?x.className.split(/\s+/).includes(cls):selector==="button"&&x.tagName==="button");
 }
 dispatch(name,props={}){
  let prevented=false,stopped=false;
  const event={type:name,pointerId:0,pointerType:"touch",button:0,
   clientX:0,clientY:0,deltaY:0,timeStamp:0,
   ctrlKey:false,metaKey:false,cancelable:true,
   target:{closest:()=>null},
   preventDefault(){prevented=true},stopPropagation(){stopped=true},
   ...props};
  for(const handler of this.events[name]??[]) handler.fn(event);
  return {prevented,stopped};
 }
}
const ids=["maps-canvas","maps-zoom-label","maps-zoom-out","maps-zoom-in","maps-reset",
 "maps-current-title","maps-current-description","maps-accuracy","maps-art",
 "maps-viewport","maps-breadcrumbs","maps-marker-layer","maps-region-links",
 "maps-world-tabs","maps-place-list","maps-places-section","maps-open-atlas"];
const dom=Object.fromEntries(ids.map(id=>["#"+id,new Element()]));
sandbox.document={querySelector:x=>dom[x],createElement:tag=>new Element(tag)};
const navigated=[];
sandbox.window.SOM_NAV={changed:()=>navigated.push("url")};
vm.runInNewContext(read("maps.js"),sandbox,{filename:"maps.js"});
const maps=sandbox.window.SOM_MAPS;
assert.ok(maps,"Maps module exported");
maps.mount({data,openPlace:id=>navigated.push(id),openAtlasRegion:id=>navigated.push(id)});
const viewport=dom["#maps-viewport"],inButton=dom["#maps-zoom-in"],
 outButton=dom["#maps-zoom-out"],reset=dom["#maps-reset"];
const state=()=>maps.getViewState();
assert.equal(state().zoom,1);
assert.equal(dom["#maps-art"].src,"assets/maps/Drengrlands.png");
assert.equal(viewport.style.touchAction,undefined,"CSS controls gesture action");
assert.ok(viewport.events.pointerdown.some(x=>x.options?.capture),"Listen even on hotspot");
const p=(type,id,x,y,timeStamp=0,target=null)=>viewport.dispatch(type,{
 pointerId:id,clientX:x,clientY:y,timeStamp,
 target:{closest:()=>target}
});
p("pointerdown",1,110,150,10);p("pointerdown",2,210,150,11);
const pinch=p("pointermove",2,310,150,20);
assert.ok(pinch.prevented,"Pinch must suppress native page zoom");
assert.equal(state().zoom,2,"Finger spacing doubled: map zoom doubled");
assert.ok(state().panX>90&&state().panX<110,"Zoom anchors midpoint, not top-left");
assert.ok(dom["#maps-canvas"].style.transform.includes("scale(2)"));
assert.equal(dom["#maps-zoom-label"].textContent,"200%");
p("pointerup",2,310,150,30);p("pointerup",1,110,150,31);
const ghost=viewport.dispatch("click",{timeStamp:45});
assert.ok(ghost.prevented&&ghost.stopped,"No accidental click on region after pinch");
const tap=viewport.dispatch("click",{timeStamp:600});
assert.equal(tap.prevented,false,"Real next tap remains possible");
const beforePan=state().panX;
p("pointerdown",3,190,150,650);p("pointermove",3,155,150,660);
assert.ok(state().panX<beforePan,"One-finger drag pans zoomed map");
p("pointerup",3,155,150,670);
for(let i=0;i<20;i++)inButton.dispatch("click",{timeStamp:1000+i});
assert.equal(state().zoom,5,"Never zoom above maximum 500%");
assert.equal(inButton.disabled,true);
assert.ok(Math.abs(state().panX)<=800&&Math.abs(state().panY)<=600,"Pan clamped to viewport");
const oldZoom=state().zoom;
viewport.dispatch("wheel",{deltaY:140,clientX:190,clientY:150,timeStamp:1200});
assert.ok(state().zoom<oldZoom,"Wheel zoom-out works");
reset.dispatch("click");
assert.deepEqual([state().zoom,state().panX,state().panY],[1,0,0],"Reset map");
assert.equal(outButton.disabled,true);
const normalScroll=viewport.dispatch("wheel",{deltaY:100});
assert.equal(normalScroll.prevented,false,"Scroll page with mouse when not zoomed");
maps.show("gardarike");
assert.equal(state().zoom,1);
assert.equal(dom["#maps-art"].src,"assets/locations/Gardarike_ Aged Rus’ Atlas Map.png");
// Start on region hotspot (pointerdown might stop bubbling at target).
// Capture-phase listener still receives both touches; zoom and taps coexist.
const region={tagName:"button"};
p("pointerdown",4,150,120,150,region);
p("pointerdown",5,230,120,151);
p("pointermove",5,310,120,152);
assert.equal(state().zoom,2,"Rus map pinches even when first touch began on a button");
p("pointerup",5,310,120,153);p("pointerup",4,150,120,154);
maps.show("drengrlands");
assert.deepEqual([state().zoom,state().panX,state().panY],[1,0,0],"Changing maps resets zoom");
const html=read("index.html"),css=read("styles.css");
assert.ok(html.includes('id="maps-viewport"'));
assert.ok(html.includes("maps-touch-hint"));
assert.ok(html.includes("maps.js?v=mobile-pinch-v1"));
assert.ok(css.includes(".maps-viewport{touch-action:none"));
assert.ok(css.includes(".maps-zoom-tools button{width:44px;height:44px"));
for(const folder of ["assets/bestiary/README.md","assets/items/README.md"])
 assert.ok(fs.existsSync(folder),"Missing user upload folder "+folder);
console.log("PASS — pinch on both world maps, anchored zoom, pan, click protection, wheel, limits and reset");
