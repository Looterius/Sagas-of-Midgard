// node scripts/check-portrait-assets.mjs
// Validate generated assets, public references and the non-destructive loading pipeline.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const ctx={window:{}};
for(const file of ["data.js","portrait-assets.js"]){
  vm.runInNewContext(fs.readFileSync(file,"utf8"),ctx,{filename:file});
}
const data=ctx.window.CHRONICLE;
const manifest=ctx.window.SOM_PORTRAITS;
assert.ok(data?.people?.length>0&&manifest,"Missing portrait manifest or people data");
const references=data.people.filter(p=>typeof p.image==="string"&&p.image.startsWith("assets/portraits/"));
assert.equal(Object.keys(manifest).length,references.length,"Manifest must match public references");
let sourceBytes=0,thumbBytes=0,fullBytes=0,optimized=0,missing=0;
function verifyWebP(path){
  assert.ok(fs.existsSync(path),"Missing generated asset "+path);
  const b=fs.readFileSync(path);
  assert.equal(b.toString("ascii",0,4),"RIFF","Invalid WebP header "+path);
  assert.equal(b.toString("ascii",8,12),"WEBP","Invalid WebP signature "+path);
  return b.length;
}
for(const p of references) {
  const entry=manifest[p.image];
  assert.ok(entry,"Manifest missing "+p.image);
  if(entry.missing){
    missing++;
    assert.ok(!fs.existsSync(p.image),"Incorrect missing flag "+p.image);
    continue;
  }
  assert.ok(fs.existsSync(p.image),"Original public source disappeared: "+p.image);
  assert.ok(entry.thumb?.endsWith(".webp"),"No WebP thumb for "+p.id);
  assert.ok(entry.full?.endsWith(".webp") || entry.full===p.image,
    "Detail must be WebP or original for "+p.id);
  sourceBytes+=fs.statSync(p.image).size;
  thumbBytes+=verifyWebP(entry.thumb);
  fullBytes+=entry.full===p.image?fs.statSync(p.image).size:verifyWebP(entry.full);
  optimized++;
}
assert.equal(optimized,32,"All 32 public characters must have optimized portraits");
assert.equal(missing,0,"Svala portrait now exists; do not keep stale missing entry");
assert.ok(thumbBytes<sourceBytes*.15,"Thumbnails insufficiently compressed");
assert.ok(fullBytes<sourceBytes*.40,"Full detail variants insufficiently compressed");
const app=fs.readFileSync("app.js","utf8");
const atlas=fs.readFileSync("atlas.js","utf8");
const html=fs.readFileSync("index.html","utf8");
assert.ok(html.indexOf('src="portrait-assets.js?v=')>-1);
assert.ok(html.indexOf('src="portrait-assets.js?v=')<html.indexOf('src="atlas.js?v='));
assert.ok(html.indexOf('src="portrait-assets.js?v=')<html.indexOf('src="app.js?v='));
for(const pattern of ['window.SOM_PORTRAITS?.[image]','const portraitObserver = "IntersectionObserver" in window',
   'root: viewport','portrait.loading = size === "full" ? "eager" : "lazy"',
   'setArt(art, p.image, "full")','if (entry?.missing) return'])
  assert.ok(app.includes(pattern),"Missing app lazy loading control: "+pattern);
for(const pattern of ['window.SOM_PORTRAITS?.[image]','node.classList.contains("atlas2-npc-thumb")',
   'photo.loading = node.id === "atlas2-dialog-art" ? "eager" : "lazy"'])
  assert.ok(atlas.includes(pattern),"Missing Atlas image variant: "+pattern);
console.log("PASS — optimized portraits:",optimized,"missing originals:",missing);
console.log("Original used images:",(sourceBytes/1048576).toFixed(2),"MiB");
console.log("Thumbnails:",(thumbBytes/1048576).toFixed(2),"MiB");
console.log("Full-size images:",(fullBytes/1048576).toFixed(2),"MiB");
