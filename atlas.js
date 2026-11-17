/* Sagas of Midgard — publiczny Atlas.
   Tylko miejsca zatwierdzone jako poznane. Nie ma tu danych Skalda. */
(() => {
  "use strict";
  const $ = sel => document.querySelector(sel);
  const el = (tag, css, text) => {
    const node = document.createElement(tag);
    if (css) node.className = css;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const safeImage = src => {
    if (typeof src !== "string" || !/^assets\/(locations|portraits)\/[^<>"'?#\\]+\.(svg|png|jpe?g|webp|avif)$/i.test(src)) return "";
    return src.split("/").map(encodeURIComponent).join("/");
  };
  let content = null, callbacks = {}, current = "midgard", opener = null, lastPlace = "";
  const places = () => content ? content.places.filter(p => p.visibility === "known") : [];
  const regions = () => content ? (content.atlasRegions || []).filter(p => p.visibility === "known") : [];
  const getPlace = id => places().find(p => p.id === id);
  const getRegion = id => regions().find(r => r.id === id);

  function art(node, image, fallback) {
    node.replaceChildren();
    const imagePath = safeImage(image);
    if (!imagePath) {
      node.appendChild(el("span", "atlas2-art-fallback", fallback || "Ilustracja w przygotowaniu"));
      return;
    }
    const photo = el("img", "atlas2-image");
    photo.alt = "";
    photo.loading = "eager";
    photo.decoding = "async";
    photo.onerror = () => {
      photo.remove();
      node.appendChild(el("span", "atlas2-art-fallback", fallback || "Ilustracja w przygotowaniu"));
    };
    photo.src = imagePath;
    node.appendChild(photo);
  }

  function cardRegion(region) {
    const box = el("article", "atlas2-region");
    box.dataset.regionId = region.id;
    if (region.id === "osady-bohaterow") box.classList.add("atlas2-region--home");
    if (region.id === "eylenda") box.classList.add("atlas2-region--independent");
    const top = el("button", "atlas2-region-heading");
    top.type = "button";
    top.appendChild(el("span", "atlas2-region-icon", region.id === "eylenda" ? "ᚢ" : "ᛟ"));
    const names = el("span", "atlas2-region-names");
    names.appendChild(el("span", "atlas2-small-label", region.kind || "Kraina"));
    names.appendChild(el("strong", "", region.name));
    top.appendChild(names);
    top.appendChild(el("span", "atlas2-chevron", "›"));
    top.addEventListener("click", () => showRegion(region.id));
    box.appendChild(top);
    if (region.description) box.appendChild(el("p", "atlas2-region-summary", region.description));
    const children = regions().filter(r => r.parentId === region.id);
    if (children.length) {
      const inline = el("div", "atlas2-children");
      for (const [i, child] of children.entries()) {
        if (i) inline.appendChild(el("span", "atlas2-comma", ", "));
        const item = el("button", "atlas2-inline-link", child.name);
        item.type = "button"; item.addEventListener("click", () => showRegion(child.id));
        inline.appendChild(item);
      }
      box.appendChild(inline);
    }
    const locations = places().filter(p => p.parentRegionId === region.id && p.id !== region.id);
    if (locations.length) {
      const inline = el("div", "atlas2-children");
      for (const [i, place] of locations.entries()) {
        if (i) inline.appendChild(el("span", "atlas2-comma", ", "));
        const item = el("button", "atlas2-inline-link", place.name);
        item.type = "button"; item.addEventListener("click", e => open(place.id, e.currentTarget));
        inline.appendChild(item);
      }
      box.appendChild(inline);
    }
    if (!children.length && !locations.length && region.kind === "Królestwo Drengrów") {
      box.appendChild(el("p", "atlas2-region-undiscovered", "Znane lokacje pojawią się wraz z odkryciami drużyny."));
    }
    if (region.id === "eylenda" && getPlace("eylenda")) {
      const about = el("button", "atlas2-about-region", "Poznaj Eylendę");
      about.type = "button"; about.addEventListener("click", e => open("eylenda", e.currentTarget));
      box.appendChild(about);
    }
    return box;
  }

  function unassignedCard() {
    const loose = places().filter(p => !p.parentRegionId && p.id !== "eylenda");
    if (!loose.length) return null;
    const box = el("article", "atlas2-region atlas2-unassigned");
    box.appendChild(el("div", "atlas2-small-label", "OSADY O NIEUSTALONYM POŁOŻENIU"));
    box.appendChild(el("h3", "", "Pozostałe znane miejsca"));
    box.appendChild(el("p", "atlas2-region-summary", "Bohaterowie znają te miejsca, ale ich przynależność do krainy nie została jeszcze potwierdzona w kronice."));
    const links = el("div", "atlas2-children");
    loose.forEach((p,i)=>{
      if(i) links.appendChild(el("span", "atlas2-comma", ", "));
      const btn=el("button", "atlas2-inline-link", p.name);
      btn.type="button"; btn.addEventListener("click", e=>open(p.id,e.currentTarget));
      links.appendChild(btn);
    });
    box.appendChild(links);
    return box;
  }

  function breadcrumb() {
    const nav = $("#atlas2-breadcrumb");
    if (!nav) return;
    nav.replaceChildren();
    const parents = [], visited = new Set();
    let r = getRegion(current) || getRegion("midgard");
    while (r && !visited.has(r.id)) {
      visited.add(r.id); parents.unshift(r);
      r = getRegion(r.parentId);
    }
    parents.forEach((region,i)=>{
      if (i) nav.appendChild(el("span", "atlas2-separator", "/"));
      const b = el("button", i === parents.length - 1 ? "atlas2-current" : "atlas2-crumb", region.name);
      b.type = "button"; b.disabled = i === parents.length - 1;
      b.addEventListener("click",()=>showRegion(region.id));
      nav.appendChild(b);
    });
  }

  function showRegion(id) {
    if (!getRegion(id)) id = "midgard";
    current = id;
    breadcrumb();
    const region = getRegion(id);
    const title = $("#atlas2-region-title");
    const caption = $("#atlas2-region-desc");
    title.textContent = region.name;
    caption.textContent = region.description || "Miejsca poznane przez bohaterów.";
    const cards = $("#atlas2-region-grid");
    cards.replaceChildren();
    const direct = regions().filter(r=>r.parentId === id);
    direct.forEach(r=>cards.appendChild(cardRegion(r)));
    if (id === "midgard") {
      const loose = unassignedCard();
      if (loose) cards.appendChild(loose);
    }
    if (id === "eylenda") {
      const p = getPlace("eylenda");
      if (p) {
        const top = el("div", "atlas2-hero-place");
        art(top, p.image, "");
        const openBtn = el("button", "atlas2-region-read", "Otwórz kartę Eylendy");
        openBtn.type = "button";
        openBtn.addEventListener("click", e => open("eylenda",e.currentTarget));
        top.appendChild(openBtn);
        cards.appendChild(top);
      }
    }
    // Każde królestwo i każda grupa osad używa tej samej listy lokacji.
    // Miasta, świątynie i inne miejsca to sąsiednie linki rozdzielone przecinkami.
    const directPlaces = places().filter(p => p.parentRegionId === id && !getRegion(p.id));
    if (directPlaces.length) {
      const block = el("div", "atlas2-location-collection");
      block.appendChild(el("h3", "", id === "osady-bohaterow" ? "Osady znane bohaterom" : "Znane lokacje"));
      const names = el("div", "atlas2-commalist");
      directPlaces.forEach((p,i)=>{
        if (i) names.appendChild(el("span", "atlas2-comma", ", "));
        const btn = el("button", "atlas2-inline-link", p.name);
        btn.type = "button";btn.addEventListener("click", e=>open(p.id,e.currentTarget));
        names.appendChild(btn);
      });
      block.appendChild(names);cards.appendChild(block);
    }
    if (id === "osady-bohaterow") {
      cards.appendChild(el("p", "atlas2-community-note", "Hrafnvik to główna osada znana z kroniki drużyny. Jej przynależność do konkretnego królestwa nie została jeszcze potwierdzona."));
    }
    if (!cards.children.length) {
      cards.appendChild(el("p", "atlas2-empty", "Na razie nie zapisano tutaj żadnych odkrytych miejsc."));
    }
  }

  function namesFor(place) {
    if (place.parentRegionId) {
      const chain = [place.name], ids=new Set();
      let r = getRegion(place.parentRegionId);
      while(r && !ids.has(r.id)){
        ids.add(r.id); chain.unshift(r.name);r=getRegion(r.parentId);
      }
      // Hierarchia geograficzna może być głębsza niż płaska nawigacja:
      // np. świątynia w mieście, ale obie lokacje są linkami tej samej krainy.
      if (place.withinSiteId) {
        const inside = getPlace(place.withinSiteId);
        if (inside && inside.id !== place.id) chain.splice(chain.length - 1, 0, inside.name);
      }
      return chain.join(" / ");
    }
    return "Midgard / " + place.name;
  }

  function open(id, trigger) {
    const place = getPlace(id);
    if (!place) return;
    lastPlace = id;
    opener = trigger || document.activeElement;
    const modal = $("#place-dialog");
    const visual = $("#atlas2-dialog-art");
    art(visual,place.image, "Ilustracja lokacji będzie dodana później");
    $("#atlas2-dialog-breadcrumb").textContent = namesFor(place);
    $("#atlas2-dialog-title").textContent = place.name;
    $("#atlas2-dialog-kind").textContent = (place.kind || "Lokacja").toLocaleUpperCase("pl");
    $("#atlas2-dialog-summary").textContent = place.description || "Miejsce znane bohaterom.";
    $("#atlas2-dialog-history").textContent = place.history || "Dalsze dzieje tego miejsca zostaną dopisane wraz z kolejnymi sesjami.";
    const personArea = $("#atlas2-dialog-people");
    personArea.replaceChildren();
    const linked = (place.personIds || []).map(key=>content.people.find(p=>p.id===key)).filter(Boolean);
    if (!linked.length) {
      personArea.appendChild(el("p", "atlas2-empty-people", "Powiązane postacie zostaną dopisane po potwierdzeniu ich historii."));
    } else {
      linked.forEach(p=>{
        const button=el("button", "atlas2-npc-card");
        button.type="button";
        const thumb = el("span","atlas2-npc-thumb");
        art(thumb,p.image,p.name.slice(0,1));
        button.appendChild(thumb);button.appendChild(el("span","",p.name));
        button.addEventListener("click",()=>{
          close();
          if (callbacks.openPerson) callbacks.openPerson(p.id);
        });
        personArea.appendChild(button);
      });
    }
    const events = $("#atlas2-dialog-events");
    events.replaceChildren();
    const related = (content.chronicle || []).filter(event=>{
      if(event.placeId===place.id)return true;
      if(place.id==="eylenda")return event.placeId==="althing";
      return false;
    });
    if(!related.length) events.appendChild(el("p","atlas2-empty-people","Nie zapisano jeszcze wydarzeń związanych z tym miejscem."));
    else related.forEach(event=>{
      const button=el("button","atlas2-event-link",event.title);
      button.type="button";
      button.addEventListener("click",()=>{
        close();
        if(callbacks.openChronicle) callbacks.openChronicle(event.id);
      });
      events.appendChild(button);
    });
    modal.hidden = false;
    modal.setAttribute("aria-hidden","false");
    document.body.classList.add("atlas2-modal-open");
    $("#atlas2-dialog-close").focus();
  }
  function close() {
    const modal=$("#place-dialog");
    if(modal.hidden)return;
    modal.hidden=true;
    modal.setAttribute("aria-hidden","true");
    document.body.classList.remove("atlas2-modal-open");
    if (opener?.isConnected) opener.focus({preventScroll:true});
  }
  function mount(options) {
    content=options.data;
    callbacks={openPerson:options.openPerson,openChronicle:options.openChronicle};
    $("#atlas2-dialog-close").addEventListener("click",close);
    $("#place-dialog").addEventListener("click",event=>{
      if(event.target===$("#place-dialog")) close();
    });
    document.addEventListener("keydown",event=>{
      if($("#place-dialog").hidden)return;
      if(event.key==="Escape"){event.preventDefault();close();return;}
      if(event.key==="Tab"){
        const buttons=[...$("#place-dialog").querySelectorAll("button:not([disabled])")].filter(x=>x.offsetParent!==null);
        if(!buttons.length)return;
        const idx=buttons.indexOf(document.activeElement);
        if(event.shiftKey && idx<=0){event.preventDefault();buttons[buttons.length-1].focus();}
        else if(!event.shiftKey && idx===buttons.length-1){event.preventDefault();buttons[0].focus();}
      }
    });
    // Kampania koncentruje się w Ziemiach Drengrów — pokazujemy od razu sześć klocków.
    showRegion("drengrlands");
  }
  window.SOM_ATLAS = {mount,open,showRegion};
})();