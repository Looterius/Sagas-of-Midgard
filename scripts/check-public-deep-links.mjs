// node scripts/check-public-deep-links.mjs
// Sprawdzaj wyłącznie publiczne identyfikatory, linki, filtry i karty.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const source={window:{}};
for(const file of ["data.js","character-groups.js"]){
  vm.runInNewContext(fs.readFileSync(file,"utf8"),source,{filename:file});
}
const data=source.window.CHRONICLE, groups=source.window.SOM_GROUPS;
const people=new Map(data.people.map(p=>[p.id,p]));
assert.equal(data.people.length,32);
assert.equal(data.bestiary.length,1);
assert.equal(data.items.length,1);
const knownPlaces=new Set(data.places.filter(p=>p.visibility==="known").map(p=>p.id));
const knownEvents=new Set(data.chronicle.map(e=>e.id));
for(const [kind,entries] of [["bestiary",data.bestiary],["items",data.items]]){
 for(const entry of entries){
  assert.match(entry.id,/^[a-z0-9-]+$/);
  assert.ok(entry.name && entry.summary && entry.history && entry.kind);
  assert.ok(knownPlaces.has(entry.placeId),"Unknown public place in "+kind);
  assert.ok(knownEvents.has(entry.eventId),"Unknown public event in "+kind);
  assert.ok(!/mechanik[aię]|obrażeni[ea]|HP:|atak:\s*\d|sekret MG/i.test(entry.summary),
    "Catalog may not claim unpublished mechanical traits");
 }
}
assert.equal(data.bestiary[0].id,"troll-w-klatce");
assert.equal(data.items[0].id,"gungnir");
const captive=people.get("ragnvald-s");
assert.ok(captive.grouping.statuses.includes("captive"));
assert.ok(captive.grouping.settlementIds.includes("hrafnvik"));
assert.ok(captive.grouping.settlementIds.includes("skjorvik"));
assert.ok(!people.get("ragnvald-p").grouping.statuses?.includes("captive"));
const ids=(dim,val)=>data.people.filter(p=>groups.matches(data,p,{
  primary:"all",dimension:dim,value:val,search:""
})).map(p=>p.id).sort().join(",");
assert.equal(ids("families","rod-halfdana"),"asgrim,halfdan");
assert.equal(ids("families","rod-morotara"),"floki,haroks,morotar");
assert.equal(ids("factions","berserkerzy"),"haroks");
assert.equal(ids("factions","czciciele-odyna"),"floki,torvald");
assert.equal(data.characterGroupCatalog.families.length,6);
assert.equal(data.characterGroupCatalog.factions.length,3);

// Mock browser: shared link opened in a clean tab, then Back across view states.
function openNavigation(address) {
 const listeners=new Map(), events=[];
 let currentHref=address;
 let records=[{url:"https://example.test/previous",state:null},
              {url:address,state:null}],idx=1;
 const win={
  location:{
    get href(){return currentHref;},
    get search(){return new URL(currentHref).search;}
  },
  history:{
    get state(){return records[idx].state;},
    pushState(state,title,url){
      records=records.slice(0,idx+1);records.push({state,url});idx++;
      currentHref=url;
    },
    replaceState(state,title,url){records[idx]={state,url};currentHref=url;},
    back(){
      if(idx===0)return;
      idx--;currentHref=records[idx].url;
      for(const callback of listeners.get("popstate")||[])callback({state:records[idx].state});
    }
  },
  addEventListener(type,fn){
    if(!listeners.has(type))listeners.set(type,[]);
    listeners.get(type).push(fn);
  }
 };
 const sandbox={window:win,Math,Date,URL,URLSearchParams,queueMicrotask};
 vm.runInNewContext(fs.readFileSync("navigation.js","utf8"),sandbox,{filename:"navigation.js"});
 const root=()=>({
   view:"relationships",person:null,place:null,region:"midgard",map:"midgard",
   group:{primary:"all",dimension:null,value:null,expanded:null},
   chronicleFilter:"all",chronicleExpanded:[],entry:null
 });
 let active=root();
 win.SOM_NAV.mount({snapshot:()=>active,restore:route=>{
   events.push(JSON.parse(JSON.stringify(route)));active=JSON.parse(JSON.stringify(route));
 }});
 return{win,events,getActive:()=>active,setActive:x=>{active=x;},
   depth:()=>win.history.state?.somNavigation?.depth,
   index:()=>idx};
}
const base="https://looterius.github.io/Sagas-of-Midgard/";
const ruler=openNavigation(base+"?grupa=rulers");
assert.equal(ruler.getActive().group.primary,"rulers");
assert.equal(ruler.depth(),0,"Shared deep link must not add ghost entry");
assert.equal(new URL(ruler.win.SOM_NAV.shareUrl()).searchParams.get("grupa"),"rulers");
assert.equal(new URL(ruler.win.location.href).searchParams.get("grupa"),"rulers");
ruler.setActive({...ruler.getActive(),group:{primary:"heroes",dimension:null,value:null,expanded:null}});
ruler.win.SOM_NAV.changed();
await new Promise(done=>queueMicrotask(done));
assert.equal(ruler.depth(),1);
assert.equal(new URL(ruler.win.location.href).searchParams.get("grupa"),"heroes");
ruler.win.history.back();
assert.equal(ruler.getActive().group.primary,"rulers","Back should restore shared filter");
ruler.win.history.back();
assert.equal(ruler.index(),0,"Back at shared root should leave app, not loop");

