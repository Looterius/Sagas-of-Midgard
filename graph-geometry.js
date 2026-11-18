/* Wspólna geometria kart i relacji 1600×1000.
   Router od ramki do ramki omija inne portrety korytarzami między kartami.
   Działa również dla gęstych czterech rzędów i po przesuwaniu postaci. */
(() => {
  "use strict";
  const CANVAS=Object.freeze({width:1600,height:1000});
  const CARD=Object.freeze({width:180,height:240});
  const rect=pos=>({x:pos.x,y:pos.y,w:CARD.width,h:CARD.height});
  const center=r=>({x:r.x+r.w/2,y:r.y+r.h/2});
  const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  function edge(r,side){
    const c=center(r);
    if(side==="left")return{x:r.x,y:c.y};
    if(side==="right")return{x:r.x+r.w,y:c.y};
    if(side==="top")return{x:c.x,y:r.y};
    return{x:c.x,y:r.y+r.h};
  }
  function rayAnchor(r,target){
    const c=center(r),dx=target.x-c.x,dy=target.y-c.y;
    if(Math.abs(dx)+Math.abs(dy)<1e-7)return edge(r,"right");
    const tx=Math.abs(dx)<1e-7?Infinity:r.w/2/Math.abs(dx);
    const ty=Math.abs(dy)<1e-7?Infinity:r.h/2/Math.abs(dy);
    const t=Math.min(tx,ty);
    return{x:c.x+dx*t,y:c.y+dy*t};
  }
  // Segment/prostokąt (z niedużym marginesem na dotykanie ramki).
  function hitsRect(a,b,r){
    const inset=2,x0=r.x+inset,x1=r.x+r.w-inset;
    const y0=r.y+inset,y1=r.y+r.h-inset;
    const dx=b.x-a.x,dy=b.y-a.y;
    const p=[-dx,dx,-dy,dy],q=[a.x-x0,x1-a.x,a.y-y0,y1-a.y];
    let t0=0,t1=1;
    for(let i=0;i<4;i++){
      if(Math.abs(p[i])<1e-9){if(q[i]<0)return false;}
      else{
        const t=q[i]/p[i];
        if(p[i]<0)t0=Math.max(t0,t);
        else t1=Math.min(t1,t);
        if(t0>t1)return false;
      }
    }
    return t0<1&&t1>0&&t0<t1;
  }
  const enlarged=r=>({x:r.x-3,y:r.y-3,w:r.w+6,h:r.h+6});

  function roundedPath(points,radius=10){
    const p=v=>Number(v.toFixed(2));
    let d="M "+p(points[0].x)+" "+p(points[0].y);
    for(let i=1;i<points.length-1;i++){
      const prev=points[i-1],c=points[i],next=points[i+1];
      const a=distance(prev,c),b=distance(c,next);
      if(a<1e-7||b<1e-7)continue;
      const k=Math.min(radius,a/2,b/2);
      const before={x:c.x+(prev.x-c.x)*k/a,y:c.y+(prev.y-c.y)*k/a};
      const after={x:c.x+(next.x-c.x)*k/b,y:c.y+(next.y-c.y)*k/b};
      d+=" L "+p(before.x)+" "+p(before.y);
      d+=" Q "+p(c.x)+" "+p(c.y)+" "+p(after.x)+" "+p(after.y);
    }
    const last=points[points.length-1];
    return d+" L "+p(last.x)+" "+p(last.y);
  }

  // Widoczność pośrodku przerw: również 5-pikselowych między rzędami.
  // Dodajemy środki kart tylko po to, aby można było podłączyć punkt ramki
  // bez zniekształconej linii; punkty wewnątrz innych kart są nieosiągalne.
  function axis(rects,coord,size,limit,anchors){
    const boundaries=rects.flatMap(r=>[r[coord],r[coord]+r[size]])
      .filter(Number.isFinite).sort((a,b)=>a-b);
    const v=[...anchors.map(p=>p[coord])];
    for(const r of rects)v.push(r[coord]+r[size]/2);
    if(boundaries.length){
      const first=boundaries[0],last=boundaries[boundaries.length-1];
      if(first>=4)v.push(first/2);
      if(limit-last>=4)v.push((limit+last)/2);
      const distinct=[...new Set(boundaries)];
      for(let i=1;i<distinct.length;i++){
        if(distinct[i]-distinct[i-1]>=4)
          v.push((distinct[i]+distinct[i-1])/2);
      }
    }
    return [...new Set(v.map(x=>Number(x.toFixed(4))))]
      .filter(x=>x>=0&&x<=limit).sort((a,b)=>a-b);
  }

  function simplify(points){
    const unique=[];
    for(const p of points){
      if(!unique.length||distance(p,unique[unique.length-1])>1e-6)unique.push(p);
    }
    for(let i=1;i<unique.length-1;){
      const a=unique[i-1],b=unique[i],c=unique[i+1];
      if((Math.abs(a.x-b.x)<1e-6&&Math.abs(b.x-c.x)<1e-6)||
         (Math.abs(a.y-b.y)<1e-6&&Math.abs(b.y-c.y)<1e-6))
        unique.splice(i,1);
      else i++;
    }
    return unique;
  }
  class MinHeap {
    constructor(){this.h=[];}
    push(item){
      let i=this.h.length;this.h.push(item);
      while(i>0){
        const parent=(i-1)>>1;
        if(this.h[parent].cost<=item.cost)break;
        this.h[i]=this.h[parent];i=parent;
      }
      this.h[i]=item;
    }
    pop(){
      const h=this.h,top=h[0],last=h.pop();
      if(!h.length)return top;
      let i=0;
      while(i*2+1<h.length){
        let child=i*2+1;
        if(child+1<h.length&&h[child+1].cost<h[child].cost)child++;
        if(last.cost<=h[child].cost)break;
        h[i]=h[child];i=child;
      }
      h[i]=last;
      return top;
    }
    get size(){return this.h.length;}
  }

  function routeAround(ar,br,others){
    const sourceSides=["left","right","top","bottom"];
    const starts=sourceSides.map(side=>edge(ar,side));
    const ends=sourceSides.map(side=>edge(br,side));
    const all=[ar,br,...others],anchors=[...starts,...ends];
    const xs=axis(all,"x","w",CANVAS.width,anchors);
    const ys=axis(all,"y","h",CANVAS.height,anchors);
    if(xs.length*ys.length>4500)return null;
    const W=xs.length,H=ys.length;
    const toId=(ix,iy)=>iy*W+ix;
    const point=id=>({x:xs[id%W],y:ys[Math.floor(id/W)]});
    const index=p=>{
      const ix=xs.indexOf(Number(p.x.toFixed(4))),iy=ys.indexOf(Number(p.y.toFixed(4)));
      return ix>=0&&iy>=0?toId(ix,iy):-1;
    };
    const blocked=(a,b)=>{
      if(hitsRect(a,b,ar)||hitsRect(a,b,br))return true;
      for(const r of others)if(hitsRect(a,b,enlarged(r)))return true;
      return false;
    };
    const goals=new Set(ends.map(index).filter(n=>n>=0));
    const dist=new Float64Array(W*H*3);dist.fill(Infinity);
    const prior=new Int32Array(W*H*3);prior.fill(-1);
    const heap=new MinHeap();
    for(const p of starts){
      const id=index(p);if(id<0)continue;
      const key=id*3;
      if(dist[key]>0){dist[key]=0;heap.push({key,cost:0});}
    }
    let last=-1;
    while(heap.size){
      const {key,cost}=heap.pop();
      if(cost!==dist[key])continue;
      const id=Math.floor(key/3),dir=key%3;
      if(goals.has(id)){last=key;break;}
      const ix=id%W,iy=Math.floor(id/W);
      for(const [nx,ny,orient] of [
        [ix-1,iy,1],[ix+1,iy,1],[ix,iy-1,2],[ix,iy+1,2]
      ]){
        if(nx<0||nx>=W||ny<0||ny>=H)continue;
        const to=toId(nx,ny),a=point(id),b=point(to);
        if(blocked(a,b))continue;
        const next=to*3+orient;
        const newCost=cost+distance(a,b)+(dir&&dir!==orient?16:0);
        if(newCost<dist[next]-1e-6){
          dist[next]=newCost;prior[next]=key;heap.push({key:next,cost:newCost});
        }
      }
    }
    if(last<0)return null;
    const backwards=[];
    while(last>=0){
      backwards.push(point(Math.floor(last/3)));
      last=prior[last];
    }
    const points=simplify(backwards.reverse());
    if(points.length<2)return null;
    return points;
  }

  function link(fromId,toId,positions,visibleIds){
    if(!positions[fromId]||!positions[toId])return null;
    const ar=rect(positions[fromId]),br=rect(positions[toId]);
    const others=[...visibleIds].filter(id=>id!==fromId&&id!==toId&&positions[id])
      .map(id=>rect(positions[id]));
    const ac=center(ar),bc=center(br);
    const a=rayAnchor(ar,bc),b=rayAnchor(br,ac);
    const intersects=(p,q)=>
      hitsRect(p,q,ar)||hitsRect(p,q,br)||
      others.some(r=>hitsRect(p,q,enlarged(r)));
    let points;
    if(!intersects(a,b))points=[a,b];
    else points=routeAround(ar,br,others);
    const clear=!!points;
    if(!points)points=[a,b]; // podczas fizycznego nałożenia kart przez MG połączenie nadal jest widoczne
    return {
      path:roundedPath(points),
      points,
      from:points[0],
      to:points[points.length-1],
      isClear:clear
    };
  }
  window.SOM_GRAPH_GEOMETRY={CANVAS,CARD,link,hitsRect};
})();