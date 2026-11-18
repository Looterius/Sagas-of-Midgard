// Dane PUBLICZNE — nigdy nie umieszczaj tu sekretów Skalda.
// image: np. "assets/hroald.webp" po dodaniu zdjęcia do repozytorium.
window.CHRONICLE = {
  title: "Sagas of Midgard",
  subtitle: "Kronika graczy • Drengrlands",
  updated: "2026-11-19",
  // PUBLICZNE biografie. Nowe osoby bez portretów otrzymają ilustracje po ich dostarczeniu.
  // Sten: los niepotwierdzony — nie nadajemy flagi zmarły.
  // Sianita Gunnarsdóttir: zatwierdzona pisownia, mimo że ojcem był Sigurd.
  people: [
    {
      "id": "sigurd",
      "name": "Jarl Sigurd",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "lifeStatus": "deceased",
        "titles": [
          "jarl"
        ],
        "settlementIds": [
          "hrafnvik"
        ],
        "familyIds": [
          "rod-jarla"
        ]
      },
      "image": "assets/portraits/Sigurd, Jarl of the Northern Stronghold.png",
      "description": "Sigurd zdobył władzę w Hrafnviku po rebelii przeciw własnemu bratu Hroaldowi. Pokonanego jarla pozbawił wzroku i tronu, lecz zwycięstwo nie zakończyło dawnych sporów. Sigurd był ojcem Sianity Gunnarsdóttir i Halwarda „Snake-Eye”, którym pozostawił skomplikowane dziedzictwo. Wkrótce sam został zamordowany. Jego śmierć wyniosła Sianitę na czoło osady i pozostawiła pytania o zabójcę, dawne przysięgi oraz cenę zdobytej władzy.",
      "x": 10,
      "y": 10
    },
    {
      "id": "hroald",
      "name": "Hroald",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "titles": [
          "jarl"
        ],
        "settlementIds": [
          "hrafnvik"
        ],
        "familyIds": [
          "rod-jarla"
        ]
      },
      "image": "assets/portraits/Hroald.png",
      "description": "Hroald niegdyś władał Hrafnvikiem. Jego własny brat Sigurd obalił go podczas rebelii, odebrał mu władzę i kazał pozbawić wzroku. Podczas wiosennych zgromadzeń starego jarla wystawiano w ciężkiej klatce, pod strażą ludzi nowej władzy. Utracił tron, lecz nie znaczenie: pamięć o jego panowaniu nadal dzieli osadę. Jest ojcem Runy i Stena, a zarazem wujem Sianity i Halwarda. Dla starych rodów pozostaje żywym przypomnieniem dawnych przysiąg.",
      "x": 211,
      "y": 10
    },
    {
      "id": "runa",
      "name": "Runa Hroaldsdóttir",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ],
        "familyIds": [
          "rod-jarla"
        ]
      },
      "image": "assets/portraits/Runa Hroaldsdottir.png",
      "description": "Runa jest córką oślepionego jarla Hroalda i siostrą Stena. Po obaleniu ojca pozostała blisko starego rodu, zachowując godność również wtedy, gdy inni świętowali zwycięstwo Sigurda. Na zgromadzeniach nie urządza demonstracji: sam sposób, w jaki odmawia toastu za dawną rebelię, mówi mieszkańcom Hrafnviku dość. Jako kuzynka Sianity i Halwarda łączy oba odłamy rodziny, chociaż historia ich ojców wciąż stoi między nimi.",
      "x": 412,
      "y": 10
    },
    {
      "id": "sten",
      "name": "Sten Hroaldsson",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ],
        "familyIds": [
          "rod-jarla"
        ]
      },
      "image": "assets/portraits/Stern Haraldson, Norse Noble Warrior.png",
      "description": "Sten jest synem dawnego jarla Hroalda i bratem Runy. Należy do tej gałęzi rodu Hrafnviku, która utraciła władzę po rebelii Sigurda. W dawnych przekazach Sten figurował jako zaginiony, a nawet uznawany za martwego. Do dziś opowieści o jego losie pozostają niejednoznaczne, a samo jego imię przypomina, że potomków pokonanego jarla nie wymazano z pamięci osady.",
      "x": 613,
      "y": 10
    },
    {
      "id": "sianita",
      "name": "Sianita Gunnarsdóttir",
      "kind": "Bohater",
      "grouping": {
        "role": "hero",
        "lifeStatus": "living",
        "titles": [
          "ruler"
        ],
        "settlementIds": [
          "hrafnvik"
        ],
        "familyIds": [
          "rod-jarla"
        ]
      },
      "image": "assets/portraits/841056920_1454607076732851_414940541375700284_n.jpg",
      "description": "Sianita, tarczowniczka i jarlowa Hrafnviku, przejęła władzę po zamordowaniu ojca, Sigurda. Odziedziczyła osadę podzieloną między ludzi nowego porządku a stronników oślepionego Hroalda, własnego stryja. Na Wielkim Althingu Eylendy mierzyła się z roszczeniami możnych i oskarżeniami o los zdobytej osady. Odmówiła królowi Alrekowi przysięgi i małżeństwa z jego synem; jej decyzje doprowadziły drużynę do próby odzyskania Gungnir. Narzeczona Asgrima, niesie ciężar władzy, dawnych win i nowych zobowiązań.",
      "x": 814,
      "y": 10
    },
    {
      "id": "halvard",
      "name": "Halward „Snake-Eye”",
      "kind": "Bohater",
      "grouping": {
        "role": "hero",
        "lifeStatus": "living",
        "settlementIds": [
          "hrafnvik"
        ],
        "familyIds": [
          "rod-jarla"
        ]
      },
      "image": "assets/portraits/836508976_2515877412221096_575784062671443810_n.jpg",
      "description": "Halward, znany jako „Snake-Eye”, jest synem Sigurda i bratem jarlowej Sianity. Jako wyznawca Lokiego woli podstęp, negocjacje i grę wpływów od prostych deklaracji. Na Althingu Eylendy zabiegał o poparcie dla drużyny, prowadząc trudne rozmowy z przedstawicielami innych krain. To, co robił w cieniu politycznych sporów, miało znaczenie równie wielkie jak publiczne przemówienia siostry.",
      "x": 1015,
      "y": 10
    },
    {
      "id": "asgrim",
      "name": "Asgrim",
      "kind": "Bohater",
      "grouping": {
        "role": "hero",
        "lifeStatus": "living",
        "kingdomIds": [
          "agder"
        ],
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Asgrim.jpeg",
      "description": "Asgrim, syn Halfdana Czarnego, władcy Agder, przybył z własnymi tarczownikami i dołączył do drużyny po śmierci Flokiego. Jego zaręczyny z Sianitą połączyły losy rodu z Agder z przyszłością Hrafnviku. Zna opowieści i polityczne zamiary krain południa; wspominał między innymi zasłyszaną historię o ziemiach Albionu, nie przedstawiając jej jako własnego planu podboju. Choć pochodzenie otwiera mu drzwi możnych, Asgrim towarzyszy również wojownikom Hrafnviku i dzieli z nimi ryzyko drogi.",
      "x": 1216,
      "y": 10
    },
    {
      "id": "svala",
      "name": "Svala Ketilsdóttir",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ],
        "familyIds": [
          "rod-svali"
        ]
      },
      "image": "assets/portraits/Svala.png",
      "description": "Svala jest wdową po Ketilu Brandssonie, pojmanym i zabitym bez sądu podczas przewrotu Sigurda. Na Thingu stanęła przed nową władzą, domagając się zapłaty długu krwi — nie za czyn Sianity, lecz od domu, który odziedziczył władzę i obowiązki po jej ojcu. Jest matką bliźniaków Morda i Ulfa. Później przyznano jej ziemię, jednak los jej rodziny pozostał związany z wyprawami i sporami Hrafnviku. Po śmierci Morda musi nosić pamięć o kolejnej stracie.",
      "x": 1417,
      "y": 10
    },
    {
      "id": "mord",
      "name": "Mord",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "lifeStatus": "deceased",
        "settlementIds": [
          "hrafnvik"
        ],
        "familyIds": [
          "rod-svali"
        ]
      },
      "image": "assets/portraits/Mord.png",
      "description": "Mord był jednym z bliźniaczych synów Svali Ketilsdóttir i zmarłego Ketila Brandssona. Wyrastał w rodzinie, która długo domagała się sprawiedliwości po krwawym przewrocie. Brał udział w działaniach wojowników Hrafnviku przeciw obcej osadzie, a na Wielkim Althingu stanął przed możnymi jako świadek tych wydarzeń. Przyznał się do własnego udziału i oświadczył, że działał dla Jarlowej. Później zginął podczas wyprawy na Eylendzie. Do pamięci o utraconym ojcu jego rodziny dopisana została śmierć następnego pokolenia.",
      "x": 10,
      "y": 255
    },
    {
      "id": "ulf",
      "name": "Ulf",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ],
        "familyIds": [
          "rod-svali"
        ]
      },
      "image": "assets/portraits/Ulf, Vigilant Lord of the Riverside Hall.png",
      "description": "Ulf jest synem Svali Ketilsdóttir i bliźniaczym bratem Morda. Ich ojciec, Ketil Brandsson, został zabity w czasie przewrotu, a matka przez długi czas zabiegała o uznanie krzywdy i należne zadośćuczynienie. Los Ulfa splótł się z nowym porządkiem Hrafnviku, nadanym rodzinie gospodarstwem i niebezpiecznymi wyprawami ludzi Jarlowej. Po śmierci brata pozostał jednym z żywych świadków tego, jak dawne długi krwi obciążają kolejne pokolenie. Po śmierci Morda jego imię nierozerwalnie związało się z pamięcią o bracie i losem ich rodziny.",
      "x": 211,
      "y": 255
    },
    {
      "id": "erik",
      "name": "Erik Żelaznadłoń",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Erik Zelaznadłoń.png",
      "description": "Erik Żelaznadłoń, hersir Hrafnviku, dowodzi wojownikami i stanowi jeden z filarów porządku ustanowionego po obaleniu Hroalda. W osadzie, w której pamięć o rebelii wciąż wpływa na przysięgi i sądy, jego znaczenie wynika nie tylko z umiejętności walki, lecz także z posłuchu wśród zbrojnych. Podczas Thingu i sporów o dawną przemoc stoi po stronie stabilności nowej władzy. Musi jednak służyć osadzie, w której nie wszyscy uznali dawną zmianę jarla za sprawiedliwą.",
      "x": 412,
      "y": 255
    },
    {
      "id": "ragnvald-p",
      "name": "Ragnvald Prawomówca",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Ragnvald Prawomówca.png",
      "description": "Ragnvald Prawomówca jest strażnikiem prawa i pamięci zwyczajów Hrafnviku. Jako znawca Thingu przypomina, że przysięga, roszczenie i zadośćuczynienie mają wagę większą niż doraźna wola silniejszego. W sprawach świętego gaju, sporu wojowników oraz długu krwi Svali pomagał oddzielić prawo od zemsty. Nie rządzi osadą i nie wydaje wyroków za Jarlową; jego autorytet polega na tym, że pamięta, jakie konsekwencje rodzi naruszenie obyczaju.",
      "x": 613,
      "y": 255
    },
    {
      "id": "styrbjorn",
      "name": "Styrbjorn Ragnsson",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Styrbjorn Ragnsson.png",
      "description": "Styrbjorn Ragnsson należy do ludzi związanych z dawnym obozem Hroalda. Podczas wiosennego Thingu odmówił świętowania zwycięstwa nowej władzy, a jego spór z młodym wojownikiem Leifem Anundssonem przerodził się w bójkę. Wydarzenie pokazało, jak cienka bywa granica między osobistą urazą a konfliktem całych rodów. Styrbjorn nie jest wyłącznie przeciwnikiem Jarlowej: pozostaje człowiekiem, który pamięta, po której stronie stali jego bliscy podczas rebelii.",
      "x": 814,
      "y": 255
    },
    {
      "id": "leif",
      "name": "Leif Anundsson",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Leif Anundsson.png",
      "description": "Leif Anundsson jest młodym wojownikiem wiernym nowej władzy Hrafnviku i jarlowej Sianicie. Podczas Thingu wszedł w gwałtowny spór ze Styrbjornem Ragnssonem, związanym z dawnym obozem Hroalda. Ich starcie uczyniło z osobistej kłótni symbol pęknięcia dzielącego osadę. Leif należy do pokolenia, które chce budować przyszłość po rebelii, lecz jego żarliwa lojalność bywa równie niebezpieczna jak niechęć dawnych przeciwników.",
      "x": 1015,
      "y": 255
    },
    {
      "id": "hakon",
      "name": "Hakon Czerwony",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Hakon Czerwony, Merchant of Midgard.png",
      "description": "Hakon Czerwony jest najbogatszym mieszkańcem Hrafnviku i właścicielem niemal całej floty osady. Zarządza statkami, warsztatami i handlem; jego okręty i srebro wiele znaczą dla każdej wyprawy. Dawniej zatrudniał Flokiego, wybitnego szkutnika, lecz ich współpraca zakończyła się konfliktem. Gdy chrześcijańskiego cieślę Aslaka wygnano z osady, Hakon porwał go i uczynił własnym trallem. Aslak pracuje dziś w jego warsztacie okrętowym wbrew swojej woli. Bogactwo Hakona daje mu wpływy, ale jego postępowanie pozostawia też ciężar dla sumienia Hrafnviku.",
      "x": 1216,
      "y": 255
    },
    {
      "id": "floki",
      "name": "Floki",
      "kind": "Bohater",
      "grouping": {
        "role": "hero",
        "lifeStatus": "deceased",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/843041093_29439569015649515_6290487889105704541_n.jpg",
      "description": "Floki był znakomitym szkutnikiem i wizjonerem Hrafnviku. Budował okręty, niegdyś pracując dla Hakona Czerwonego, z którym później się poróżnił. Pomógł Torvaldowi Kowalowi powrócić od chrześcijaństwa do wiary w Thora i Odyna. W jednej ze swoich wizji zobaczył możliwość zbudowania statku zdolnego żeglować po gałęziach Yggdrasilu. Podczas wyprawy po Gungnir na Eylendzie poniósł śmierć w starciu z Haraldem Hardradą. Haroks złożył jego ciało w niedokończonym statku w lesie Odyna. Floki pozostał bohaterem sagi — lecz zmarłym.",
      "x": 1417,
      "y": 255
    },
    {
      "id": "aslak",
      "name": "Aslak Cieśla",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "statuses": [
          "captive"
        ],
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Aslak Cieśla.png",
      "description": "Aslak był wolnym chrześcijańskim cieślą w Hrafnviku. Pracował przy budowie kościoła, której robotnicy ścięli stare drzewa ze świętego gaju Freyi. Sprawa stanęła przed Thingiem i zakończyła się wygnaniem Aslaka. Wkrótce został porwany przez Hakona Czerwonego, najbogatszego kupca osady, i zmuszony do pracy przy jego okrętach jako trall. Nie był jeńcem przywiezionym z najazdu na Skjordvik; utracił wolność z rąk własnego sąsiada.",
      "x": 10,
      "y": 500
    },
    {
      "id": "torvald",
      "name": "Torvald Kowal",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Thorwald, the Viking Blacksmith.png",
      "description": "Torvald jest najważniejszym kowalem Hrafnviku. Jego kuźnia służyła wojownikom różnych stron konfliktu dynastycznego, a broń, którą wykuwał, trafiała zarówno do zwolenników starego, jak i nowego jarla. Na pewien czas przyjął chrześcijaństwo. Później Floki przekonał go do powrotu ku wierze w Thora i Odyna. Jego los ukazuje, jak osobiste przekonania zmieniają się pośród sporów religijnych, których echa słychać nad każdym paleniskiem i w każdej sali Hrafnviku.",
      "x": 211,
      "y": 500
    },
    {
      "id": "morotar",
      "name": "Morotar Jednooki",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Morotar Jednooki.png",
      "description": "Morotar Jednooki jest skaldem, śpiewakiem i strażnikiem opowieści Hrafnviku. Podczas uczt potrafi rozśmieszyć zarówno wojowników nowej władzy, jak i ludzi pamiętających czasy Hroalda. Jego pieśni zachowują imiona poległych, czyny żywych oraz opowieści, które łatwo zagubić pod ciężarem łupów i srebra. To on nadaje słowom wydarzeń miejsce w sadze: przypomina, że sława może przetrwać dłużej niż uczta i że pamięć nie wybiera jedynie zwycięzców.",
      "x": 412,
      "y": 500
    },
    {
      "id": "astrid",
      "name": "Astrid Freyjadóttir",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Astrid Freyjadottir.png",
      "description": "Astrid Freyjadóttir, vala Freyi, należy do najważniejszych strażniczek starej wiary w Hrafnviku. Przyjmuje dary, przewodzi rytuałom i cieszy się autorytetem wśród wojowników i gospodarzy. Stanęła po stronie świętości dawnego gaju, kiedy cieśle pracujący nad kościołem ścięli drzewa używane podczas obrzędów. Jako matka jednego z bohaterów łączy religijny obowiązek z troską o rodzinę. W czasach przemiany osady jej głos przypomina o przysięgach składanych dawnym bogom.",
      "x": 613,
      "y": 500
    },
    {
      "id": "anslem",
      "name": "Brat Anselm",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/Brat Anslem.png",
      "description": "Brat Anselm jest chrześcijańskim duchownym w Hrafnviku, spokojnym w słowach, ale wytrwałym w działaniu. Zamiast publicznie piętnować wyznawców dawnych bogów, pomaga potrzebującym, rozmawia z rannymi i gromadzi wokół nowej wiary rosnącą wspólnotę. Wraz z cieślą Aslakiem był związany z budową kościoła i sporem o drzewa wycięte w świętym gaju Freyi. Jego obecność pokazuje, że konflikt religijny rozgrywa się nie tylko między kapłanami, lecz także w codziennym życiu sąsiadów.",
      "x": 814,
      "y": 500
    },
    {
      "id": "haroks",
      "name": "Haroks Magnusson",
      "kind": "Bohater",
      "grouping": {
        "role": "hero",
        "lifeStatus": "living",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/819106917_1403096258558492_2259915694493588498_n.jpg",
      "description": "Haroks Magnusson jest potężnym berserkerem z drużyny Hrafnviku, wojownikiem związanym z niedźwiedzią naturą. Podczas pobytu na Eylendzie spotkał Úlfhéðnarów, wojowników wilczej tradycji Odyna, którzy poddali go brutalnej próbie, pragnąc obudzić jego własną przemianę. Jego droga nie sprowadza się jednak do samej siły. Po śmierci Flokiego Haroks osobiście pożegnał towarzysza, składając jego ciało w niedokończonym statku w lesie Odyna. Ten gest zapisał się w sadze równie mocno jak walki.",
      "x": 1015,
      "y": 500
    },
    {
      "id": "ylva",
      "name": "Ylva",
      "kind": "Bohater",
      "grouping": {
        "role": "hero",
        "lifeStatus": "living",
        "settlementIds": [
          "hrafnvik"
        ]
      },
      "image": "assets/portraits/836713553_1631673708686109_4202120061548436723_n.png",
      "description": "Ylva jest łuczniczką drużyny Hrafnviku, często przedstawianą z sową u boku. Tam, gdzie wojownicy wolą otwartą walkę, jej łuk, cierpliwość i czujność pozwalają dostrzegać więcej. Towarzyszyła wyprawom drużyny oraz uczestniczyła w wydarzeniach Wielkiego Althingu na Eylendzie. Wśród przedstawicieli różnych krain, wojowników i wyznawców dawnych bogów poznawała obyczaje oraz opowieści, które wykraczały poza codzienność rodzinnej osady. Jej droga wciąż wiedzie przez nieznane szlaki, gdzie opowieści Północy dopiero nabierają kształtu.",
      "x": 1216,
      "y": 500
    },
    {
      "id": "ragnvald-s",
      "name": "Ragnvald Skjoldsson",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "skjorvik"
        ]
      },
      "image": "assets/portraits/Ragnvald Skjoldsson.png",
      "description": "Ragnvald Skjoldsson był przywódcą Skjordviku, osady, przeciw której wyruszyli wojownicy Hrafnviku. Podczas poszukiwań człowieka oskarżonego o zabójstwo Sigurda jego ludzie znaleźli się po niewłaściwej stronie sporu między osadami. Najazd przyniósł spustoszenie, jeńców i łupy, których pamięć przetrwała także wśród pokonanych. Ragnvald pozostaje postacią przypominającą, że wojowniczy triumf jednych zapisywany jest przez innych jako krzywda.",
      "x": 1417,
      "y": 500
    },
    {
      "id": "haki",
      "name": "Haki Torfinnsson",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "skjorvik"
        ]
      },
      "image": "assets/portraits/Hakiego Torfinnssona.png",
      "description": "Haki Torfinnsson jest rybakiem i przemytnikiem ze Skjordviku, przywykłym do zatok, straży i niebezpiecznych szlaków między wybrzeżami. W czasie najazdu wojowników Hrafnviku znalazł się pomiędzy bezpieczeństwem własnym a lojalnością wobec przywódców osady. Znał drogi, hasła i rytm patroli, dlatego jego wiedza mogła ważyć więcej niż miecz. W kronice pozostaje jednym z ludzi, którzy pokazują wydarzenia wyprawy z perspektywy mieszkańców napadniętego brzegu.",
      "x": 10,
      "y": 745
    },
    {
      "id": "orm",
      "name": "Orm Półgłos",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "settlementIds": [
          "skjorvik"
        ]
      },
      "image": "assets/portraits/Orm.png",
      "description": "Orm Półgłos był rybakiem ze Skjordviku, osady zniszczonej podczas najazdu wojowników Hrafnviku. Znał miejscowe wody, szlaki i ludzi przybywających od strony morza. Gdy ogień i żelazo spadły na jego dom, los Orma związał się ze sporem pomiędzy napastnikami a ocalałymi mieszkańcami. Pozostał jednym z tych, którzy mogą opowiedzieć o wydarzeniach z perspektywy pokonanej osady, a nie jej zdobywców.",
      "x": 211,
      "y": 745
    },
    {
      "id": "alrek",
      "name": "Alrek Eriksson",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "titles": [
          "ruler"
        ],
        "kingdomIds": [
          "hordalands"
        ]
      },
      "image": "assets/portraits/Alrek Eriksson.png",
      "description": "Alrek Eriksson jest królem Hordalands, krainy, której siła opiera się na portach, handlu i flotach kupieckich. Jego dwór znajduje się w Innrihólmur, a Alrekstad pozostaje jednym z głównych ośrodków rodu. Podczas Wielkiego Althingu na Eylendzie uczestniczył w sporach między królami o przyszłość ziem Drengrów. Od Sianity z Hrafnviku domagał się przysięgi i małżeństwa z własnym synem, spotykając się z odmową. W polityce łączy interes królestwa z uważnym szacowaniem wpływów pozostałych władców.",
      "x": 412,
      "y": 745
    },
    {
      "id": "halfdan",
      "name": "Halfdan Czarny",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "titles": [
          "ruler"
        ],
        "kingdomIds": [
          "agder"
        ]
      },
      "image": "assets/portraits/Halfdan Czarny.png",
      "description": "Halfdan Czarny włada Agder, jednym z najstarszych królestw ziem Drengrów. W królestwie znany jest z wojowniczej dumy i ambicji sięgających poza jego własne granice. Jest ojcem Asgrima, który wraz z tarczownikami zbliżył się do drużyny Sianity. Na Wielkim Althingu Halfdan zabierał głos w debatach o ziemiach za zachodnim morzem i przyszłości wspólnej władzy nad Drengrami. Przedkłada siłę oręża nad obietnice łatwego zysku z handlu, lecz rozumie wagę sojuszy między królami.",
      "x": 613,
      "y": 745
    },
    {
      "id": "audbjorn",
      "name": "Audbjorn",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "titles": [
          "ruler"
        ],
        "kingdomIds": [
          "fjordane"
        ]
      },
      "image": "assets/portraits/Audbjorn.png",
      "description": "Audbjorn jest królem Fjordane, kraju stali, kuźni, run i rzemieślników. Podczas Wielkiego Althingu na Eylendzie zasiadał obok innych władców Drengrlands, lecz jego głos różnił się od wojowniczych nawoływań niektórych królów. Dla Fjordane istotne są porty, wymiana towarów i swoboda żeglugi. W debatach o wyprawach ku zachodnim ziemiom oraz o wspólnej koronie potrafił przypominać, że morze daje nie tylko sławę, lecz także utrzymanie tysiącom ludzi. Jego pozycja łączy ambicję monarchy z interesami kupców.",
      "x": 814,
      "y": 745
    },
    {
      "id": "olaf-gudrodsson",
      "name": "Olaf Gudrodsson",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "titles": [
          "ruler"
        ],
        "kingdomIds": [
          "vestmar"
        ],
        "familyIds": [
          "rod-gudrodssonow"
        ]
      },
      "image": "assets/portraits/Olaf Gudrodsson.png",
      "description": "Olaf Gudrodsson jest najstarszym synem Gudroda Łowcy i dziedzicem, który po śmierci ojca upomniał się o panowanie nad całym Vestmarem. Zamiast spokojnego tronu zastał bunt dwóch braci oraz sprzymierzonych z nimi przeciwników dawnego rodu. Gdy Romsdal spłonął, wycofał się do górskiej twierdzy Myrka. Wciąż uważa się za prawowitego władcę, lecz ziemia jego ojca jest podzielona, a słowa o jedności królestwa brzmią dziś bardziej jak żądanie niż rzeczywistość.",
      "x": 1015,
      "y": 745
    },
    {
      "id": "alfheld-gudrodsson",
      "name": "Alfheld Gudrodsson",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "titles": [
          "jarl"
        ],
        "kingdomIds": [
          "vestmar"
        ],
        "familyIds": [
          "rod-gudrodssonow"
        ]
      },
      "image": "assets/portraits/Alfheld Gudrodsson.png",
      "description": "Alfheld Gudrodsson, syn Gudroda Łowcy i brat Olafa oraz Torstena, należy do pretendentów walczących o przyszłość podzielonego Vestmaru. Jego sala biesiadna stoi w Guntersborgu. Jest młodym, jasnowłosym możnym, którego otwartość i dar zjednywania sobie ludzi przyniosły popularność w wielu osadach. Nie słynie jednak ani z nadzwyczajnego kunsztu wojennego, ani z bezbłędnych decyzji politycznych. W kraju rozdartym między braćmi przychylność ludu nie zawsze wystarcza, by utrzymać władzę.",
      "x": 1216,
      "y": 745
    },
    {
      "id": "torsten-gudrodsson",
      "name": "Torsten Gudrodsson",
      "kind": "Postać",
      "grouping": {
        "role": "npc",
        "titles": [
          "jarl"
        ],
        "kingdomIds": [
          "vestmar"
        ],
        "familyIds": [
          "rod-gudrodssonow"
        ]
      },
      "image": "assets/portraits/Torsten Gudrodsson.png",
      "description": "Torsten Gudrodsson jest środkowym synem Gudroda Łowcy i bratem dwóch rywali o władzę nad Vestmarem. Włada najmniejszym z jarldomów, którego siedzibą stał się ufortyfikowany Dagrfjell. Ma mniej stronników wśród mieszkańców niż jego bracia, lecz potrafi przyciągnąć zbrojnych obietnicą srebra i łupów. Utrzymuje, że sam Odyn udzielił mu prawa do rządów. Wśród czterech obozów rozbitego królestwa Torsten szuka własnej drogi do panowania, nie zamierzając ugiąć się przed wolą Olafa.",
      "x": 1417,
      "y": 745
    }
  ],

  // Jawne relacje rodzinne i związki wynikające z rozegranej historii.
  relationships: [
    {
      "from": "sigurd",
      "to": "hroald",
      "type": "family",
      "label": "Bracia; Sigurd obalił Hroalda"
    },
    {
      "from": "sigurd",
      "to": "sianita",
      "type": "family",
      "label": "Ojciec i córka"
    },
    {
      "from": "sigurd",
      "to": "halvard",
      "type": "family",
      "label": "Ojciec i syn"
    },
    {
      "from": "hroald",
      "to": "runa",
      "type": "family",
      "label": "Ojciec i córka"
    },
    {
      "from": "hroald",
      "to": "sten",
      "type": "family",
      "label": "Ojciec i syn"
    },
    {
      "from": "runa",
      "to": "sten",
      "type": "family",
      "label": "Rodzeństwo"
    },
    {
      "from": "sianita",
      "to": "halvard",
      "type": "family",
      "label": "Rodzeństwo"
    },
    {
      "from": "hroald",
      "to": "sianita",
      "type": "family",
      "label": "Wuj / bratanica"
    },
    {
      "from": "hroald",
      "to": "halvard",
      "type": "family",
      "label": "Wuj / bratanek"
    },
    {
      "from": "sianita",
      "to": "asgrim",
      "type": "ally",
      "label": "Narzeczeni"
    },
    {
      "from": "svala",
      "to": "mord",
      "type": "family",
      "label": "Matka i syn"
    },
    {
      "from": "svala",
      "to": "ulf",
      "type": "family",
      "label": "Matka i syn"
    },
    {
      "from": "mord",
      "to": "ulf",
      "type": "family",
      "label": "Bracia bliźniacy"
    },
    {
      "from": "hakon",
      "to": "floki",
      "type": "other",
      "label": "Dawny pracodawca / szkutnik"
    },
    {
      "from": "hakon",
      "to": "aslak",
      "type": "other",
      "label": "Pracodawca / cieśla"
    },
    {
      "from": "floki",
      "to": "torvald",
      "type": "other",
      "label": "Floki przywrócił Torvalda dawnej wierze"
    },
    {
      "from": "leif",
      "to": "styrbjorn",
      "type": "hostile",
      "label": "Spór na Thingu"
    },
    {
      "from": "halfdan",
      "to": "asgrim",
      "type": "family",
      "label": "Ojciec i syn"
    },
    {
      "from": "olaf-gudrodsson",
      "to": "alfheld-gudrodsson",
      "type": "family",
      "label": "Bracia; rywale o władzę w Vestmarze"
    },
    {
      "from": "olaf-gudrodsson",
      "to": "torsten-gudrodsson",
      "type": "family",
      "label": "Bracia; rywale o władzę w Vestmarze"
    },
    {
      "from": "alfheld-gudrodsson",
      "to": "torsten-gudrodsson",
      "type": "family",
      "label": "Bracia; rywale o władzę w Vestmarze"
    }
  ],

  // Rodzina stanowi jawne powiązanie genealogiczne, nie wymyślone stronnictwo polityczne.
  characterGroupCatalog: {
    "families": [
      {
        "id": "rod-jarla",
        "name": "Rodzina Sigurda i Hroalda",
        "visibility": "known"
      },
      {
        "id": "rod-svali",
        "name": "Rodzina Svali i Ketila",
        "visibility": "known"
      },
      {
        "id": "rod-gudrodssonow",
        "name": "Ród Gudrodssonów",
        "visibility": "known"
      }
    ],
    "factions": []
  },

  // Kronika PUBLICZNA: wyłącznie wydarzenia znane graczom. Nie wpisuj tu sekretów Skalda.
  // Rozdziały kroniki publicznej — wyłącznie fakty znane graczom.
  chronicleChapters: [
    {
      "id": "I",
      "title": "Zanim rozpoczęła się saga",
      "subtitle": "Hrafnvik · bunt, zdrada i narodziny nowej władzy"
    },
    {
      "id": "II",
      "title": "Wiosenne Roztopy",
      "subtitle": "Sigrblót · pierwszy Thing · wiara i długi krwi"
    },
    {
      "id": "III",
      "title": "Krew na północnym fiordzie",
      "subtitle": "Skjordvik · najazd · cena zwycięstwa"
    },
    {
      "id": "IV",
      "title": "Wielki Althing Eylendy",
      "subtitle": "Królowie Północy · dyplomacja · wyrok dziewięciu"
    },
    {
      "id": "V",
      "title": "Kurhany i powrót",
      "subtitle": "Wyprawa po Gungnir · straty · pamięć poległych"
    }
  ],
  chronicle: [
    {
      "id": "hrafnvik-dwa-rody",
      "chapter": "I",
      "title": "Hrafnvik — osada dwóch braci",
      "placeId": "hrafnvik",
      "kind": "Dzieje osady",
      "image": "",
      "intro": "Zanim o Hrafnviku zaczęto śpiewać jako o domu Sianity, nad fiordem żyło dwóch braci, których spór miał podzielić całe pokolenie.",
      "paragraphs": [
        "Hrafnvik stało tam, gdzie ciemna woda fiordu spotykała się z pasem kamienistego brzegu i stromymi zboczami. Zimą okręty odpoczywały wyciągnięte na ląd, a ludzie reperowali sieci, dębowali skóry i liczyli srebro zdobyte podczas ostatniego sezonu. Wiosną szkutnicy wracali do swoich narzędzi, kupcy do targów, wojownicy do marzeń o dalekich ziemiach. Osada nie była wielkim miastem, lecz dla jej mieszkańców stanowiła środek świata — miejsce przodków, rodzinnych mogił i złożonych przysiąg.",
        "Nad tym światem panował jarl Hroald. Jego ród od dawna wyznaczał rytm wspólnoty, ale nawet stare pierścienie władzy nie potrafiły powstrzymać zmiany czasów. Do Hrafnviku przypływali ludzie przywożący nowe towary i nowe słowa. Obok dawnych bogów zaczęto wypowiadać imię Chrystusa. Dla jednych była to szansa na nowe sojusze i handel, dla innych znak, że obcy obyczaj wchodzi na ziemię poświęconą Odynowi, Freyi i Freyrowi.",
        "Najgłębszy podział nie przebiegał jednak między starym a nowym wyznaniem. Rodził się wewnątrz jednej rodziny. Sigurd, brat Hroalda, nie zgadzał się z kierunkiem, w którym zmierzała osada. W jego otoczeniu gromadzili się ludzie gotowi upomnieć się o inny porządek. Przy ucztach spory początkowo przybierały postać niedopowiedzianych uwag, milczących toastów i pytań o to, komu naprawdę należy się posłuch.",
        "Tak właśnie zaczynają się waśnie, które później skaldowie nazywają wojnami rodów. Nie od pierwszego ciosu, lecz od chwili, gdy dwaj bracia przestają ufać własnym słowom, a pozostali muszą zdecydować, za którym z nich staną. Nim w Hrafnviku rozległ się szczęk żelaza, podział istniał już w sercach jego mieszkańców."
      ],
      "participants": [
        "hroald",
        "sigurd",
        "runa",
        "sten"
      ]
    },
    {
      "id": "upadek-jarla",
      "chapter": "I",
      "title": "Bunt Sigurda — brat przeciw bratu",
      "placeId": "hrafnvik",
      "kind": "Dzieje osady",
      "image": "",
      "intro": "Sigurd wystąpił przeciw rodzonemu bratu. Zwyciężył, lecz nad zdobytym tronem pozostał cień człowieka, którego nie zdołał wymazać z pamięci osady.",
      "paragraphs": [
        "W Hrafnviku rozgorzał bunt. Wojownicy, którzy jeszcze niedawno wypływali wspólnie na morze, stanęli po przeciwnych stronach, ponieważ wierność jednemu z braci oznaczała zdradę drugiego. Sigurd poprowadził swoich zwolenników przeciw Hroaldowi i przejął władzę. Kiedy ucichł zgiełk walk, osada miała już nowego jarla, ale wielu jej mieszkańców utraciło przyjaciół, zaufanie lub nadzieję na pojednanie.",
        "Hroald przeżył własne obalenie. Odebrano mu tron i wzrok, a potem uwięziono. W dniach ważnych zgromadzeń wystawiano oślepionego dawnego władcę w ciężkiej klatce, gdzie jego obecność stawała się niemym wyrzutem wobec zwycięzców. Nie mógł już prowadzić wojowników ani sądzić ludzi, lecz dla części starych rodów wciąż pozostawał człowiekiem, któremu kiedyś przysięgano posłuszeństwo.",
        "Jego córka Runa i syn Sten należeli do pokolenia, które miało zapamiętać tę zmianę inaczej niż potomkowie Sigurda. Dawni stronnicy przestali mówić głośno o swoich żalach, lecz nie przestali ich odczuwać. Inni pragnęli przede wszystkim bezpieczeństwa: zimowych zapasów, spokojnego targu, statków gotowych do wypłynięcia. To, kto nosił naramiennik jarla, miało dla nich znaczenie wtedy, gdy decyzja władcy zaglądała do ich domów.",
        "Sigurd zdobył władzę, ale nie zakończył sporu. Każdy nowy rozkaz przypominał jednym o zwycięstwie, drugim o upokorzeniu. Rodzina jarla stała się zarazem rodziną zwycięzców i pokonanych. Hrafnvik miało jeszcze wielokrotnie przekonać się, że można odebrać człowiekowi oczy i tron, ale nie można rozkazać innym, by o nim zapomnieli."
      ],
      "participants": [
        "sigurd",
        "hroald",
        "runa",
        "sten"
      ]
    },
    {
      "id": "smierc-sigurda",
      "chapter": "I",
      "title": "Śmierć Sigurda i dziedzictwo Sianity",
      "placeId": "hrafnvik",
      "kind": "Dzieje osady",
      "image": "",
      "intro": "Niedługo po przewrocie zwycięski Sigurd został zamordowany. Córce pozostawił władzę, której nie zdążył ugruntować, i pytanie, kto po niego przyszedł.",
      "paragraphs": [
        "Śmierć Sigurda nadeszła, zanim nowy porządek zapuścił korzenie. Człowiek, który obalił własnego brata i przejął Hrafnvik, sam padł ofiarą zabójstwa. Osada znała już cenę rebelii, lecz tym razem nie mogła wskazać zwycięskiej strony. Nie zebrano wojowników do uroczystego ogłoszenia nowego panowania. Pozostała pustka po jarlu i pytanie, dlaczego ktoś postanowił zakończyć jego życie.",
        "Wraz z Sigurdem zniknął przedmiot znany jako Hrafnsauga, Oko Kruka. Mieszkańcy znali go jako osobliwy relikt, który należał do opowieści o rodzie jarla i dawnych bogach. Jego utrata sprawiła, że zabójstwo wydawało się czymś więcej niż zwykłą zemstą. Ludzie szeptali o człowieku bez rodu, o cudzym srebrze i szlakach prowadzących poza fiord. Nikt jednak nie potrafił przedstawić całej prawdy.",
        "Po Sigurdzie władzę objęła jego córka, Sianita. U jej boku stał brat Halward, zwany Snake-Eye, wyznawca Lokiego, chętniej szukający przewagi w rozmowie i podstępie niż w głośnych groźbach. Rodzeństwo odziedziczyło tytuł i obowiązki, lecz nie miało tego przywileju, który otrzymują spokojni następcy: czasu, aby oswoić się z nową rolą.",
        "W sali jarlowej zasiadali ludzie, którzy pamiętali Sigurda jako zwycięzcę. Nieopodal żyli ci, dla których był sprawcą upadku Hroalda. Wdowy pamiętały mężów zabitych podczas buntu; kupcy liczyli przyszłe zyski; kapłani obu wiar czekali na decyzje dotyczące ich świętych miejsc. Sianita musiała rządzić wśród tych spojrzeń. Zanim opowiedziano o jej pierwszych wyprawach, wiedziała już, że każda decyzja przywróci do życia czyjąś dawną krzywdę."
      ],
      "participants": [
        "sigurd",
        "sianita",
        "halvard",
        "hroald"
      ]
    },
    {
      "id": "sigrblot-roztopy",
      "chapter": "II",
      "title": "Sigrblót — święto pierwszych roztopów",
      "placeId": "hrafnvik",
      "kind": "Święto",
      "image": "",
      "intro": "Gdy zima ustąpiła miejsca pierwszemu błotu i spływającym lodom, Hrafnvik zebrało się na Sigrblót — pierwsze wielkie święto nowej jarlowej.",
      "paragraphs": [
        "Śnieg wciąż zalegał w cieniu dachów, lecz nad fiordem czuć już było wiosnę. Ziemia miękła pod butami, woda odrywała od brzegu resztki lodu, a powracające ptaki ogłaszały porę, w której drakkary znów wychodzą na morze. Ludzie smarowali burty smołą, naprawiali żagle i wypowiadali nazwy krain, do których chcieli dopłynąć. Pierwsze roztopy dawały poczucie początku, nawet jeśli dla wielu rodzin poprzedni rok nie zdążył się zakończyć.",
        "Na Sigrblót mieszkańcy przyszli z darami dla bogów, z miodem, pieśniami i nadzieją na zwycięski sezon. Śpiew Morotara Jednookiego mieszał się z rozmowami szkutników, kapłanów i wojowników. Astrid Freyjadóttir strzegła obyczaju starej wiary, brat Anselm rozmawiał z ludźmi, dla których nowa religia była coraz bliższa, a Eirik Żelazna Dłoń pilnował, aby świętowanie nie zamieniło się w kolejną bratobójczą walkę.",
        "Nie wszystkim toasty przechodziły przez gardło z taką samą łatwością. Stronnicy starego jarla Hroalda pamiętali dzień, w którym pozbawiono go oczu i tronu. Wierni Sigurdowi uważali jego zwycięstwo za konieczny początek nowego porządku. Teraz po obu stronach stali ludzie, których musiała prowadzić Sianita. Wystarczył jeden niewłaściwy żart, jedno wspomnienie zabitego krewnego, aby w świątecznej sali zapadła niewygodna cisza.",
        "Sigrblót miało być świętem odrodzenia, ale stało się także próbą dla nowej władzy. Ludzie przyglądali się jarlowej i jej towarzyszom, szukając odpowiedzi, czy będą rządzić dla wszystkich, czy tylko dla zwycięzców. Podobne pytanie czekało ich już nazajutrz podczas Thingu. Tej nocy przy ogniu nikt jednak jeszcze nie znał ceny nadchodzącej wiosny."
      ],
      "participants": [
        "sianita",
        "morotar",
        "hroald",
        "astrid"
      ]
    },
    {
      "id": "wezwanie-odyna",
      "chapter": "II",
      "title": "Wezwanie Jednookiego",
      "placeId": "hrafnvik",
      "kind": "Tajemnica",
      "image": "",
      "intro": "Gdy przycichły śpiewy Sigrblótu, Morotar Jednooki wezwał bohaterów w miejsce, gdzie głosy ludzi ustępują głosom dawnych bogów.",
      "paragraphs": [
        "Noc jeszcze nie dobiegła końca, gdy Morotar Jednooki odszedł od świątecznych ognisk. Nie potrzebował tłumu ani wielkich obwieszczeń. Ci, których wezwał, mieli opuścić ciepło sali, śmiech towarzyszy i zapach miodu. Ich droga prowadziła poza Hrafnvik, ku staremu miejscu kultu pamiętającemu czasy, gdy nie było tutaj chrześcijańskiego kościoła ani współczesnego jarla.",
        "Pod świętym miejscem znajdowała się jaskinia Odyna. Skałę poczernił dym wielu ofiar, a na kamieniu widniały runy wyżłobione przez dawno nieżyjące ręce. Światło ognia wydobywało z ciemności kruki, ślady starych znaków i kształty, których w zwykłej grocie nikt nie oczekiwałby ujrzeć. Bohaterowie nie znaleźli tam ani sali narad, ani łatwego zadania do wykonania. Stanęli przed doświadczeniem, które należało do porządku obrzędu, przysięgi i próby.",
        "To, co przeżyli, nie dało się przekazać później przy miodzie tak łatwo jak opis walki. Ogień, runy, krew i obrazy kruków splatały się ze wspomnieniami, a sens wizji pozostawał niejednoznaczny. Morotar wskazał im drogę, ale nie wyręczył ich w przejściu przez nią. Każdy musiał sam unieść ciężar tego, co zobaczył.",
        "Kiedy powrócili do osady, pozostali mieszkańcy mogli zobaczyć tych samych ludzi co poprzedniego wieczoru. Nie wiedzieli jednak, co zostało w ich pamięci. Od tej chwili pytania o zabójstwo Sigurda, utracone Oko Kruka i dawne znaki Północy miały dla drużyny osobisty wymiar. Wiosna zaczęła się od zwykłych roztopów; noc w jaskini przypomniała im, że świat jest znacznie większy od fiordu."
      ],
      "participants": [
        "sianita",
        "halvard",
        "ylva",
        "floki",
        "morotar"
      ]
    },
    {
      "id": "krew-na-thingu",
      "chapter": "II",
      "title": "Krew podczas Thingu",
      "placeId": "hrafnvik",
      "kind": "Prawo",
      "image": "",
      "intro": "Pierwszy Thing po śmierci Sigurda nie rozstrzygał jeszcze losów królestw. Musiał odpowiedzieć na pytanie, czy nowa jarlowa potrafi osądzić własnych ludzi.",
      "paragraphs": [
        "Po Sigrblócie na placu Hrafnviku zostały ślady uczty: rozlane napoje, błoto, puste naczynia i pamięć gwałtownej bójki. Na zgromadzenie przyszli mieszkańcy osady, wojownicy nowej drużyny oraz przedstawiciele dawnych rodów. Hroald, oślepiony i pozbawiony władzy, pozostawał widocznym świadectwem minionego buntu. Ragnvald Prawomówca przypominał prawo, ale to do jarlowej należało jego zastosowanie.",
        "Przed Thingiem stanęli Leif Anundsson i Styrbjorn Ragnsson. Pierwszy był gorliwym zwolennikiem władzy Sigurda i Sianity, drugi należał do ludzi pamiętających Hroalda. Podczas uczty padły słowa o zwycięstwie w rebelii. Styrbjorn odmówił toastu; Leif odpowiedział zniewagą. Gniew przeszedł w bójkę, pojawił się nóż i ciężki puchar. Gdy ucichła wrzawa, jeden z mężczyzn nosił ranę oka, a ich stronnicy przedstawiali sprzeczne wersje zajścia.",
        "Spór dwóch wojowników był tylko powierzchnią dawnej wojny. Ludzie Sigurda pytali, czy człowiek, który odmówił uczczenia zwycięstwa, może być traktowany na równi z jego zwolennikiem. Stronnicy Hroalda obserwowali, czy jarlowa zechce chronić swoich niezależnie od tego, kto zaczął. Dla Ragnvalda ważniejsze od gniewu było ustalenie, jak nowe rządy będą rozumiały sprawiedliwość.",
        "Wyrok i sposób wysłuchania stron stały się częścią pamięci osady. W Hrafnviku nie było jeszcze zgody na wspólną przeszłość; obie strony musiały jednak żyć razem, pracować, wypływać na morze i stanąć obok siebie w razie obcego najazdu. Thing przypomniał, że trzymanie miecza daje władzę nad walką, lecz utrzymanie pokoju wymaga czegoś trudniejszego: prawa, którego nie zmienia się zależnie od nazwiska oskarżonego."
      ],
      "participants": [
        "sianita",
        "leif",
        "styrbjorn",
        "ragnvald-p"
      ]
    },
    {
      "id": "swiete-drzewa",
      "chapter": "II",
      "title": "Święte drzewa Freyi",
      "placeId": "hrafnvik",
      "kind": "Wiara i prawo",
      "image": "",
      "intro": "Ścięte drzewa z gaju Freyi stały się początkiem sporu o wiarę, ziemię i granice władzy nowej jarlowej.",
      "paragraphs": [
        "Na skraju Hrafnviku powstawał chrześcijański kościół. Dla brata Anselma oznaczał miejsce modlitwy i opieki nad ludźmi, których przyciągnęła nowa wiara. Dla innych był znakiem zmian zachodzących w osadzie bez pytania dawnych bogów o zgodę. Cieśla Aslak i jego ludzie potrzebowali drewna na budowę. Ścięli kilka zdrowych, starych pni z pobliskiego gaju, nie traktując ich tak, jak traktowali je wyznawcy Freyi.",
        "Na korze i pozostałych pniach wciąż widniały ślady obrzędów odbywanych przed wiosennymi wyprawami. Astrid Freyjadóttir, vala związana ze starą wiarą, wystąpiła w obronie tego miejsca. Nie żądała wyłącznie odszkodowania za drewno. Pytała, czy wolno budować nowy dom modlitwy kosztem świętości, którą mieszkańcy uznawali od pokoleń, i czy ktokolwiek może samodzielnie zadecydować o końcu dawnego obyczaju.",
        "Przed Thingiem stanęli ludzie różnych przekonań. Aslak był cieślą, nie kapłanem; szukał materiału i pracy. Brat Anselm próbował bronić wspólnoty wiernych, a Astrid przypominała, że gaj należał do pamięci rodzin znacznie starszych od niedokończonego kościoła. Jarlowa musiała spojrzeć na konflikt bez łatwego podziału na swoich i obcych. Jedna decyzja mogła uspokoić jednych, a upokorzyć drugich.",
        "Sprawa zakończyła się wygnaniem Aslaka na pięć lat. Nie był on wówczas trallem ani jeńcem z obcej osady; utracił prawo do pozostania w Hrafnviku w wyniku wyroku. Później los spotkał go jeszcze cięższy. Hakon Czerwony, najbogatszy kupiec i właściciel niemal wszystkich miejscowych okrętów, porwał cieślę i uczynił własnym trallem. Człowiek, który kiedyś pracował jako wolny rzemieślnik, odtąd budował cudze statki wbrew własnej woli.",
        "Konflikt gaju nie zniknął razem z Aslakiem. W Hrafnviku nadal żyli ludzie Odyna i Freyi, chrześcijanie oraz ci, których bardziej od bogów obchodziły zapasy na zimę. Święte drzewa można było ściąć w jeden dzień. Zaufania między sąsiadami nie dało się odbudować równie szybko."
      ],
      "participants": [
        "sianita",
        "astrid",
        "anslem",
        "aslak",
        "hakon"
      ]
    },
    {
      "id": "dlug-krwi-svali",
      "chapter": "II",
      "title": "Dług krwi Svali",
      "placeId": "hrafnvik",
      "kind": "Prawo i ród",
      "image": "",
      "intro": "Svala Ketilsdóttir nie przyszła na Thing po litość. Zażądała, by nowa władza odpowiedziała za śmierć jej męża podczas dawnej rebelii.",
      "paragraphs": [
        "Na zgromadzeniu stanęła kobieta, której imię wielu znało od lat. Svala Ketilsdóttir była wdową po Ketilu Brandssonie. Jej mąż nie zginął w uczciwym starciu dwóch wojowników. Podczas rebelii Sigurda został pojmany, związany i zabity bez wyroku Thingu. Dla jednych pozostawał człowiekiem należącym do wrogiego obozu; dla Svali był mężem, którego odebrano jej w sposób, na jaki nie pozwalały dawne obyczaje.",
        "Przed jarlową przyniosła przecięty naramiennik Ketila. Nie potrzebowała krzyku, by przypomnieć, czym jest dług krwi. W Hrafnviku pamiętano ludzi, którzy wydali rozkazy w dniach buntu, lecz nie wszystkich można było dziś wskazać z pewnością. Spór dotyczył czegoś większego niż osoba jednego zabitego: czy ród, który odziedziczył tron i bogactwo Sigurda, odziedziczył również obowiązek naprawienia jego krzywd.",
        "Sianita nie była człowiekiem, który własną ręką zabił Ketila. To nie rozwiązywało problemu. Jako jarlowa miała dziś decydować o ziemi, srebrze, sprawiedliwości i losach rodzin, które żyły po obu stronach dawnego podziału. Svala nie żądała, by córka zapłaciła życiem za ojca. Żądała uznania, że śmierć męża nie może po prostu zniknąć z opowieści dlatego, że zwycięzcy noszą teraz pierścienie władzy.",
        "Svali przyznano ziemię i tralli. Było to zadośćuczynienie, które zmieniało jej pozycję w osadzie, choć żaden dar nie przywracał Ketilowi życia. Jej synowie Mord i Ulf dorastali w cieniu tego, co wydarzyło się podczas rebelii. Nie byli jedynie krewnymi kobiety występującej przed sądem — mieli wkrótce sami stanąć wobec decyzji dotyczących honoru, lojalności i przyszłości Hrafnviku.",
        "Pierwszy Thing zapisał więc w pamięci osady trzy rzeczy: bójkę ludzi dwóch obozów, spór o święte drzewa oraz dług wobec wdowy. Każda z nich wyglądała na lokalną sprawę, którą można zakończyć słowami jarla. Każda miała jednak wrócić w innej postaci, kiedy bohaterowie wyruszą poza bezpieczne brzegi własnego fiordu."
      ],
      "participants": [
        "svala",
        "sianita",
        "mord",
        "ulf"
      ]
    },
    {
      "id": "wiesci-z-polnocy",
      "chapter": "III",
      "title": "Wieści z północnego fiordu",
      "placeId": "hrafnvik",
      "kind": "Początek wyprawy",
      "image": "",
      "intro": "Pogłoski o zabójcy Sigurda skierowały spojrzenia wojowników ku Skjordvik.",
      "paragraphs": [
        "Do Hrafnviku dotarły wiadomości o człowieku łączonym ze śmiercią Sigurda, który miał znaleźć schronienie w osadzie Skjordvik na północnym fiordzie. Tamtejsi mieszkańcy byli Drengrami, tak samo jak ludzie Sianity, lecz dawne spory o łowiska i zobowiązania nigdy całkiem nie wygasły.",
        "Drużyna zebrała ludzi i wyruszyła morzem. Poszukiwanie sprawiedliwości zaczęło splatać się z polityką osad, ich bogactwem i gotowością wojowników do przemocy."
      ],
      "participants": [
        "sianita",
        "halvard",
        "haroks",
        "floki"
      ]
    },
    {
      "id": "ogien-i-srebro",
      "chapter": "III",
      "title": "Ogień i srebro — upadek Skjordvik",
      "placeId": "skjorvik",
      "kind": "Najazd",
      "image": "",
      "intro": "Skjordvik padło pod naporem wojowników Hrafnviku. Łupy i zwycięstwo nie wymazały cierpienia pokonanych.",
      "paragraphs": [
        "Najeźdźcy zdobyli osadę, a po walkach pozostały zniszczone domostwa, dym i pamięć o ludziach, którzy nie przeżyli. Część mieszkańców pojmano, a srebro i towary zabrano do Hrafnviku.",
        "To zwycięstwo zmieniło losy obu osad. Dla wojowników jarlowej było dowodem ich potęgi; dla ocalałych — krzywdą, której nie można było odkupić samymi darami. Aslak Cieśla nie pochodził z tej grupy jeńców: został później zniewolony osobno przez Hakona Czerwonego."
      ],
      "participants": [
        "sianita",
        "haroks",
        "halvard",
        "ragnvald-s",
        "orm"
      ]
    },
    {
      "id": "cena-najazdu",
      "chapter": "III",
      "title": "Zwycięstwo, które wróciło na Thing",
      "placeId": "hrafnvik",
      "kind": "Konsekwencje",
      "image": "",
      "intro": "Zniszczenie Skjordvik stało się ciężarem, który Hrafnvik poniosło aż na Wielki Althing.",
      "paragraphs": [
        "Po powrocie z wyprawy osada dysponowała nowym srebrem, zdobyczami i jeńcami. Jednocześnie rosły nieufność i pamięć o spalonych domach. W poszukiwaniu dalszych odpowiedzi wojownicy przebyli także niebezpieczną Kruczą Gardziel — jeden z etapów ich pierwszych wypraw.",
        "Wieści o najazdzie dotarły do innych władców. To, co w Hrafnviku opowiadano jako zwycięstwo, na Eylendzie miało zostać przedstawione przed sądem jako sprawa krwi, odpowiedzialności i prawa jarlowej."
      ],
      "participants": [
        "sianita",
        "halvard",
        "mord",
        "hakon"
      ]
    },
    {
      "id": "trzynascie-pierscieni",
      "chapter": "IV",
      "title": "Trzynaście pierścieni króla",
      "placeId": "hrafnvik",
      "kind": "Poselstwo",
      "image": "",
      "intro": "Alrek Eriksson przysłał Sianicie dary i wojowników, a wraz z nimi oczekiwanie wierności.",
      "paragraphs": [
        "Przed podróżą na Eylendę do Hrafnviku dotarł wysłannik Alreka Erikssona, króla Hordalandu. Przywiózł ozdobny naramiennik, trzynastu wojowników oraz pierścienie przysięgi. Dar mógł być znakiem uznania i ochrony, ale zawierał też żądanie politycznego zobowiązania.",
        "Władza nad niewielką osadą coraz wyraźniej stykała się z ambicjami królów. Jarlowa miała niebawem odpowiedzieć na te oczekiwania osobiście, na zgromadzeniu Północy."
      ],
      "participants": [
        "sianita",
        "alrek",
        "halvard"
      ]
    },
    {
      "id": "glosy-althingu",
      "chapter": "IV",
      "title": "Wielki Althing Eylendy",
      "placeId": "ejkjavik",
      "kind": "Zgromadzenie",
      "image": "",
      "intro": "Na niezależnej Eylendzie zebrały się głosy królów, jarlów i ich poselstw.",
      "paragraphs": [
        "W obozach wokół Althingu spotkali się władcy czterech królestw Drengrlands oraz przedstawiciele niezależnych jarldomów. Uczty i rozmowy dotyczyły ziem za morzem, nowej wojny oraz tego, czy Północ powinna podporządkować się jednemu królowi.",
        "Bohaterowie Hrafnviku przybyli nie tylko słuchać. Poznawali możnych, zdobywali informacje, zawierali znajomości i zabiegali o względy ludzi, których głosy mogły zaważyć na przyszłości ich osady."
      ],
      "participants": [
        "sianita",
        "halvard",
        "haroks",
        "ylva",
        "floki",
        "mord"
      ]
    },
    {
      "id": "korony-i-odmowy",
      "chapter": "IV",
      "title": "Korony, przysięgi i odmowy Sianity",
      "placeId": "ejkjavik",
      "kind": "Dyplomacja",
      "image": "",
      "intro": "Jarlowa odrzuciła żądania Alreka, a wśród możnych Vestmaru poznała trzy oblicza politycznej rywalizacji.",
      "paragraphs": [
        "Halfdan Czarny z Agderu rozmawiał z Sianitą o wojnie przeciw Frankom i sprawie Króla Królów. Alrek Eriksson z Hordalandu oczekiwał przysięgi wierności i zaoferował jarlowej małżeństwo ze swoim synem w zamian za bezpieczeństwo jej ludzi. Sianita odmówiła zarówno przysięgi, jak i małżeństwa.",
        "Na Althingu spotkała również Olafa, Alfhelda i Torstena Gudrodssonów, braci walczących o przyszłość Vestmaru. Olaf domagał się surowej kary dla jarlowej; Alfheld widział dla niej wygnanie, a Torsten dostrzegał możliwość współpracy. Ich odmienne stanowiska ukazały rozdarcie królestwa."
      ],
      "participants": [
        "sianita",
        "halfdan",
        "alrek",
        "olaf-gudrodsson",
        "alfheld-gudrodsson",
        "torsten-gudrodsson"
      ]
    },
    {
      "id": "trzy-glosowania",
      "chapter": "IV",
      "title": "Trzy decyzje Północy",
      "placeId": "ejkjavik",
      "kind": "Wielka polityka",
      "image": "",
      "intro": "Winland, korona dla wszystkich królów i wojna z Frankami odmieniły rozmowy na Eylendzie.",
      "paragraphs": [
        "W sprawie Winlandu tylko Eylenda i Fjordane zadeklarowały rzeczywiste finansowe wsparcie dalszych przedsięwzięć. Nie ustanowiono Króla Królów. Sianita pozostała neutralna wobec tej korony, lecz poparła wyprawę przeciw Frankom.",
        "Większość możnych opowiedziała się za wielką wojną, do której miały przygotowywać się ziemie Drengrlands. Za publicznymi wystąpieniami trwały negocjacje i zabiegi o głosy, w których uczestniczył również Halward, brat jarlowej."
      ],
      "participants": [
        "sianita",
        "halvard",
        "halfdan",
        "alrek",
        "audbjorn"
      ]
    },
    {
      "id": "sad-dziewieciu",
      "chapter": "IV",
      "title": "Sąd dziewięciu — wyrok dla jarlowej",
      "placeId": "ejkjavik",
      "kind": "Proces",
      "image": "",
      "intro": "Sprawa spalonego Skjordvik powróciła przed obliczem dziewięciu sędziów.",
      "paragraphs": [
        "Olaf Gudrodsson publicznie podniósł sprawę zniszczonej osady. Świadkowie nie rozpoznali napastników, a Mord przyznał się do udziału w wyprawie i działania dla jarlowej. Sianita potwierdziła wydarzenia i przemówiła do zgromadzonych.",
        "Trzech sędziów opowiedziało się za brakiem sankcji, sześciu za oddaniem sprawy w ręce bogów. Drużyna otrzymała zadanie odzyskania Gungnir, włóczni Odyna, z kurhanu Haralda Hardrady. Taki był wyrok Eylendy."
      ],
      "participants": [
        "sianita",
        "olaf-gudrodsson",
        "mord",
        "orm",
        "halvard"
      ]
    },
    {
      "id": "pustkowia-eylendy",
      "chapter": "V",
      "title": "Na drodze do krainy umarłych",
      "placeId": "eylenda",
      "kind": "Wyprawa",
      "image": "",
      "intro": "Wyprawa po Gungnir poprowadziła bohaterów przez ziemię, która zdawała się odmawiać im przejścia.",
      "paragraphs": [
        "Za obozami Althingu czekały Czarne Piaski Zapomnienia, gdzie wiatr zacierał ślady wędrowców. Dalej drużyna dotarła do Rzeki Umarłych Koni i niebezpiecznej przeprawy, podczas której poświęcono cenne runy.",
        "Każdy etap oddalał wojowników od świata zwykłych osad i świąt. Mimo zmęczenia ruszyli dalej, ku górze i kurhanom, w których miał spoczywać Harald Hardrada."
      ],
      "participants": [
        "sianita",
        "halvard",
        "haroks",
        "floki",
        "ylva",
        "mord"
      ]
    },
    {
      "id": "ogien-i-olbrzymy",
      "chapter": "V",
      "title": "Ziemia ognia i olbrzymów",
      "placeId": "eylenda",
      "kind": "Próby Eylendy",
      "image": "",
      "intro": "Popiół, rozpalona ziemia i spotkania z istotami dawnych opowieści naznaczyły drogę ku kurhanom.",
      "paragraphs": [
        "Wędrowcy przekraczali wulkaniczne pustkowia, w których płynny ogień wydobywał się spod pękającej skały. W dolinie olbrzymów napotkali trolla więzionego w wielkiej klatce. Nie uwolnili go i pozostawili jego wołanie za sobą.",
        "Ziemia Eylendy wydawała się coraz mniej gościnna. Każdy kolejny krok wymagał odwagi, ale też wyboru, komu pomagać, a kiedy ocalić przede wszystkim własnych towarzyszy."
      ],
      "participants": [
        "haroks",
        "sianita",
        "ylva",
        "floki"
      ]
    },
    {
      "id": "gospodarstwo-zapomnianych",
      "chapter": "V",
      "title": "Gospodarstwo tych, którzy zapomnieli o śmierci",
      "placeId": "eylenda",
      "kind": "Spotkanie z duchami",
      "image": "",
      "intro": "Na odludziu bohaterowie spotkali gospodarzy, których pamięć zatrzymała się po śmierci.",
      "paragraphs": [
        "W opuszczonym gospodarstwie przebywały dusze ludzi nieświadomych własnego losu. Dawne krzywdy i zapomniane mogiły wiązały ich z miejscem, do którego nie należeli już jako żywi.",
        "Drużyna pomogła im poznać prawdę i odejść ku Helheimowi. Była to jedna z prób, w których współczucie i cierpliwość okazały się cenniejsze od miecza."
      ],
      "participants": [
        "sianita",
        "ylva",
        "haroks",
        "floki"
      ]
    },
    {
      "id": "kurhan-gungnir",
      "chapter": "V",
      "title": "Kurhan Haralda Hardrady — cena Gungnira",
      "placeId": "hardrada-mound",
      "kind": "Heroiczny czyn",
      "image": "",
      "intro": "Bohaterowie zdobyli włócznię Odyna, lecz wyprawa zabrała wielu spośród ich towarzyszy.",
      "paragraphs": [
        "Pośród mogił i draugrów drużyna dotarła do kurhanu Haralda Hardrady. W ostatnim starciu odzyskała Gungnir, legendarną włócznię Odyna. Zdobycz była dowodem, że wyrok Althingu został wypełniony.",
        "Za zwycięstwo zapłacono krwią. Polegli Floki, szkutnik i wizjoner, oraz Mord, syn Svali. W czasie wyprawy zginęło też dziesięciu wojowników związanych z drużyną przysięgą krwi — dziesięciu braci krwi, których imiona zasługiwały na pamięć równie mocno jak imiona wielkich bohaterów."
      ],
      "participants": [
        "sianita",
        "halvard",
        "haroks",
        "ylva",
        "floki",
        "mord"
      ]
    },
    {
      "id": "powrot-i-pogrzeby",
      "chapter": "V",
      "title": "Powrót z Gungnirem — pamięć żywych i umarłych",
      "placeId": "hrafnvik",
      "kind": "Powrót",
      "image": "",
      "intro": "Zwycięzcy wrócili z włócznią Odyna, ale nie ze wszystkimi, którzy wyruszyli z nimi.",
      "paragraphs": [
        "Drużyna przyniosła Gungnir na Althing. Sędziowie nie ustalili, komu ma przypaść włócznia, więc pozostała przy bohaterach. Wkrótce ziemią Eylendy wstrząsnęły erupcje wulkanów. Po dalszej żegludze ludzie Hrafnviku ujrzeli znów własne brzegi.",
        "Morda pochowała rodzina. Ciało Flokiego spoczęło w kadłubie jego niedokończonego statku, przeniesionego do świętego lasu Odyna. Miejscowy kowal wyrzeźbił kamień runiczny upamiętniający jego ostatnią walkę. Pamiętano także o dziesięciu poległych braciach krwi: zwycięstwo było wielkie, lecz strata nieodwracalna."
      ],
      "participants": [
        "sianita",
        "haroks",
        "floki",
        "mord",
        "ulf",
        "asgrim"
      ]
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
     description: "Po śmierci Gudroda Łowcy jego synowie Olaf, Alfheld i Torsten znaleźli się po przeciwnych stronach walki o dziedzictwo. Vestmar pozostał podzielony między ich trzy obozy i gildisbroedr."},
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
      image: "assets/locations/eylenda.svg", personIds: ["sianita","halvard","haroks","ylva","floki","asgrim","mord"]
    },
    {
      id: "ejkjavik", name: "Ejkjavik", kind: "Osada", visibility: "known", parentRegionId: "eylenda",
      description: "Osada na Eylendzie, w której odbywa się Wielki Althing — zgromadzenie jarlów, przysiąg i rozstrzygania sporów.",
      history: "W Ejkjaviku podczas Wielkiego Althingu omawiano wyprawę do Winlandu, wojnę z Frankami i ideę Króla Królów. Althing jest nazwą zgromadzenia; Ejkjavik to nazwa osady, która je gości.",
      image: "assets/locations/althing.svg", personIds: ["sianita","halvard","haroks","ylva","floki","mord"]
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
      image: "", personIds: ["sianita","halvard","haroks","ylva","floki","mord"]
    },
    {
      id: "hrafnvik", name: "Hrafnvik", kind: "Osada bohaterów", visibility: "known", parentRegionId: "osady-bohaterow",
      description: "Osada, w której brat wystąpił przeciw bratu, a przelana krew zmieniła porządek władzy. Tutaj rozpoczęła się opowieść o Sianicie, Halwardzie i ludziach, których losy odmieniła śmierć jarla Sigurda.",
      history: "Hroald utracił władzę i wzrok, a jego brat Sigurd objął miejsce jarla. Wkrótce Sigurd został zamordowany, a Sianita przejęła odpowiedzialność za osadę. W Hrafnviku pamięta się zarówno rozlew krwi, jak i tych, którzy zginęli podczas późniejszych wypraw.",
      image: "assets/locations/Hrafnvik.png", personIds: ["sigurd","hroald","runa","sten","sianita","halvard","asgrim","svala","mord","ulf","erik","ragnvald-p","styrbjorn","leif","hakon","floki","aslak","torvald","morotar","astrid","anslem","haroks","ylva"]
    },
    {
      id: "skjorvik", name: "Skjordvik", kind: "Osada", visibility: "known", parentRegionId: "drengrlands",
      description: "Osada zdobyta ogniem i żelazem przez wojowników Hrafnviku. Zwycięzcy zabrali stąd srebro, łupy i jeńców, lecz dla pokonanych dzień najazdu stał się początkiem zupełnie innej historii.",
      history: "Wojownicy Hrafnviku zdobyli osadę, zabierając srebro, towary i jeńców. Dla najeźdźców był to triumf, dla mieszkańców Skjordvik — dzień straty, o którym trudno zapomnieć. Aslak Cieśla nie został pojmany podczas tego najazdu: wcześniej był wolnym rzemieślnikiem Hrafnviku, a po wyroku wygnania porwał go kupiec Hakon Czerwony i uczynił swoim trallem.",
      image: "assets/locations/skjorvik.svg", personIds: ["haki","ragnvald-s","orm"]
    }
  ]
};