const versions=[
 {url:"?view=relationships&dimension=families&value=rod-halfdana",
   check:r=>r.group.dimension==="families"&&r.group.value==="rod-halfdana"},
 {url:"?view=relationships&postac=sianita",check:r=>r.person==="sianita"},
 {url:"?view=maps&map=drengrlands",check:r=>r.view==="maps"&&r.map==="drengrlands"},
 {url:"?view=locations&place=hrafnvik",check:r=>r.view==="locations"&&r.place==="hrafnvik"},
 {url:"?view=chronicle&event=ogien-i-olbrzymy",check:r=>r.view==="chronicle"&&r.chronicleExpanded[0]==="ogien-i-olbrzymy"},
 {url:"?view=bestiary&entry=troll-w-klatce",check:r=>r.view==="bestiary"&&r.entry==="troll-w-klatce"},
 {url:"?view=items&entry=gungnir",check:r=>r.view==="items"&&r.entry==="gungnir"},
 {url:"?view=runes&rune=algiz",check:r=>r.view==="runes"&&r.rune==="algiz"}
];
for(const entry of versions){
 const nav=openNavigation(base+entry.url);
 assert.ok(entry.check(nav.getActive()),"Deep link failed: "+entry.url);
 const result=new URL(nav.win.SOM_NAV.shareUrl());
 assert.equal(result.searchParams.get("view"),nav.getActive().view);
 assert.equal(nav.depth(),0);
}
const invalid=openNavigation(base+"?view=secret-zone&grupa=rulers");
assert.equal(invalid.getActive().view,"relationships","Bad view must be ignored");
assert.equal(invalid.depth(),0);

const html=fs.readFileSync("index.html","utf8");
const app=fs.readFileSync("app.js","utf8");
const css=fs.readFileSync("styles.css","utf8");
for(const view of ["relationships","maps","locations","chronicle","runes","bestiary","items"]){
 assert.ok(html.includes('data-view="'+view+'"'),"No sidebar entry "+view);
 assert.ok(html.includes('id="'+view+'-view"'),"No view panel "+view);
}
for(const el of ["share-current-view","share-status","fullscreen-toggle","fit",
                  "bestiary-list","items-list","runes-grid","runes-detail","runes-search"])
 assert.ok(html.includes('id="'+el+'"'),"Missing interface "+el);
assert.ok(!html.includes("EYLENDA <i>·</i> KRONIKA"),"Old decorative Eylenda/Kronika removed");
assert.ok(html.includes('src="navigation.js?v=runes-v1"'));
assert.ok(app.includes('fullscreenSection.requestFullscreen()'));
assert.ok(app.includes('fullscreenSection.classList.toggle("is-fullscreen-fallback"'));
assert.ok(app.includes('navigator.clipboard.writeText(address)'));
assert.ok(app.includes('renderCatalog("bestiary", data.bestiary)'));
assert.ok(css.includes("#relationships-view:fullscreen"));
assert.ok(css.includes(".lore-catalog-grid"));
console.log("PASS: shareable rulers/family/person/place/map/chronicle/catalog links and native Back");
console.log("PASS: 6 categories, 6 families, 3 public factions, prisoner badge, fullscreen and 2 safe catalog entries");
