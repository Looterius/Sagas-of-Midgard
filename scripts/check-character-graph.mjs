// Run: node scripts/check-character-graph.mjs
// Sprawdź wspólną geometrię kart/SVG, zatory i połączenia na wszystkich znanych filtrach.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const env = {window: {}};
for (const file of ["data.js", "character-groups.js", "graph-geometry.js"])
  vm.runInNewContext(fs.readFileSync(file, "utf8"), env, {filename: file});
const data = env.window.CHRONICLE, groups = env.window.SOM_GROUPS;
const graph = env.window.SOM_GRAPH_GEOMETRY;
assert.ok(graph, "Missing reusable graph geometry module");
assert.equal(graph.CANVAS.width, 1600);
assert.equal(graph.CANVAS.height, 1000);
assert.equal(graph.CARD.width, 180);
assert.equal(graph.CARD.height, 240);

function positionMap(people, original = false) {
  if (original) return Object.fromEntries(people.map(p => [p.id, {x:p.x,y:p.y}]));
  return groups.layout(people);
}
function edgePointOnRect(point, pos) {
  const eps=0.01,w=graph.CARD.width,h=graph.CARD.height;
  const withinX=point.x>=pos.x-eps&&point.x<=pos.x+w+eps;
  const withinY=point.y>=pos.y-eps&&point.y<=pos.y+h+eps;
  return withinX&&withinY&&(
    Math.abs(point.x-pos.x)<eps || Math.abs(point.x-(pos.x+w))<eps ||
    Math.abs(point.y-pos.y)<eps || Math.abs(point.y-(pos.y+h))<eps
  );
}
function audit(label, people, positions) {
  const visible=new Set(people.map(p=>p.id));
  for(const rel of data.relationships) {
    if(!visible.has(rel.from)||!visible.has(rel.to)) continue;
    const result=graph.link(rel.from,rel.to,positions,visible);
    assert.ok(result && result.path.startsWith("M "),label+": missing route "+rel.from+"/"+rel.to);
    assert.ok(result.isClear,label+": route collides "+rel.from+"/"+rel.to);
    assert.ok(edgePointOnRect(result.from,positions[rel.from]),label+": starting line misses card");
    assert.ok(edgePointOnRect(result.to,positions[rel.to]),label+": ending line misses card");
    assert.ok(result.points.every(p=>p.x>=0&&p.x<=1600&&p.y>=0&&p.y<=1000),
      label+": route leaves drawing canvas");
    for(const other of people) {
      if(other.id===rel.from||other.id===rel.to)continue;
      const r={x:positions[other.id].x,y:positions[other.id].y,w:180,h:240};
      for(let i=1;i<result.points.length;i++)
        assert.ok(!graph.hitsRect(result.points[i-1],result.points[i],r),
          label+": route cuts through portrait "+other.id);
    }
  }
}

audit("Wszyscy",data.people,positionMap(data.people,true));
for(const category of ["heroes","npc","deceased","rulers","captives"]) {
  const people=data.people.filter(p=>groups.matches(data,p,{
    primary:category,dimension:null,value:null,search:""
  }));
  audit(category,people,positionMap(people));
}
for(const settlement of ["hrafnvik","skjorvik"]) {
  const people=data.people.filter(p=>groups.matches(data,p,{
    primary:"all",dimension:"settlements",value:settlement,search:""
  }));
  audit("Osada "+settlement,people,positionMap(people));
}
// Pułapka: druga postać pomiędzy krewnymi w tym samym rzędzie.
const obstructed={a:{x:50,y:25},b:{x:490,y:25},c:{x:270,y:25}};
const route=graph.link("a","b",obstructed,new Set(["a","b","c"]));
assert.ok(route && route.isClear && route.points.length>=4,
  "Link must go around a character blocking the direct route");
for(let i=1;i<route.points.length;i++)assert.ok(
  !graph.hitsRect(route.points[i-1],route.points[i],{x:270,y:25,w:180,h:240}),
  "Route must not cross the middle character"
);

const html=fs.readFileSync("index.html","utf8");
const css=fs.readFileSync("styles.css","utf8");
const app=fs.readFileSync("app.js","utf8");
assert.ok(html.includes('<script src="graph-geometry.js?v=canon-route-v2" defer></script>'),
  "Load geometry before app.js");
assert.ok(html.includes('viewBox="0 0 1600 1000"')&&
  html.includes('class="connections" width="1600" height="1000"'),
  "SVG must use exactly the same 1600x1000 coordinate system");
assert.ok(!css.includes('.map-scene{width:1130px;height:870px}'),
  "Legacy CSS 1130x870 distorts all SVG connections");
assert.ok(css.includes('.map-scene{width:1600px;height:1000px}'),
  "Graph and cards need the same 1600x1000 scene");
assert.ok(css.includes('.map-viewport:before{display:none}'),
  "Misleading border inside clipped viewport should be removed");
assert.ok(app.includes("graph.link(rel.from, rel.to, state.positions, state.visibleIds)"),
  "DOM lines must derive endpoints from shared geometry");
assert.ok(app.includes("svg.replaceChildren()")&&app.includes('path.setAttribute("d", route.path)'),
  "Must render updated SVG paths on drag/filter");
console.log("PASS — graph links reach card edges, avoid third-party portraits and use one canvas size");
