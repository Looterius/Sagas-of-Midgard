// Dane PUBLICZNE — nigdy nie umieszczaj tu sekretów Skalda.
// image: np. "assets/hroald.webp" po dodaniu zdjęcia do repozytorium.
window.CHRONICLE = {
  title: "Sagas of Midgard",
  subtitle: "Kronika graczy • Eylenda",
  updated: "2026-11-17",
  people: [
    { id: "haki", name: "Haki Torfinnsson", kind: "Postać", image: "", x: 35, y: 25 },
    { id: "erik", name: "Erik Żelaznadłoń", kind: "Postać", image: "assets/portraits/Erik Zelaznadłoń.png", x: 255, y: 25 },
    { id: "ragnvald-p", name: "Ragnvald Prawomówca", kind: "Postać", image: "assets/portraits/Ragnvald Prawomówca.png", x: 475, y: 25 },
    { id: "styrbjorn", name: "Styrbjorn Ragnsson", kind: "Postać", image: "assets/portraits/Styrbjorn Ragnsson.png", x: 695, y: 25 },
    { id: "hroald", name: "Hroald", kind: "Postać", image: "assets/portraits/Hroald.png", x: 915, y: 25 },
    { id: "ragnvald-s", name: "Ragnvald Skjoldsson", kind: "Postać", image: "", x: 145, y: 317 },
    { id: "aslak", name: "Aslak Cieśla", kind: "Postać", image: "assets/portraits/Aslak Cieśla.png", x: 365, y: 317 },
    { id: "morotar", name: "Morotar Jednooki", kind: "Postać", image: "assets/portraits/Morotar Jednooki.png", x: 585, y: 317 },
    { id: "astrid", name: "Astrid Freyjadottir", kind: "Postać", image: "assets/portraits/Astrid Freyjadottir.png", x: 805, y: 317 },
    { id: "anslem", name: "Brat Anslem", kind: "Postać", image: "assets/portraits/Brat Anslem.png", x: 145, y: 609 },
    { id: "svala", name: "Svala Ketilsdóttir i synowie", kind: "Rodzina", image: "assets/portraits/svala-ketilsdottir-i-synowie.jpg", x: 365, y: 609 },
    { id: "runa", name: "Runa Hroaldsdottir", kind: "Postać", image: "assets/portraits/Runa Hroaldsdottir.png", x: 585, y: 609 },
    { id: "leif", name: "Leif Anundsson", kind: "Postać", image: "assets/portraits/Leif Anundsson.png", x: 805, y: 609 }
  ],
  // Publiczne POWIĄZANIA FABULARNE można dodać dopiero po zatwierdzeniu przez Skalda.
  // Format: {from:"hroald",to:"runa",type:"rodzina",label:"..."}.
  relationships: [],

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
      placeId: "althing", kind: "Zgromadzenie", image: "",
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
    {id: "eylenda", name: "Eylenda", parentId: "drengrlands", kind: "Kraina", visibility: "known",
     description: "Wyspa pozbawiona jednego króla. Jarlowie spotykają się tutaj na Althingu, by rozstrzygać spory i podejmować decyzje."}
  ],
  // Lokacje publiczne, poznane podczas kampanii. Pełny katalog podręcznika pozostaje poza repo.
  // parentRegionId: null = położenie w konkretnym królestwie nie zostało potwierdzone.
  places: [
    {
      id: "eylenda", name: "Eylenda", kind: "Wyspa", visibility: "known", parentRegionId: "drengrlands",
      description: "Wyspa na północnym zachodzie ziem Drengrów. Nie ma tu króla; ważne sprawy rozstrzygają jarlowie zebrani na Althingu.",
      history: "W czasie obecnej sagi Eylenda stała się miejscem zgromadzenia władców i wojowników. Przybyli tu, aby dyskutować o losach Północy, wyprawie do Winlandu oraz kwestiach wojny i władzy.",
      image: "assets/locations/eylenda.svg", personIds: []
    },
    {
      id: "althing", name: "Althing", kind: "Zgromadzenie", visibility: "known", parentRegionId: "eylenda",
      description: "Wielkie zgromadzenie jarlów na Eylendzie. Miejsce przysiąg, sporów, sądów i politycznych rozmów.",
      history: "Na Wielkim Althingu omawiano wyprawę do Winlandu, wojnę z Frankami oraz koncepcję Króla Królów. Wyniki debat i dalsze losy zgromadzenia będą odnotowywane w kronice po kolejnych sesjach.",
      image: "assets/locations/althing.svg", personIds: []
    },
    {
      id: "hrafnvik", name: "Hrafnvik", kind: "Osada", visibility: "known", parentRegionId: null,
      description: "Osada związana z początkami sagi oraz sporami o władzę. Jej dokładne przypisanie do krainy pozostawiono do potwierdzenia.",
      history: "Hroald utracił władzę i wzrok, a Sigurd objął jego miejsce. Po śmierci Sigurda losy Hrafnviku wciąż wpływają na historię bohaterów.",
      image: "assets/locations/hrafnvik.svg", personIds: ["hroald","runa","anslem"]
    },
    {
      id: "skjorvik", name: "Skjǫrvik", kind: "Osada", visibility: "known", parentRegionId: null,
      description: "Osada najechana przez wojowników z Hrafnviku. Jej położenie w ramach królestw nie zostało jeszcze ustalone.",
      history: "Podczas najazdu osada została zdobyta, a zwycięzcy wrócili z łupami i pojmanymi mieszkańcami. Wśród jeńców był Aslak Cieśla.",
      image: "assets/locations/skjorvik.svg", personIds: ["aslak"]
    }
  ]
};
