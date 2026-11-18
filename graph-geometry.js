/* Geometria publicznej Sieci postaci. Jeden układ współrzędnych dla kart i SVG.
   Funkcje czyste: nie czytają DOM ani nie zmieniają danych kampanii. */
(() => {
  "use strict";
  const CANVAS = Object.freeze({ width: 1600, height: 1000 });
  const CARD = Object.freeze({ width: 180, height: 240 });

  function rect(pos) {
    return { x: pos.x, y: pos.y, w: CARD.width, h: CARD.height };
  }
  function center(r) {
    return { x: r.x + r.w / 2, y: r.y + r.h / 2 };
  }
  function edge(r, side) {
    const c = center(r);
    if (side === "left") return { x: r.x, y: c.y };
    if (side === "right") return { x: r.x + r.w, y: c.y };
    if (side === "top") return { x: c.x, y: r.y };
    return { x: c.x, y: r.y + r.h };
  }
  function length(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
  function rayAnchor(r, target) {
    const c = center(r);
    const dx = target.x - c.x, dy = target.y - c.y;
    if (Math.abs(dx) + Math.abs(dy) < 1e-7) return edge(r, "right");
    const tx = Math.abs(dx) < 1e-7 ? Infinity : (r.w / 2) / Math.abs(dx);
    const ty = Math.abs(dy) < 1e-7 ? Infinity : (r.h / 2) / Math.abs(dy);
    const t = Math.min(tx, ty);
    return { x: c.x + dx * t, y: c.y + dy * t };
  }
  // Liang–Barsky: sprawdza, czy odcinek wchodzi we wnętrze prostokąta.
  function hitsRect(a, b, r) {
    const inset = 2; // dotknięcie ramki nie jest kolizją
    const x0 = r.x + inset, x1 = r.x + r.w - inset;
    const y0 = r.y + inset, y1 = r.y + r.h - inset;
    const dx = b.x - a.x, dy = b.y - a.y;
    const p = [-dx, dx, -dy, dy];
    const q = [a.x - x0, x1 - a.x, a.y - y0, y1 - a.y];
    let t0 = 0, t1 = 1;
    for (let i = 0; i < 4; i++) {
      if (Math.abs(p[i]) < 1e-9) {
        if (q[i] < 0) return false;
      } else {
        const t = q[i] / p[i];
        if (p[i] < 0) t0 = Math.max(t0, t);
        else t1 = Math.min(t1, t);
        if (t0 > t1) return false;
      }
    }
    return t0 < 1 && t1 > 0 && t0 < t1;
  }
  function gutterTracks(rects, axis, limit) {
    const start = axis === "x" ? "x" : "y";
    const size = axis === "x" ? "w" : "h";
    const values = [0, limit, ...rects.flatMap(r => [r[start], r[start] + r[size]])]
      .filter(Number.isFinite).sort((a, b) => a - b);
    const tracks = [];
    for (let i = 1; i < values.length; i++) {
      const gap = values[i] - values[i - 1];
      if (gap >= 18) {
        const v = (values[i] + values[i - 1]) / 2;
        if (v >= 9 && v <= limit - 9) tracks.push(v);
      }
    }
    return [...new Set(tracks)];
  }
  function validTrack(r, side, v) {
    if (side === "left") return v <= r.x - 8;
    if (side === "right") return v >= r.x + r.w + 8;
    if (side === "top") return v <= r.y - 8;
    return v >= r.y + r.h + 8;
  }
  function score(points, otherRects, aRect, bRect) {
    let cost = (points.length - 2) * 30;
    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1], b = points[i];
      cost += length(a, b);
      if (otherRects.some(r => hitsRect(a, b, r))) cost += 1000000;
      if (hitsRect(a, b, aRect) || hitsRect(a, b, bRect)) cost += 1000000;
    }
    return cost;
  }
  function roundedPath(points, radius = 11) {
    const p = v => Number(v.toFixed(2));
    let d = "M " + p(points[0].x) + " " + p(points[0].y);
    for (let i = 1; i < points.length - 1; i++) {
      const prev = points[i - 1], c = points[i], next = points[i + 1];
      const a = length(prev, c), b = length(c, next);
      if (a < 1e-5 || b < 1e-5) continue;
      const r = Math.min(radius, a / 2, b / 2);
      const before = { x: c.x + (prev.x - c.x) * r / a,
        y: c.y + (prev.y - c.y) * r / a };
      const after = { x: c.x + (next.x - c.x) * r / b,
        y: c.y + (next.y - c.y) * r / b };
      d += " L " + p(before.x) + " " + p(before.y);
      d += " Q " + p(c.x) + " " + p(c.y) + " " + p(after.x) + " " + p(after.y);
    }
    const last = points[points.length - 1];
    return d + " L " + p(last.x) + " " + p(last.y);
  }
  function link(fromId, toId, positions, visibleIds) {
    if (!positions[fromId] || !positions[toId]) return null;
    const ar = rect(positions[fromId]), br = rect(positions[toId]);
    const others = [...visibleIds].filter(id => id !== fromId && id !== toId && positions[id])
      .map(id => rect(positions[id]));
    const allRects = [ar, br, ...others];
    const ac = center(ar), bc = center(br);
    let best = null;
    function candidate(points) {
      // Odcinek zerowej długości nie jest prawdziwą relacją na mapie.
      if (points.some((p, i) => i && length(p, points[i - 1]) < 1e-5)) return;
      if (points.some(p => !Number.isFinite(p.x) || !Number.isFinite(p.y))) return;
      const n = score(points, others, ar, br);
      if (!best || n < best.score) best = { score: n, points };
    }
    // Bez przeszkód: krótki odcinek od ramki do ramki, nie od środka portretu.
    candidate([rayAnchor(ar, bc), rayAnchor(br, ac)]);
    // Omijanie kart przez wolne korytarze pionowe pomiędzy kolumnami.
    for (const x of gutterTracks(allRects, "x", CANVAS.width)) {
      for (const aSide of ["left", "right"]) for (const bSide of ["left", "right"]) {
        if (!validTrack(ar, aSide, x) || !validTrack(br, bSide, x)) continue;
        const a = edge(ar, aSide), b = edge(br, bSide);
        candidate([a, { x, y: a.y }, { x, y: b.y }, b]);
      }
    }
    // Korytarze poziome pomiędzy rzędami; np. Hroald → Halvard omija Sianitę.
    for (const y of gutterTracks(allRects, "y", CANVAS.height)) {
      for (const aSide of ["top", "bottom"]) for (const bSide of ["top", "bottom"]) {
        if (!validTrack(ar, aSide, y) || !validTrack(br, bSide, y)) continue;
        const a = edge(ar, aSide), b = edge(br, bSide);
        candidate([a, { x: a.x, y }, { x: b.x, y }, b]);
      }
    }
    if (!best) return null;
    return {
      path: roundedPath(best.points),
      points: best.points,
      from: best.points[0],
      to: best.points[best.points.length - 1],
      isClear: best.score < 1000000
    };
  }

  window.SOM_GRAPH_GEOMETRY = { CANVAS, CARD, link, hitsRect };
})();