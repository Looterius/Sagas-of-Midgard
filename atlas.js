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
    const entry = window.SOM_PORTRAITS?.[image];
    const isPersonThumb = node.classList.contains("atlas2-npc-thumb");
    if (entry?.missing) {
      node.appendChild(el("span", "atlas2-art-fallback", fallback || "Ilustracja w przygotowaniu"));
      return;
    }
    const first = safeImage(isPersonThumb ? entry?.thumb || image : entry?.full || image);
    const original = safeImage(image);
    if (!first) {
      node.appendChild(el("span", "atlas2-art-fallback", fallback || "Ilustracja w przygotowaniu"));
      return;
    }
    const sources = [...new Set([first, original].filter(Boolean))];
    const photo = el("img", "atlas2-image");
    photo.alt = "";
    photo.loading = node.id === "atlas2-dialog-art" ? "eager" : "lazy";
    photo.fetchPriority = node.id === "atlas2-dialog-art" ? "high" : "low";
    photo.decoding = "async";
    let attempt = 0;
    photo.onerror = () => {
      if (++attempt < sources.length) {
        photo.src = sources[attempt];
      } else {
        photo.remove();
        node.appendChild(el("span", "atlas2-art-fallback", fallback || "Ilustracja w przygotowaniu"));
      }
    };
    photo.src = sources[0];
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
    // Gdy Osada bohaterów ma tylko Hrafnvik, pomiń pusty ekran pośredni
    // i otwórz bezpośrednio istniejącą kartę tej lokacji.
    if (id === "osady-bohaterow") {
      const homePlaces = places().filter(p => p.parentRegionId === id);
      if (homePlaces.length === 1 && homePlaces[0].id === "hrafnvik") {
        open("hrafnvik");
        return;
      }
    }
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
    window.SOM_NAV?.changed();
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
    const mapLink = $("#atlas2-dialog-map");
    mapLink.hidden = typeof callbacks.openMap !== "function";
    mapLink.onclick = () => {
      close();
      callbacks.openMap?.(place.id);
    };
    $("#atlas2-dialog-history").textContent = place.history || "Dalsze dzieje tego miejsca zostaną dopisane wraz z kolejnymi sesjami.";
    const personArea = $("#atlas2-dialog-people");
    const peopleToggle = $("#atlas2-dialog-people-toggle");
    personArea.replaceChildren();
    peopleToggle.hidden = true;
    peopleToggle.onclick = null;
    peopleToggle.setAttribute("aria-expanded", "false");
    const linked = (place.personIds || []).map(key=>content.people.find(p=>p.id===key)).filter(Boolean);
    const initialCount = 6;
    if (!linked.length) {
      personArea.appendChild(el("p", "atlas2-empty-people", "Powiązane postacie zostaną dopisane po potwierdzeniu ich historii."));
    } else {
      const addPersonCard = p => {
        const button = el("button", "atlas2-npc-card");
        button.type = "button";
        if (p.grouping?.lifeStatus === "deceased") {
          button.classList.add("is-deceased");
          button.setAttribute("aria-label", p.name + " — postać zmarła");
        }
        const thumb = el("span", "atlas2-npc-thumb");
        art(thumb, p.image, p.name.slice(0, 1));
        button.appendChild(thumb);
        button.appendChild(el("span", "", p.name));
        if (p.grouping?.lifeStatus === "deceased")
          button.appendChild(el("span", "atlas2-npc-deceased", "† ZMARŁY"));
        button.addEventListener("click", () => {
          close();
          if (callbacks.openPerson) callbacks.openPerson(p.id);
        });
        personArea.appendChild(button);
      };
      linked.slice(0, initialCount).forEach(addPersonCard);
      if (linked.length > initialCount) {
        let expanded = false;
        peopleToggle.hidden = false;
        peopleToggle.textContent = `Pokaż wszystkie (${linked.length})`;
        peopleToggle.onclick = () => {
          if (expanded) {
            while (personArea.children.length > initialCount) personArea.lastElementChild.remove();
          } else {
            linked.slice(initialCount).forEach(addPersonCard);
          }
          expanded = !expanded;
          peopleToggle.textContent = expanded ? "Pokaż mniej" : `Pokaż wszystkie (${linked.length})`;
          peopleToggle.setAttribute("aria-expanded", String(expanded));
        };
      }
    }
    const events = $("#atlas2-dialog-events");
    events.replaceChildren();
    const related = (content.chronicle || []).filter(event=>{
      if(event.placeId===place.id)return true;
      if(place.id==="eylenda")return event.placeId==="ejkjavik";
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
    window.SOM_NAV?.changed();
  }
  function close() {
    const modal=$("#place-dialog");
    if(modal.hidden)return;
    modal.hidden=true;
    modal.setAttribute("aria-hidden","true");
    document.body.classList.remove("atlas2-modal-open");
    if (opener?.isConnected) opener.focus({preventScroll:true});
    window.SOM_NAV?.changed();
  }
  function getNavigationState() {
    return {
      region: current,
      place: $("#place-dialog").hidden ? null : lastPlace
    };
  }
  function requestClose() {
    if (window.SOM_NAV) window.SOM_NAV.closeLayer(close);
    else close();
  }
  function mount(options) {
    content=options.data;
    callbacks={openPerson:options.openPerson,openChronicle:options.openChronicle,openMap:options.openMap};
    $("#atlas2-dialog-close").addEventListener("click",requestClose);
    $("#place-dialog").addEventListener("click",event=>{
      if(event.target===$("#place-dialog")) requestClose();
    });
    document.addEventListener("keydown",event=>{
      if($("#place-dialog").hidden)return;
      if(event.key==="Escape"){event.preventDefault();requestClose();return;}
      if(event.key==="Tab"){
        const buttons=[...$("#place-dialog").querySelectorAll("button:not([disabled])")].filter(x=>x.offsetParent!==null);
        if(!buttons.length)return;
        const idx=buttons.indexOf(document.activeElement);
        if(event.shiftKey && idx<=0){event.preventDefault();buttons[buttons.length-1].focus();}
        else if(!event.shiftKey && idx===buttons.length-1){event.preventDefault();buttons[0].focus();}
      }
    });
    // Atlas zaczyna się od świata Midgard; do Ziem Drengrów przechodzi się przez kartę obszaru.
    showRegion("midgard");
  }
  window.SOM_ATLAS = {mount,open,showRegion,close,getNavigationState};
})();