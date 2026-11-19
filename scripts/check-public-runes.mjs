// node scripts/check-public-runes.mjs
// Regressions: katalog 24 jawnych znaków, wyszukiwanie po polsku, wybór i historia.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
const html=fs.readFileSync("index.html","utf8");
const css=fs.readFileSync("styles.css","utf8");
const app=fs.readFileSync("app.js","utf8");
const nav=fs.readFileSync("navigation.js","utf8");
const source=fs.readFileSync("runes.js","utf8");
const rules=fs.readFileSync("rune-rules.js","utf8");
for(const id of ["runes-view","runes-grid","runes-detail","runes-search","runes-clear"])
 assert.ok(html.includes('id="'+id+'"'),"Missing rune UI element "+id);
assert.ok(html.includes('data-view="runes"'));
assert.ok(html.includes('src="rune-rules.js?v=corebook-v1"'));
assert.ok(html.includes('src="runes.js?v=mechanics-v2"'));
assert.ok(html.includes('src="navigation.js?v=runes-v1"'));
assert.ok(nav.includes('url.searchParams.set("rune", route.rune)'));
assert.ok(app.includes('window.SOM_RUNES?.select(route.rune || null, {notify:false,focus:false})'));
assert.ok(css.includes(".runes-glyph")&&css.includes("@media(max-width:560px)"));
class El{
 constructor(tag){this.tagName=tag;this.children=[];this.className="";this.textContent="";this.value="";this.hidden=false;this.attrs={};this.dataset={};this.handlers={};}
 appendChild(x){this.children.push(x);return x}
 replaceChildren(...xs){this.children=xs}
 setAttribute(k,v){this.attrs[k]=v}
 addEventListener(k,cb){this.handlers[k]=cb}
 focus(){this.focused=true}
 scrollIntoView(){this.scrolled=true}
 querySelector(tag){const scan=node=>node.tagName===tag?node:node.children.map(scan).find(Boolean);return this.children.map(scan).find(Boolean)||null}
}
const nodes=Object.fromEntries(["#runes-grid","#runes-detail","#runes-search","#runes-count","#runes-clear"].map(x=>[x,new El()]));
const document={querySelector:x=>nodes[x],createElement:tag=>new El(tag)};
let changes=0;
const window={SOM_NAV:{changed:()=>changes++},matchMedia:()=>({matches:false})};
vm.runInNewContext(rules,{window},{filename:"rune-rules.js"});
assert.equal(Object.keys(window.SOM_RUNE_RULES).length,24,"Must cover 24 runes");
for(const [id,powers] of Object.entries(window.SOM_RUNE_RULES)){
 assert.equal(powers.length,3,"Three positions for "+id);
 assert.ok(powers.every(x=>x.length>28),"Numeric descriptions for "+id);
}
assert.match(window.SOM_RUNE_RULES.algiz[0],/5 wybranych sojuszników.*2 rundy/);
assert.match(window.SOM_RUNE_RULES.algiz[1],/DR 2 na 3 rundy/);
assert.match(window.SOM_RUNE_RULES.algiz[2],/2 wybranych sojuszników.*3 rundy.*1/);
assert.match(window.SOM_RUNE_RULES.kaunan[0],/6 \+ \(SP Runecasting \/ 4\)/);
vm.runInNewContext(source,{window,document},{filename:"runes.js"});
const all=window.SOM_RUNES.all();
assert.equal(all.length,24);
assert.equal(new Set(all.map(x=>x.id)).size,24);
assert.equal(new Set(all.map(x=>x.glyph)).size,24);
assert.equal(all[0].glyph,"ᚠ");
assert.equal(all.at(-1).glyph,"ᛟ");
assert.equal(nodes["#runes-grid"].children.length,24);
window.SOM_RUNES.search("potrzebuję ochrony przed ranami");
assert.ok(nodes["#runes-grid"].children.some(x=>x.dataset.rune==="algiz"),"Natural search protection");
window.SOM_RUNES.search("podróż po morzu");
assert.ok(nodes["#runes-grid"].children.some(x=>x.dataset.rune==="raido"),"Natural search journey");
window.SOM_RUNES.search("");
nodes["#runes-grid"].children.find(x=>x.dataset.rune==="algiz").handlers.click();
assert.equal(window.SOM_RUNES.getSelected(),"algiz");
assert.equal(changes,1);
const positions=nodes["#runes-detail"].children.find(x=>x.className==="runes-positions");
assert.ok(positions,"Each rune displays its mechanics");
assert.equal(positions.children.length,3);
assert.ok(positions.children[1].children.some(x=>x.textContent===window.SOM_RUNE_RULES.algiz[1]));
window.SOM_RUNES.select("pertho",{notify:false,focus:false});
assert.equal(changes,1,"Back route restore must not add history");
assert.equal(window.SOM_RUNES.getSelected(),"pertho");
window.SOM_RUNES.select("invalid",{notify:false});
assert.equal(window.SOM_RUNES.getSelected(),null);
assert.ok(!source.includes("240 wydarzeń")&&!source.includes("WOREK 24"),"No private GM rune tables");
console.log("PASS: 24 runes, 72 mechanical effects, natural Polish search and links");
