// Generate a public list of referenced portrait files for the WebP build.
// Usage: node scripts/export-public-portrait-references.mjs > /tmp/som-portrait-refs.json
import fs from "node:fs";
import vm from "node:vm";
const ctx={window:{}};
vm.runInNewContext(fs.readFileSync("data.js","utf8"),ctx,{filename:"data.js"});
const people=ctx.window.CHRONICLE?.people || [];
const result=people
  .filter(p=>typeof p.id==="string" && typeof p.image==="string" && p.image.startsWith("assets/portraits/"))
  .map(p=>({id:p.id,image:p.image}));
if(new Set(result.map(p=>p.id)).size!==result.length)throw new Error("Duplicate portrait owner IDs");
process.stdout.write(JSON.stringify(result,null,2)+"\n");
