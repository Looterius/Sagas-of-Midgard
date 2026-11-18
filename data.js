// Dane PUBLICZNE — nigdy nie umieszczaj tu sekretów Skalda.
// image: np. "assets/hroald.webp" po dodaniu zdjęcia do repozytorium.
window.CHRONICLE = {
  title: "Sagas of Midgard",
  subtitle: "Kronika graczy • Eylenda",
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
      "description": "Sigurd zdobył władzę w Hrafnviku po rebelii przeciw własnemu bratu Hroaldowi. Pokonanego jarla pozbawił wzroku i tronu, lecz zwycięstwo nie zakończyło dawnych sporów. Sigurd był ojcem Sianity Gunnarsdóttir i Halvarda „Snake-Eye”, którym pozostawił skomplikowane dziedzictwo. Wkrótce sam został zamordowany. Jego śmierć wyniosła Sianitę na czoło osady i pozostawiła pytania o zabójcę, dawne przysięgi oraz cenę zdobytej władzy.",
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
      "description": "Hroald niegdyś władał Hrafnvikiem. Jego własny brat Sigurd obalił go podczas rebelii, odebrał mu władzę i kazał pozbawić wzroku. Podczas wiosennych zgromadzeń starego jarla wystawiano w ciężkiej klatce, pod strażą ludzi nowej władzy. Utracił tron, lecz nie znaczenie: pamięć o jego panowaniu nadal dzieli osadę. Jest ojcem Runy i Stena, a zarazem wujem Sianity i Halvarda. Dla starych rodów pozostaje żywym przypomnieniem dawnych przysiąg. Hroald uznawał Alreka Erikssona z Hordalands za swojego konunga. Po jego obaleniu kwestia tej dawnej zwierzchności powróciła wobec nowej jarlowej.",
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
      "description": "Runa jest córką oślepionego jarla Hroalda i siostrą Stena. Po obaleniu ojca pozostała blisko starego rodu, zachowując godność również wtedy, gdy inni świętowali zwycięstwo Sigurda. Na zgromadzeniach nie urządza demonstracji: sam sposób, w jaki odmawia toastu za dawną rebelię, mówi mieszkańcom Hrafnviku dość. Jako kuzynka Sianity i Halvarda łączy oba odłamy rodziny, chociaż historia ich ojców wciąż stoi między nimi.",
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
      "name": "Halvard „Snake-Eye”",
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
      "description": "Halvard, znany jako „Snake-Eye”, jest synem Sigurda i bratem jarlowej Sianity. Jako wyznawca Lokiego woli podstęp, negocjacje i grę wpływów od prostych deklaracji. Na Althingu Eylendy zabiegał o poparcie dla drużyny, prowadząc trudne rozmowy z przedstawicielami innych krain. To, co robił w cieniu politycznych sporów, miało znaczenie równie wielkie jak publiczne przemówienia siostry.",
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
      "description": "Hakon Czerwony jest najbogatszym mieszkańcem Hrafnviku i właścicielem niemal całej floty osady. Zarządza statkami, warsztatami i handlem; gdy trzeba wypłynąć na rajd lub przygotować poselstwo, jego okręty i srebro ważą wiele. Dawniej zatrudniał Flokiego, wybitnego szkutnika, lecz ich współpraca zakończyła się konfliktem. Teraz w jego szopie pracuje chrześcijański cieśla Aslak. Hakon umie przeliczyć każdy ładunek na zysk i doskonale rozumie, jak silnie jarl zależy od ludzi, którzy utrzymują port.",
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
        ],
        "familyIds": [
          "rod-morotara"
        ]
      },
      "image": "assets/portraits/843041093_29439569015649515_6290487889105704541_n.jpg",
      "description": "Floki był znakomitym szkutnikiem i wizjonerem Hrafnviku. Budował okręty, niegdyś pracując dla Hakona Czerwonego, z którym później się poróżnił. Pomógł Torvaldowi Kowalowi powrócić od chrześcijaństwa do wiary w Thora i Odyna. W jednej ze swoich wizji zobaczył możliwość zbudowania statku zdolnego żeglować po gałęziach Yggdrasilu. Podczas wyprawy po Gungnir na Eylendzie poniósł śmierć w starciu z Haraldem Hardradą. Haroks złożył jego ciało w niedokończonym statku w lesie Odyna. Floki pozostał bohaterem sagi — lecz zmarłym. Jego bratem był Haroks Magnusson, a przybranym ojcem obydwu Morotar Jednooki. Pożegnanie Flokiego przez Haroksa było zatem nie tylko ostatnim hołdem wojownika, lecz także rozstaniem dwóch braci.",
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
          "hrafnvik",
          "skjorvik"
        ]
      },
      "image": "assets/portraits/Aslak Cieśla.png",
      "description": "Aslak, chrześcijański cieśla Hrafnviku, pracował przy budowie nowego kościoła. Spór wybuchł, gdy robotnicy ścięli stare drzewa z gaju od pokoleń poświęconego Freyi. Sprawa Aslaka trafiła przed Thing, stawiając prawo i dwie religie naprzeciw siebie. Po wyroku jego losy związały się z Hakonem Czerwonym, najbogatszym kupcem osady, w którego warsztacie okrętowym pracuje teraz jako rzemieślnik. Jego historia przypomina, że spór o święte miejsca dotyka również zwyczajnego człowieka, jego pracy i wolności.",
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
        ],
        "familyIds": [
          "rod-morotara"
        ]
      },
      "image": "assets/portraits/Morotar Jednooki.png",
      "description": "Morotar Jednooki jest skaldem, śpiewakiem i strażnikiem opowieści Hrafnviku. Podczas uczt potrafi rozśmieszyć zarówno wojowników nowej władzy, jak i ludzi pamiętających czasy Hroalda. Jego pieśni zachowują imiona poległych, czyny żywych oraz opowieści, które łatwo zagubić pod ciężarem łupów i srebra. To on nadaje słowom wydarzeń miejsce w sadze: przypomina, że sława może przetrwać dłużej niż uczta i że pamięć nie wybiera jedynie zwycięzców. Morotar jest przybranym ojcem Flokiego i Haroksa. Wspólne lata z dwoma synami uczyniły ich rodziną mimo braku więzów krwi. Śmierć Flokiego obciążyła więc także jego pamięć osobistym bólem.",
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
        ],
        "familyIds": [
          "rod-astrid"
        ]
      },
      "image": "assets/portraits/Astrid Freyjadottir.png",
      "description": "Astrid Freyjadóttir, vala Freyi, należy do najważniejszych strażniczek starej wiary w Hrafnviku. Przyjmuje dary, przewodzi rytuałom i cieszy się autorytetem wśród wojowników i gospodarzy. Stanęła po stronie świętości dawnego gaju, kiedy cieśle pracujący nad kościołem ścięli drzewa używane podczas obrzędów. Jako matka Ylvy, łuczniczki drużyny, łączy religijny obowiązek z troską o własną córkę. W czasach przemiany osady jej głos przypomina o przysięgach składanych dawnym bogom.",
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
        ],
        "familyIds": [
          "rod-morotara"
        ]
      },
      "image": "assets/portraits/819106917_1403096258558492_2259915694493588498_n.jpg",
      "description": "Haroks Magnusson jest potężnym berserkerem z drużyny Hrafnviku, wojownikiem związanym z niedźwiedzią naturą. Podczas pobytu na Eylendzie spotkał Úlfhéðnarów, wojowników wilczej tradycji Odyna, którzy poddali go brutalnej próbie, pragnąc obudzić jego własną przemianę. Jego droga nie sprowadza się jednak do samej siły. Po śmierci swego brata Flokiego Haroks osobiście go pożegnał, składając jego ciało w niedokończonym statku w lesie Odyna. Ten gest zapisał się w sadze równie mocno jak walki. Wychowywał się razem z Flokim pod opieką przybranego ojca, Morotara Jednookiego, którego łączy z braćmi więź silniejsza niż wspólne wyprawy.",
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
        ],
        "familyIds": [
          "rod-astrid"
        ]
      },
      "image": "assets/portraits/836713553_1631673708686109_4202120061548436723_n.png",
      "description": "Ylva jest łuczniczką drużyny Hrafnviku, często przedstawianą z sową u boku. Tam, gdzie wojownicy wolą otwartą walkę, jej łuk, cierpliwość i czujność pozwalają dostrzegać więcej. Towarzyszyła wyprawom drużyny oraz uczestniczyła w wydarzeniach Wielkiego Althingu na Eylendzie. Wśród przedstawicieli różnych krain, wojowników i wyznawców dawnych bogów poznawała obyczaje oraz opowieści, które wykraczały poza codzienność rodzinnej osady. Jej droga wciąż wiedzie przez nieznane szlaki, gdzie opowieści Północy dopiero nabierają kształtu. Jej matką jest Astrid Freyjadóttir, vala Freyi i strażniczka dawnych obrzędów Hrafnviku, której wiara i troska towarzyszyły Ylvie od młodości.",
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
          "skjorvik",
          "hrafnvik"
        ],
        "statuses": [
          "captive"
        ]
      },
      "image": "assets/portraits/Ragnvald Skjoldsson.png",
      "description": "Ragnvald Skjoldsson był przywódcą Skjǫrviku, osady zaatakowanej przez wojowników Hrafnviku. Podczas najazdu został pojmany i przewieziony ze swojej zniszczonej osady do Hrafnviku jako jeniec. Utracił wolność oraz dawną pozycję. Jego los łączy historię zwycięskich najeźdźców z historią pokonanych mieszkańców Skjǫrviku i przypomina, że dla dwóch stron ta sama wyprawa oznacza zupełnie odmienne doświadczenie.",
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
      "description": "Haki Torfinnsson jest rybakiem i przemytnikiem ze Skjǫrviku, przywykłym do zatok, straży i niebezpiecznych szlaków między wybrzeżami. W czasie najazdu wojowników Hrafnviku znalazł się pomiędzy bezpieczeństwem własnym a lojalnością wobec przywódców osady. Znał drogi, hasła i rytm patroli, dlatego jego wiedza mogła ważyć więcej niż miecz. W kronice pozostaje jednym z ludzi, którzy pokazują wydarzenia wyprawy z perspektywy mieszkańców napadniętego brzegu.",
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
      "description": "Orm Półgłos był rybakiem ze Skjǫrviku, osady zniszczonej podczas najazdu wojowników Hrafnviku. Znał miejscowe wody, szlaki i ludzi przybywających od strony morza. Gdy ogień i żelazo spadły na jego dom, los Orma związał się ze sporem pomiędzy napastnikami a ocalałymi mieszkańcami. Pozostał jednym z tych, którzy mogą opowiedzieć o wydarzeniach z perspektywy pokonanej osady, a nie jej zdobywców.",
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
      "description": "Alrek Eriksson jest królem Hordalands, krainy, której siła opiera się na portach, handlu i flotach kupieckich. Jego dwór znajduje się w Innrihólmur, a Alrekstad pozostaje jednym z głównych ośrodków rodu. Podczas Wielkiego Althingu na Eylendzie uczestniczył w sporach między królami o przyszłość ziem Drengrów. Hroald, dawny jarl Hrafnviku, uznawał Alreka za swojego konunga. Alrek zażądał od Sianity uznania zwierzchnictwa i złożenia przysięgi, a także zaoferował jej swojego syna za męża. Sianita odmówiła zarówno przysięgi, jak i małżeństwa. W polityce łączy interes królestwa z uważnym szacowaniem wpływów pozostałych władców.",
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
    },
    {
      "from": "floki",
      "to": "haroks",
      "type": "family",
      "label": "Bracia"
    },
    {
      "from": "morotar",
      "to": "floki",
      "type": "family",
      "label": "Przybrany ojciec i syn"
    },
    {
      "from": "morotar",
      "to": "haroks",
      "type": "family",
      "label": "Przybrany ojciec i syn"
    },
    {
      "from": "astrid",
      "to": "ylva",
      "type": "family",
      "label": "Matka i córka"
    },
    {
      "from": "alrek",
      "to": "hroald",
      "type": "other",
      "label": "Konung uznawany przez Hroalda"
    },
    {
      "from": "alrek",
      "to": "sianita",
      "type": "other",
      "label": "Odrzucona przysięga i propozycja małżeństwa z królewskim synem"
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
      },
      {
        "id": "rod-morotara",
        "name": "Rodzina Morotara",
        "visibility": "known"
      },
      {
        "id": "rod-astrid",
        "name": "Rodzina Astrid i Ylvy",
        "visibility": "known"
      }
    ],
    "factions": []
  },

  // Kronika PUBLICZNA: wyłącznie wydarzenia znane graczom. Nie wpisuj tu sekretów Skalda.
  chronicle: [
    {
      id: "upadek-jarla", chapter: "I", title: "Upadek starego jarla",
      placeId: "hrafnvik", kind: "Dzieje osady", image: "",
      intro: "W Hrafnviku stary porządek ustąpił miejsca nowemu, lecz spór o władzę nie zakończył się wraz ze zmianą jarla.",
      paragraphs: [
        "W Hrafnviku brat wystąpił przeciw bratu. Hroald utracił władzę i wzrok, a Sigurd zajął jego miejsce. Historia osady nabrała ciężaru, którego nie dało się już zrzucić z barków jednej rodziny.",
        "Nie minęło wiele czasu, gdy Sigurd został odnaleziony martwy. Jego śmierć otworzyła nowy rozdział sporów, przysiąg i pytań o to, komu przypadnie prawo przewodzenia ludziom Hrafnviku."
      ], participants: ["hroald","sigurd","sianita"]
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
      ], participants: ["sianita","halvard","haroks","ylva","floki","mord"]
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
      description: "Osada, w której brat wystąpił przeciw bratu, a przelana krew zmieniła porządek władzy. Tutaj rozpoczęła się opowieść o Sianicie, Halvardzie i ludziach, których losy odmieniła śmierć jarla Sigurda.",
      history: "Hroald utracił władzę i wzrok, a jego brat Sigurd objął miejsce jarla. Wkrótce Sigurd został zamordowany, a Sianita przejęła odpowiedzialność za osadę. W Hrafnviku pamięta się zarówno rozlew krwi, jak i tych, którzy zginęli podczas późniejszych wypraw.",
      image: "assets/locations/Hrafnvik.png", personIds: ["sigurd","hroald","runa","sten","sianita","halvard","asgrim","svala","mord","ulf","erik","ragnvald-p","styrbjorn","leif","hakon","floki","aslak","torvald","morotar","astrid","anslem","haroks","ylva","ragnvald-s"]
    },
    {
      id: "skjorvik", name: "Skjǫrvik", kind: "Osada", visibility: "known", parentRegionId: "drengrlands",
      description: "Osada zdobyta ogniem i żelazem przez wojowników Hrafnviku. Zwycięzcy zabrali stąd srebro, łupy i jeńców, lecz dla pokonanych dzień najazdu stał się początkiem zupełnie innej historii.",
      history: "Wojownicy Hrafnviku zdobyli osadę, zabierając srebro, towary i jeńców. Wśród pojmanych znalazł się Aslak Cieśla. Dla najeźdźców był to triumf, dla mieszkańców Skjǫrviku — dzień straty, o którym trudno zapomnieć.",
      image: "assets/locations/skjorvik.svg", personIds: ["aslak","haki","ragnvald-s","orm"]
    }
  ]
};
