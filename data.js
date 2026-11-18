// Dane PUBLICZNE — nigdy nie umieszczaj tu sekretów Skalda.
// image: np. "assets/hroald.webp" po dodaniu zdjęcia do repozytorium.
window.CHRONICLE = {
  title: "Sagas of Midgard",
  subtitle: "Kronika graczy • Eylenda",
  updated: "2026-11-18",
  people: [
    { id: "haki", name: "Haki Torfinnsson", kind: "Postać", image: "", x: 35, y: 25 },
    { id: "erik", name: "Erik Żelaznadłoń", kind: "Postać", image: "assets/portraits/Erik Zelaznadłoń.png", x: 255, y: 25 },
    { id: "ragnvald-p", name: "Ragnvald Prawomówca", kind: "Postać", image: "assets/portraits/Ragnvald Prawomówca.png", x: 475, y: 25 },
    { id: "styrbjorn", name: "Styrbjorn Ragnsson", kind: "Postać", image: "assets/portraits/Styrbjorn Ragnsson.png", x: 695, y: 25 },
    { id: "hroald", name: "Hroald", kind: "Postać", grouping: { role: "npc", titles: ["jarl"] }, image: "assets/portraits/Hroald.png", x: 915, y: 25 },
    { id: "ragnvald-s", name: "Ragnvald Skjoldsson", kind: "Postać", image: "", x: 145, y: 317 },
    { id: "aslak", name: "Aslak Cieśla", kind: "Postać", grouping: { role: "npc", statuses: ["captive"] }, image: "assets/portraits/Aslak Cieśla.png", x: 365, y: 317 },
    { id: "morotar", name: "Morotar Jednooki", kind: "Postać", image: "assets/portraits/Morotar Jednooki.png", x: 585, y: 317 },
    { id: "astrid", name: "Astrid Freyjadottir", kind: "Postać", image: "assets/portraits/Astrid Freyjadottir.png", x: 805, y: 317 },
    { id: "anslem", name: "Brat Anslem", kind: "Postać", grouping: { role: "npc" }, image: "assets/portraits/Brat Anslem.png", x: 145, y: 609 },
    { id: "svala", name: "Svala Ketilsdóttir i synowie", kind: "Rodzina", image: "assets/portraits/svala-ketilsdottir-i-synowie.jpg", x: 365, y: 609 },
    { id: "runa", name: "Runa Hroaldsdottir", kind: "Postać", grouping: { role: "npc" }, image: "assets/portraits/Runa Hroaldsdottir.png", x: 585, y: 609 },
    { id: "leif", name: "Leif Anundsson", kind: "Postać", image: "assets/portraits/Leif Anundsson.png", x: 805, y: 609 },
    // Pięcioro bohaterów graczy z Hrafnviku. Floki poległ; reszta żyje.
    // Bez portretów do czasu dostarczenia zatwierdzonych ilustracji.
    {
      id: "sianita", name: "Sianita Gunnarsdóttir", kind: "Bohater", image: "",
      grouping: { role: "hero", lifeStatus: "living", titles: ["ruler"], settlementIds: ["hrafnvik"] },
      description: "Jarlowa i tarczowniczka z Hrafnviku. Po śmierci Sigurda wzięła na siebie odpowiedzialność za osadę. Spory o władzę doprowadziły ją przed możnych Północy, a później na Eylendę, gdzie drużyna podjęła wyprawę po Gungnir, włócznię Odyna.",
      x: 1135, y: 25
    },
    {
      id: "halvard", name: "Halvard „Snake-Eye”", kind: "Bohater", image: "",
      grouping: { role: "hero", lifeStatus: "living", settlementIds: ["hrafnvik"] },
      description: "Wyznawca Lokiego, młodszy brat Sianity. Pochodzi z Hrafnviku i uczestniczył w losach drużyny, od sporów o władzę w osadzie po wydarzenia na Eylendzie.",
      x: 1355, y: 25
    },
    {
      id: "haroks", name: "Haroks Magnusson", kind: "Bohater", image: "",
      grouping: { role: "hero", lifeStatus: "living", settlementIds: ["hrafnvik"] },
      description: "Berserker z Hrafnviku, wojownik związany z niedźwiedzią naturą. Przetrwał wyprawę na Eylendę. Po śmierci Flokiego pochował towarzysza w niedokończonym statku w lesie Odyna.",
      x: 1135, y: 317
    },
    {
      id: "ylva", name: "Ylva", kind: "Bohater", image: "",
      grouping: { role: "hero", lifeStatus: "living", settlementIds: ["hrafnvik"] },
      description: "Łuczniczka z Hrafnviku i członkini drużyny. Jej droga wiodła od wydarzeń rodzinnej osady przez wyprawy wojowników Północy aż po Eylendę i Wielki Althing.",
      x: 1355, y: 317
    },
    {
      id: "floki", name: "Floki", kind: "Bohater", image: "",
      grouping: { role: "hero", lifeStatus: "deceased", settlementIds: ["hrafnvik"] },
      description: "Budowniczy statków i wizjoner z Hrafnviku, zafascynowany runami i opowieściami o Odynie. Wyruszył z drużyną po Gungnir na Eylendę. Poległ w walce z Haraldem Hardradą. Pozostaje jednym z bohaterów tej sagi.",
      x: 1135, y: 609
    }
  ],
  // Publiczne POWIĄZANIA FABULARNE można dodać dopiero po zatwierdzeniu przez Skalda.
  // Format: {from:"hroald",to:"runa",type:"rodzina",label:"..."}.
  relationships: [
    // Ujawniona więź rodzinna bohaterów.
    { from: "sianita", to: "halvard", type: "family", label: "Rodzeństwo" }
  ],
  // Uwaga: grouping jest opcjonalne. Niepotwierdzone klasyfikacje pozostają puste.
  // role: "hero" lub "npc"; lifeStatus: "deceased"; titles: ["jarl", "ruler"];
  // statuses: ["captive"]; kingdomIds, settlementIds, familyIds i factionIds to ID.
  // Katalog jawnych rodzin i frakcji zostanie uzupełniony po potwierdzeniu.
  characterGroupCatalog: { families: [], factions: [] },

  // Kronika PUBLICZNA: wyłącznie wydarzenia znane graczom. Nie wpisuj tu sekretów Skalda.
  chronicle: [
    {
      id: "upadek-jarla", chapter: "I", title: "Upadek starego jarla",
      placeId: "hrafnvik", kind: "Dzieje osady", image: "",
      intro: "W Hrafnviku stary porządek ustąpił miejsca nowemu, lecz spór o władzę nie zakończył się wraz ze zmianą jarla.",
      paragraphs: [
        "W Hrafnviku brat wystąpił przeciw bratu. Hroald utracił władzę i wzrok, a Sigurd zajął jego miejsce. Historia osady nabrała ciężaru, którego nie dało się już zrzucić z barków jednej rodziny.",
        "Nie minęło wiele czasu, gdy Sigurd został odnaleziony martwy. Jego śmierć otworzyła nowy rozdział sporów, przysiąg i pytań o to, komu przypadnie prawo przewodzenia ludziom Hrafnviku."
      ], participants: ["hroald"]
    },
    {
      id: "ogien-i-srebro", chapter: "II", title: "Ogień i srebro",
      placeId: "skjorvik", kind: "Najazd", image: "",
      intro: "Skjǫrvik zostało zdobyte. Zwycięzcy wrócili z łupami, a pamięć o ogniu przetrwała po obu stronach zatoki.",
      paragraphs: [
        "Wojownicy Hrafnviku ruszyli na Skjǫrvik. Osada uległa najeźdźcom, a po walce pozostały dym, rozbite domostwa i losy ludzi, których odtąd nazywano jeńcami.",
        "Do Hrafnviku przywieziono srebro, towary i pojmanych. Wśród nich znalazł się Aslak Cieśla. Jedni opowiadali o wielkiej zdobyczy, drudzy wspominali przede wszystkim o cenie, jaką przyszło za nią zapłacić."
      ], participants: ["aslak"]
    },
    {
      id: "glosy-althingu", chapter: "III", title: "Głosy Wielkiego Althingu",
      placeId: "ejkjavik", kind: "Zgromadzenie", image: "",
      intro: "Na Eylendzie głos zabrali jarlowie i królowie. Sprawy Północy przestały być sprawami pojedynczych osad.",
      paragraphs: [
        "Na Wielkim Althingu spotkali się ci, których słowa ważą tyle, co włócznie ich drużyn. Zgromadzenie mówiło o wyprawie ku Winlandowi, o wojnie z Frankami oraz o idei Króla Królów.",
        "Wielka polityka nie rodzi się wyłącznie na polu bitwy. Powstaje również między ławami zgromadzenia: w rozmowach, obietnicach i publicznych przysięgach. Kronika zapisuje poruszone sprawy, nie przesądzając o ich ostatecznych rozstrzygnięciach."
      ], participants: []
    }
  ],
  // Tylko ZNANE graczom regiony. Nigdy nie publikuj w tym pliku ukrytego katalogu Skalda.
  atlasRegions: [
    {id: "midgard", name: "Midgard", parentId: null, kind: "Świat", visibility: "known",
     description: "Świat ludzi, dom bohaterów naszej sagi. Atlas przedstawia tylko poznane przez nich miejsca."},
    {id: "drengrlands", name: "Ziemie Drengrów", parentId: "midgard", kind: "Obszar", visibility: "known",
     description: "Ojczyste ziemie nordyckich wojowników, osadników i żeglarzy."},
    {id: "agder", name: "Agder", parentId: "drengrlands", kind: "Królestwo Drengrów", visibility: "known",
     description: "Najstarsze z królestw Drengrów, ziemia wojowników, przysiąg i pradawnych tradycji. Rządzi tu Halfdan Czarny, człowiek o ambicjach większych niż granice własnego królestwa."},
    {id: "hordalands", name: "Hordalands", parentId: "drengrlands", kind: "Królestwo Drengrów", visibility: "known",
     description: "Królestwo żeglarzy i kupców, którego bogactwo płynie z morza. Pod panowaniem Alreka Erikssona handel, polityka i królewskie przysięgi splatają się w sieć trudnych zobowiązań."},
    {id: "vestmar", name: "Vestmar", parentId: "drengrlands", kind: "Królestwo Drengrów", visibility: "known",
     description: "Kraina podzielonych koron i rywalizujących możnych. Tutaj władza pozostaje przedmiotem sporów, a sojusze mogą być równie niebezpieczne jak otwarta wojna."},
    {id: "fjordane", name: "Fjordane", parentId: "drengrlands", kind: "Królestwo Drengrów", visibility: "known",
     description: "Królestwo mistrzów ognia, stali i run. Pod rządami Audbjorna bogactwo rodzi się w kuźniach, gdzie powstaje broń, a dawną wiedzę przekuwa się w potęgę."},
    {id: "eylenda", name: "Eylenda", parentId: "drengrlands", kind: "Niezależna wyspa", visibility: "known",
     description: "Surowa, niezależna wyspa, na której jarlowie spotykają się podczas Wielkiego Althingu. To ziemia dawnych bohaterów, wulkanicznego ognia i tajemniczych kurhanów, gdzie żywi wciąż stykają się z legendami umarłych."},
    {id: "osady-bohaterow", name: "Osada bohaterów", parentId: "drengrlands", kind: "Niezależna w nawigacji", visibility: "known",
     description: "Hrafnvik — główna wioska drużyny. Jej położenia i przynależności do czterech królestw jeszcze nie potwierdziliśmy."}
  ],
  // Lokacje publiczne, poznane podczas kampanii. Pełny katalog podręcznika pozostaje poza repo.
  // Osady z niepotwierdzonym położeniem grupujemy na liście, bez deklarowania granic i przynależności politycznej.
  places: [
    {
      id: "eylenda", name: "Eylenda", kind: "Wyspa", visibility: "known", parentRegionId: "drengrlands",
      description: "Na tej wyspie bohaterowie stanęli przed najpotężniejszymi ludźmi Północy, przeszli przez krainę ognia i umarłych oraz odzyskali Gungnir, włócznię Odyna. Zwycięstwo miało jednak swoją cenę.",
      history: "Na Wielkim Althingu możni rozmawiali o Winlandzie, wojnie z Frankami i idei Króla Królów, lecz nie wyłonili wspólnego władcy. Bohaterowie zapuścili się także do kurhanu Haralda Hardrady i odzyskali Gungnir. Wyprawa kosztowała życie Flokiego i Morda. Eylendę naznaczył również żywioł ognia.",
      image: "assets/locations/eylenda.svg", personIds: []
    },
    {
      id: "ejkjavik", name: "Ejkjavik", kind: "Osada", visibility: "known", parentRegionId: "eylenda",
      description: "Osada na Eylendzie, w której odbywa się Wielki Althing — zgromadzenie jarlów, przysiąg i rozstrzygania sporów.",
      history: "W Ejkjaviku podczas Wielkiego Althingu omawiano wyprawę do Winlandu, wojnę z Frankami i ideę Króla Królów. Althing jest nazwą zgromadzenia; Ejkjavik to nazwa osady, która je gości.",
      image: "assets/locations/althing.svg", personIds: []
    },
    {
      id: "innriholmur", name: "Innrihólmur", kind: "Miasto portowe · stolica", visibility: "known", parentRegionId: "hordalands",
      description: "Nadmorska stolica króla Alreka Erikssona. Miasto osłaniają strome urwiska; prowadzi do niego tylko jedna lądowa droga.",
      history: "Innrihólmur służy królowi Alrekowi jako główna siedziba i centrum handlu. Jego położenie ułatwia obronę oraz przyjmowanie kupców przypływających z dalekich ziem.",
      image: "", personIds: []
    },
    {
      id: "alrekstad", name: "Alrekstad", kind: "Miasto", visibility: "known", parentRegionId: "hordalands",
      description: "Rodzinne miasto króla Alreka Erikssona i ufortyfikowany ośrodek broniący wybrzeża Hordalands.",
      history: "Alrek odwiedza Alrekstad, choć na co dzień jego dwór mieści się w Innrihólmur. Miastem zarządza jarl Rodmar, najmłodszy syn króla; ludność dysponuje silną zbrojną załogą.",
      image: "", personIds: []
    },
    {
      id: "voss", name: "Voss", kind: "Osada i jarldom", visibility: "known", parentRegionId: "hordalands",
      description: "Nadmorska osada rolnicza, która dzięki wyprawom wojennym zyskała znaczenie i przyciąga nowych wojowników.",
      history: "Za jarla Drakmara Voss przeszło od spokojnej, niewielkiej osady do prężnego jarldomu. Sława miejscowych najeźdźców przyciąga najemników i tych, którzy szukają bogactwa oraz chwały.",
      image: "", personIds: []
    },
    {
      id: "ice-spine-mountains", name: "Ice Spine Mountains", kind: "Pasmo górskie", visibility: "known", parentRegionId: "hordalands",
      description: "Góry Lodowego Grzbietu: monumentalne iglice lodu górujące nad ziemiami Hordalands.",
      history: "Podróżnicy opowiadają o jaskiniach w lodowych zboczach. Niektóre relacje sugerują, że we wnętrzu góry nie ma skały, tylko lód, który nigdy nie topnieje. To opowieści podróżnych, a nie potwierdzona wiedza o całym paśmie.",
      image: "", personIds: []
    },
    {
      id: "cloven-helm", name: "The Cloven Helm", kind: "Osobliwość przyrody", visibility: "known", parentRegionId: "hordalands",
      description: "Rozłupany Hełm: olbrzymia skała pęknięta niemal idealnie na dwie części.",
      history: "Mieszkańcy porównują kształt skały do śladu po potężnym ciosie boskiego topora. Nie znamy jej rzeczywistego pochodzenia.",
      image: "", personIds: []
    },
    {
      id: "fafnir-cave", name: "Jaskinia Fafnira", kind: "Legendarne miejsce", visibility: "known", parentRegionId: "hordalands",
      description: "Według nordyckich podań gdzieś w północnym Hordalands znajduje się leże smoka Fafnira.",
      history: "Opowieści przypisują temu miejscu wielkie skarby. Podręcznik przedstawia je jako legendę o nieustalonej lokalizacji — nie jest to potwierdzone, odkryte wejście do jaskini.",
      image: "", personIds: []
    },
    {
      id: "thingvellir", name: "Thingvellir", kind: "Płaskowyż", visibility: "known", parentRegionId: "eylenda",
      description: "Wysoki, płaski górski obszar na Eylendzie, wymieniany w opisach tej krainy.",
      history: "Thingvellir jest jednym z opisanych miejsc Eylendy. Nie należy go mylić z Ejkjavikiem — osadą, w której odbywa się Althing w naszej sadze.",
      image: "", personIds: []
    },
    {
      id: "freydistad", name: "Freydistad (Hardrada's Rest)", kind: "Miasto portowe", visibility: "known", parentRegionId: "eylenda",
      description: "Port na Eylendzie, skąd żeglarze wyruszają ku nieznanym wodom, a nie tylko na zwykłe wyprawy wojenne.",
      history: "Podręcznik łączy port z Haraldem Hardradą i opowieściami o dalekich podróżach. To miejsce przygotowań śmiałków poszukujących nowych lądów za granicami znanego świata.",
      image: "", personIds: []
    },
    {
      id: "gods-cauldron", name: "Kocioł Bogów", kind: "Gorące jezioro", visibility: "known", parentRegionId: "eylenda",
      description: "Znane również jako Wrzące Jezioro lub Kocioł Thora. Gorący zbiornik leży u podnóża wielkiej wulkanicznej góry.",
      history: "Woda jeziora jest tak gorąca, że nieustannie wrze. Mieszkańcy Eylendy uważają je za miejsce wyjątkowo niebezpieczne dla ludzi i zwierząt.",
      image: "", personIds: []
    },
    {
      id: "hardrada-mound", name: "Kurhan Haralda Hardrady", kind: "Kurhan", visibility: "known", parentRegionId: "eylenda",
      description: "Miejsce wyprawy bohaterów na Eylendzie, związane z pochówkiem i legendą Haralda Hardrady.",
      history: "W naszej kampanii bohaterowie dotarli do kurhanu i odzyskali Gungnir, włócznię Odyna. Wyprawa stała się jednym z najważniejszych rozdziałów sagi i przyniosła bolesne straty.",
      image: "", personIds: []
    },
    {
      id: "hrafnvik", name: "Hrafnvik", kind: "Osada bohaterów", visibility: "known", parentRegionId: "osady-bohaterow",
      description: "Osada, w której brat wystąpił przeciw bratu, a przelana krew zmieniła porządek władzy. Tutaj rozpoczęła się opowieść o Sianicie, Styrze i ludziach, których losy odmieniła śmierć jarla Sigurda.",
      history: "Hroald utracił władzę i wzrok, a jego brat Sigurd objął miejsce jarla. Wkrótce Sigurd został zamordowany, a Sianita przejęła odpowiedzialność za osadę. W Hrafnviku pamięta się zarówno rozlew krwi, jak i tych, którzy zginęli podczas późniejszych wypraw.",
      image: "assets/locations/Hrafnvik.png", personIds: ["hroald","runa","anslem","sianita","halvard","haroks","ylva","floki"]
    },
    {
      id: "skjorvik", name: "Skjǫrvik", kind: "Osada", visibility: "known", parentRegionId: "drengrlands",
      description: "Osada zdobyta ogniem i żelazem przez wojowników Hrafnviku. Zwycięzcy zabrali stąd srebro, łupy i jeńców, lecz dla pokonanych dzień najazdu stał się początkiem zupełnie innej historii.",
      history: "Wojownicy Hrafnviku zdobyli osadę, zabierając srebro, towary i jeńców. Wśród pojmanych znalazł się Aslak Cieśla. Dla najeźdźców był to triumf, dla mieszkańców Skjǫrviku — dzień straty, o którym trudno zapomnieć.",
      image: "assets/locations/skjorvik.svg", personIds: ["aslak"]
    }
  ]
};
