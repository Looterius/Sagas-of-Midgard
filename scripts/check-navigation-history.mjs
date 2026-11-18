// node scripts/check-navigation-history.mjs
// Unit test browser History API flow + static wiring of public sections.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const listeners = new Map();
let entries = [{ state: null, url: "/outside" }, { state: null, url: "/app" }];
let index = 1;
let active = { view: "relationships", person: null, place: null };
const restored = [];
const win = {
  location: { href: "https://example.test/app" },
  history: {
    get state() { return entries[index].state; },
    pushState(state, _title, url) {
      entries = entries.slice(0, index + 1);
      entries.push({state,url});
      index++;
    },
    replaceState(state, _title, url) { entries[index] = {state,url}; },
    back() {
      if (index===0) return;
      index--;
      for (const fn of listeners.get("popstate") || [])
        fn({state:entries[index].state});
    }
  },
  addEventListener(name, listener) {
    if (!listeners.has(name)) listeners.set(name, []);
    listeners.get(name).push(listener);
  }
};
const sandbox={window:win,Date,Math,queueMicrotask};
vm.runInNewContext(fs.readFileSync("navigation.js","utf8"),sandbox,{filename:"navigation.js"});
const nav=win.SOM_NAV;
nav.mount({
  snapshot:()=>({...active}),
  restore:route=>{active={...route};restored.push(route);}
});
assert.equal(index,1);
assert.equal(win.history.state.somNavigation.depth,0,"Root is a replaceState, not artificial extra history");
const tick=()=>new Promise(resolve=>queueMicrotask(resolve));

active={view:"relationships",person:"sianita",place:null};
nav.changed();
await tick();
assert.equal(index,2);
assert.equal(win.history.state.somNavigation.depth,1);

active={view:"relationships",person:"halvard",place:null};
nav.changed();
nav.changed();
await tick();
assert.equal(index,3,"Nested person click adds only one history entry");
nav.closeLayer(()=>{throw new Error("Should navigate back, not close manually");});
assert.equal(index,2);
assert.equal(active.person,"sianita","Phone Back should restore previous person");
win.history.back();
assert.equal(index,1);
assert.equal(active.person,null,"Second phone Back should restore the network");
assert.equal(active.view,"relationships");
const count=entries.length;
nav.changed();
await tick();
assert.equal(entries.length,count,"Restoration should not push a duplicate entry");

// A tab switch + opening a place in the same synchronous click = one entry.
active={view:"locations",person:null,place:"hrafnvik"};
nav.changed();
nav.changed();
await tick();
assert.equal(index,2);
assert.equal(entries[index].state.somNavigation.depth,1);
nav.closeLayer(()=>{throw new Error("Back should close place");});
assert.equal(index,1);
assert.equal(active.view,"relationships");
assert.equal(active.place,null);
// At the app root, the site must not swallow the browser's real Back.
win.history.back();
assert.equal(index,0,"Back at root must return to previous page");
assert.equal(win.history.state,null);

const app=fs.readFileSync("app.js","utf8");
const atlas=fs.readFileSync("atlas.js","utf8");
const maps=fs.readFileSync("maps.js","utf8");
const html=fs.readFileSync("index.html","utf8");
for(const fragment of [
  "captureNavigation()", "restoreNavigation(route)", "SOM_NAV?.mount",
  "SOM_NAV?.changed()", "SOM_NAV.closeLayer(closeCharacter)",
  "chronicleExpanded", "groupFilter.primary"
]) assert.ok(app.includes(fragment),"Missing app history integration "+fragment);
for(const fragment of ["SOM_NAV?.changed()", "SOM_NAV.closeLayer(close)",
   "getNavigationState", "window.SOM_ATLAS = {mount,open,showRegion,close,getNavigationState}"])
  assert.ok(atlas.includes(fragment),"Missing atlas history integration "+fragment);
assert.ok(maps.includes("SOM_NAV?.changed()") && maps.includes("getCurrent: () => current"));
assert.ok(html.indexOf('src="navigation.js?v=')>-1 &&
  html.indexOf('src="navigation.js?v=')<html.indexOf('src="app.js?v='));
console.log("PASS — browser Back routes, modal closes, coalesced changes and natural exit");
