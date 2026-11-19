/* Publiczny słownik 24 znaków. Zawiera tylko znaczenia i bezpieczne, jawne dane.
   Symboliczne interpretacje nie zastępują 3 efektów mechanicznych run w podręczniku. */
(() => {
"use strict";
const rows=[["fehu","ᚠ","Fehu","Bydło, bogactwo","Majątek, zasoby i dzielenie się nimi.","pieniądze złoto skarb dostatek dobrobyt handel bogactwo"],["uruz","ᚢ","Uruz","Tur, dziki wół","Siła i wytrzymałość.","siła moc zdrowie witalność wytrzymałość dziki wół"],["thurisaz","ᚦ","Thurisaz","Olbrzym, cierń","Zagrożenie, kolce i granice.","olbrzym cierń kolce niebezpieczeństwo obrona atak"],["ansuz","ᚨ","Ansuz","Bóg z rodu Asów","Słowo, rada i wiedza.","odin asowie mądrość mowa inspiracja bóg rada porada"],["raido","ᚱ","Raido","Jazda, droga","Podróż, wędrówka i kierunek.","droga podróż żegluga wędrówka wyprawa jazda nawigacja"],["kaunan","ᚲ","Kaunan","Owrzodzenie lub pochodnia — sporne","Ogień i światło to częsta interpretacja, ale nazwa ma sporne pochodzenie.","kenaz ogień płomień światło pochodnia choroba oparzenie"],["gebo","ᚷ","Gebo","Dar","Podarunek i wzajemność.","dar prezent podarunek hojność wymiana sojusz"],["wunjo","ᚹ","Wunjo","Radość","Szczęście i pomyślność.","radość szczęście wesele harmonia pokój powodzenie"],["hagalaz","ᚺ","Hagalaz","Grad","Żywioł, przeszkoda i nagła zmiana.","grad burza chaos zniszczenie żywioł pogoda"],["naudiz","ᚾ","Naudiz","Potrzeba, przymus","Trudności i konieczność przetrwania.","nauthiz głód brak niedostatek konieczność wytrwałość przetrwanie"],["isaz","ᛁ","Isaz","Lód","Zimno i zatrzymanie.","isa lód mróz zamrożenie bezruch zatrzymać spowolnienie"],["jera","ᛃ","Jera","Rok, plon","Żniwa i owoce pracy.","żniwa plon urodzaj rolnictwo zbiór jedzenie rok"],["ihwaz","ᛇ","Ihwaz","Cis, drzewo","Trwałość i mocne korzenie jako interpretacja symboliczna.","eihwaz drzewo korzenie cis odporność wytrwałość"],["pertho","ᛈ","Pertho","Nieustalone","Los i tajemnica to późniejsze interpretacje.","perthro tajemnica los przypadek wróżba przeznaczenie kości"],["algiz","ᛉ","Algiz","Znaczenie nazwy niepewne","Współcześnie często wiązana z ochroną.","elhaz ochrona osłona obrona tarcza życie rany obrażenia bezpieczeństwo"],["sowilo","ᛊ","Sowilo","Słońce","Światło i jasność.","słońce dzień promienie zwycięstwo światło energia"],["tiwaz","ᛏ","Tiwaz","Tyr, imię boga","Odwaga i sprawiedliwość jako interpretacja symboliczna.","tyr prawo honor sprawiedliwość odwaga walka przysięga"],["berkanan","ᛒ","Berkanan","Brzoza","Wzrost i odnowa.","berkano brzoza roślina życie narodziny uzdrowienie"],["ehwaz","ᛖ","Ehwaz","Koń","Ruch i zaufanie.","koń jazda podróż szybkość ruch wierność zaufanie"],["mannaz","ᛗ","Mannaz","Człowiek","Wspólnota i współdziałanie.","człowiek ludzie współpraca społeczność przyjaciele"],["laguz","ᛚ","Laguz","Woda, jezioro","Przepływ i zmiana.","woda morze rzeka fale jezioro żegluga"],["ingwaz","ᛜ","Ingwaz","Ing, imię bóstwa","Związek z bogiem Ingiem; później także z płodnością.","ing freyr bóstwo płodność narodziny urodzaj"],["dagaz","ᛞ","Dagaz","Dzień","Świt i nowy początek.","dzień świt poranek nadzieja światło zmiana"],["othalan","ᛟ","Othalan","Dziedzictwo, ziemia przodków","Dom i dziedziczenie.","othala othila dom rodzina ziemia przodkowie dziedzictwo spadek"]];
const runes=rows.map(([id,glyph,name,meaning,association,aliases])=>({id,glyph,name,meaning,association,aliases}));
const $=s=>document.querySelector(s);
const grid=$("#runes-grid"),detail=$("#runes-detail"),field=$("#runes-search"),count=$("#runes-count"),clear=$("#runes-clear");
if(!grid||!detail||!field||!count||!clear)return;
const norm=x=>String(x||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ł/g,"l").replace(/þ/g,"th");
const stop=new Set("szukam szukasz chce chcialbym chciala potrzebuje potrzebuje cos jakis jakas jaka ktora ktory ktore runa rune runy runicznа runiczna na do od w z i o dla mi mnie by aby pod przed przy czy ze sie jest ktora jakie jak".split(" "));
const tokens=x=>norm(x).split(/[^a-z0-9ᚠ-ᛟ]+/u).filter(t=>t.length>1&&!stop.has(t));
const same=(a,b)=>a===b||b.startsWith(a)||(a.length>=5&&b.startsWith(a.slice(0,5)))||(b.length>=5&&a.startsWith(b.slice(0,5)));
function rank(r,ts){
 const names=norm(r.name+" "+r.id+" "+r.glyph).split(/\s+/);
 const words=norm(r.name+" "+r.id+" "+r.glyph+" "+r.meaning+" "+r.association+" "+r.aliases).split(/[^a-z0-9ᚠ-ᛟ]+/u);
 return ts.reduce((s,t)=>s+(names.some(w=>same(t,w))?8:words.some(w=>same(t,w))?2:0),0);
}
function el(tag,klass,value){const node=document.createElement(tag);node.className=klass;if(value!==undefined)node.textContent=value;return node;}
let selected=null;
function details(){
 detail.replaceChildren();
 const r=runes.find(x=>x.id===selected);
 if(!r){detail.appendChild(el("div","runes-empty-symbol","ᚠ"));detail.appendChild(el("h3","runes-empty-heading","Wybierz runę"));detail.appendChild(el("p","runes-empty-copy","Wybierz znak z galerii. Znaczenie wyświetli się tutaj bez otwierania dodatkowego okna."));return;}
 const top=el("div","runes-detail-top");top.appendChild(el("span","runes-detail-glyph",r.glyph));
 const side=el("div","runes-detail-heading");
 side.appendChild(el("span","runes-detail-label","ZNAK RUNICZNY · STARSZY FUTHARK"));
 const h=el("h3","runes-detail-name",r.name);h.tabIndex=-1;side.appendChild(h);
 side.appendChild(el("p","runes-detail-literal","Dosłownie: "+r.meaning));
 top.appendChild(side);detail.appendChild(top);
 detail.appendChild(el("h4","runes-detail-subheading","Znaczenie i skojarzenia"));
 detail.appendChild(el("p","runes-detail-copy",r.association));
 detail.appendChild(el("h4","runes-detail-subheading","Działanie w Sagas of Midgard"));
 if(r.id==="algiz"){
   detail.appendChild(el("p","runes-detail-copy","Twórcy opisali trzy zastosowania tej runy:"));
   const ul=el("ul","runes-positions");
   for(const line of ["I — osłania wybranych sojuszników przed obrażeniami; agresywne działanie może przerwać ochronę.","II — zwiększa odporność na otrzymywane obrażenia.","III — chroni wybranych sojuszników przed spadkiem liczby punktów życia poniżej 1."])ul.appendChild(el("li","",line));
   detail.appendChild(ul);
   const a=el("a","runes-reference","Przykład udostępniony przez twórców");a.href="https://gmshoe.wordpress.com/2018/02/07/qa-nick-porter-dominic-deduonni-sagas-of-midgard/";a.target="_blank";a.rel="noopener noreferrer";detail.appendChild(a);
   detail.appendChild(el("p","runes-source-note","Bez konkretnych wartości: publikowane warianty zasad różniły się czasem działania. Liczby trzeba sprawdzić w edycji podręcznika używanej przy stole."));
 }else{
   detail.appendChild(el("p","runes-detail-copy","W grze ta runa ma trzy różne efekty: pozycje I, II i III. Ich dokładnych bonusów, zasięgów i czasu trwania nie potwierdzono w udostępnionych zasadach. Nie zastępuj ich opisem symbolicznym."));
 }
 detail.appendChild(el("p","runes-source-note","Ten katalog objaśnia publiczne symbole. Nie pokazuje, jakie runy zdobyli bohaterowie kampanii."));
}
function paint(){
 const ts=tokens(field.value);
 const found=runes.map((r,i)=>({r,i,score:rank(r,ts)})).filter(x=>!ts.length||x.score>0).sort((a,b)=>ts.length?b.score-a.score||a.i-b.i:a.i-b.i);
 grid.replaceChildren();
 for(const {r} of found){
  const button=el("button","runes-tile");button.type="button";button.dataset.rune=r.id;
  button.setAttribute("aria-pressed",String(selected===r.id));button.setAttribute("aria-label",r.name+" — "+r.meaning);
  button.appendChild(el("span","runes-glyph",r.glyph));
  button.appendChild(el("span","runes-tile-name",r.name));
  button.appendChild(el("span","runes-tile-meaning",r.meaning));
  button.addEventListener("click",()=>select(r.id));grid.appendChild(button);
 }
 if(!found.length)grid.appendChild(el("p","runes-no-results","Nie znaleziono runy. Spróbuj słów: ochrona, podróż, bogactwo, ogień, woda."));
 count.textContent=ts.length?found.length+" z 24 pasujących run":"24 runy · wybierz znak";
 clear.hidden=!field.value;
}
function select(id,options={}){
 const {notify=true,focus=true}=options;
 selected=runes.some(x=>x.id===id)?id:null;details();paint();
 if(notify)window.SOM_NAV?.changed();
 if(focus&&selected&&window.matchMedia?.("(max-width: 850px)")?.matches){
  detail.scrollIntoView({behavior:"smooth",block:"start"});
  detail.querySelector("h3")?.focus({preventScroll:true});
 }
}
field.addEventListener("input",paint);
clear.addEventListener("click",()=>{field.value="";paint();field.focus()});
details();paint();
window.SOM_RUNES={getSelected:()=>selected,select,search:q=>{field.value=q;paint();},all:()=>runes.map(x=>({id:x.id,glyph:x.glyph,name:x.name}))};
})();