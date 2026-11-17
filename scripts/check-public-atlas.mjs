// Run with: node scripts/check-public-atlas.mjs
// Publikacja jest jawna: wykryj ukryte wpisy i uszkodzone referencje.
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const errors = [];
const sandbox = {window: {}};
vm.runInNewContext(fs.readFileSync('data.js','utf8'), sandbox, {filename:'data.js'});
const data=sandbox.window.CHRONICLE;
if (!data) throw new Error('Missing window.CHRONICLE');

const regions=data.atlasRegions||[];
const places=data.places||[];
const people=data.people||[];
const events=data.chronicle||[];
const regionIds=new Set(regions.map(r=>r.id));
const placeIds=new Set(places.map(p=>p.id));
const peopleIds=new Set(people.map(p=>p.id));
const eventIds=new Set(events.map(e=>e.id));
if(!regionIds.has('midgard'))errors.push('Missing world Midgard');
for(const r of regions){
 if(r.visibility!=='known')errors.push('Non-public region in data.js: '+r.id);
 if(r.parentId&&!regionIds.has(r.parentId))errors.push('Invalid region parent for '+r.id);
}
for(const p of places){
 if(p.visibility!=='known')errors.push('Non-public place in data.js: '+p.id);
 if(p.parentRegionId&&!regionIds.has(p.parentRegionId))errors.push('Invalid region for '+p.id);
 if(p.withinSiteId&&!placeIds.has(p.withinSiteId))errors.push('Unknown withinSiteId for '+p.id);
 for(const personId of p.personIds||[])if(!peopleIds.has(personId))errors.push('Unknown person '+personId+' linked to '+p.id);
 if(p.image){
   if(!/^assets\/locations\/[^\\\/]+$/.test(p.image))errors.push('Invalid location image '+p.image);
   else if(!fs.existsSync(path.join(process.cwd(),p.image)))errors.push('Missing image '+p.image);
 }
}
for(const e of events){
 if(!placeIds.has(e.placeId))errors.push('Unknown event place: '+e.placeId);
 for(const id of e.participants||[])if(!peopleIds.has(id))errors.push('Unknown event participant: '+id);
}
const html=fs.readFileSync('index.html','utf8');
for(const id of ['atlas2-breadcrumb','atlas2-region-grid','place-dialog','atlas2-dialog-people','atlas2-dialog-events'])if(!html.includes('id="'+id+'"'))errors.push('Missing HTML id '+id);
if(new Set(regions.map(r=>r.id)).size!==regions.length)errors.push('Duplicate region id');
if(new Set(places.map(p=>p.id)).size!==places.length)errors.push('Duplicate place id');
if(eventIds.size!==events.length)errors.push('Duplicate event id');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
else console.log('PASS — public atlas:',regions.length,'regions,',places.length,'places,',people.length,'NPCs,',events.length,'events');
