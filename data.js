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
      "description": "Hroald niegdyś władał Hrafnvikiem. Jego własny brat Sigurd obalił go podczas rebelii, odebrał mu władzę i kazał pozbawić wzroku. Podczas wiosennych zgromadzeń starego jarla wystawiano w ciężkiej klatce, pod strażą ludzi nowej władzy. Utracił tron, lecz nie znaczenie: pamięć o jego panowaniu nadal dzieli osadę. Jest ojcem Runy i Stena, a zarazem wujem Sianity i Halwarda. Dla starych rodów pozostaje żywym przypomnieniem dawnych przysiąg. Hroald uznawał Alreka Erikssona z Hordalands za swojego konunga. Po jego obaleniu kwestia tej dawnej zwierzchności powróciła wobec nowej jarlowej.",
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
        ],
        "factionIds": [
          "druzyna-hrafnviku"
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
        ],
        "factionIds": [
          "druzyna-hrafnviku"
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
        ],
        "familyIds": [
          "rod-halfdana"
        ],
        "factionIds": [
          "druzyna-hrafnviku"
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
        ],
        "familyIds": [
          "rod-morotara"
        ],
        "factionIds": [
          "czciciele-odyna",
          "druzyna-hrafnviku"
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
        ],
        "factionIds": [
          "czciciele-odyna"
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
        ],
        "factionIds": [
          "berserkerzy",
          "druzyna-hrafnviku"
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
        ],
        "factionIds": [
          "druzyna-hrafnviku"
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
      "description": "Ragnvald Skjoldsson był przywódcą Skjordviku, osady zaatakowanej przez wojowników Hrafnviku. Podczas najazdu został pojmany i przewieziony ze swojej zniszczonej osady do Hrafnviku jako jeniec. Utracił wolność oraz dawną pozycję. Jego los łączy historię zwycięskich najeźdźców z historią pokonanych mieszkańców Skjordviku i przypomina, że dla dwóch stron ta sama wyprawa oznacza zupełnie odmienne doświadczenie.",
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
        ],
        "familyIds": [
          "rod-halfdana"
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
      },
      {
        "id": "rod-halfdana",
        "name": "Ród Halfdana Czarnego",
        "visibility": "known"
      }
    ],
    "factions": [
      {
        "id": "druzyna-hrafnviku",
        "name": "Drużyna Hrafnviku",
        "visibility": "known"
      },
      {
        "id": "berserkerzy",
        "name": "Berserkerzy",
        "visibility": "known"
      },
      {
        "id": "czciciele-odyna",
        "name": "Czciciele Odyna",
        "visibility": "known"
      }
    ]
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
      "intro": "Wieść o człowieku podejrzewanym o zabójstwo Sigurda dotarła do Hrafnviku z północnego fiordu. Ślad prowadził do Skjordvik.",
      "paragraphs": [
        "Po pierwszych wyrokach Thingu Hrafnvik nie zdążył jeszcze odzyskać spokoju, gdy przybyły wiadomości z północy. Ktoś widział człowieka łączonego z morderstwem Sigurda — człowieka, którego poszukiwano od czasu zniknięcia Oka Kruka. Miał znaleźć schronienie w Skjordvik, osadzie leżącej kilka dni żeglugi od Hrafnviku, gdzie kamienisty brzeg i wąski fiord osłaniały domy przed otwartym morzem.",
        "Nie była to ziemia całkowicie obca. Mieszkańcy Skjordvik mówili podobną mową, znali te same pieśni i oddawali cześć tym samym bogom. Od pokoleń ich fiordy łączyły szlaki handlowe, a rozdzielały spory o ryby, granice łowisk, małe wyspy i pamięć dawnych zobowiązań. W jednej osadzie mówiono o uczciwym schronieniu dla przybysza; w drugiej o człowieku, którego należało wydać, zanim uciekł ponownie.",
        "Dla Sianity wieść miała znaczenie inne niż dla tych, którzy liczyli tylko zdobyczne srebro. Sigurd był jej ojcem. Jego śmierć pchnęła ją ku władzy, o którą nie zabiegała w spokojnych czasach. Każdy kolejny ślad obiecywał możliwość poznania prawdy, ale też groził następną waśnią. Halward i pozostali bohaterowie stali przed wyborem, czy po odpowiedź wyruszyć z poselstwem, garścią towarzyszy, czy całą wojenną drużyną.",
        "Zebrano ludzi i okręty. Miecze ostrzono nie tylko z pragnienia łupu; wielu wojowników wierzyło, że wyprawa przywróci honor zabitemu jarlowi i pokaże sąsiadom siłę jego następczyni. Inni myśleli o złocie i jeńcach. Na morzu obie motywacje często płyną na jednym statku. Gdy brzeg Hrafnviku zniknął za rufami, nikt nie potrafił jeszcze powiedzieć, która z nich okaże się ważniejsza.",
        "Tak rozpoczęła się wyprawa, która miała przynieść bogactwo jednej osadzie i ruinę drugiej. Zabójcy Sigurda nie przyprowadzono wtedy w kajdanach. Za to płomień najazdu rozpalił nowy konflikt, który później powrócił aż przed sąd królów i jarlów na Eylendzie."
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
      "intro": "Wojownicy Hrafnviku zdobyli Skjordvik. Z fiordu zabrali srebro i jeńców; po sobie zostawili zniszczenie, którego pamięć miała przetrwać zwycięskie pieśni.",
      "paragraphs": [
        "Skjordvik leżało pod ciemnymi zboczami północnego fiordu. Domy stały nisko, w cieniu skał, a łodzie wyciągano wysoko na kamienistą plażę, żeby uchronić je przed sztormem. Mieszkańcy żyli z morza, handlu i pracy własnych rąk. Niewielu mogło przypuszczać, że pewnego dnia ten sam akwen, którym przypływały towary i goście, przyniesie okręty wojenne ludzi Hrafnviku.",
        "Najeźdźcy przygotowywali się do uderzenia, szukając sposobu, by wykorzystać fiord, nadbrzeżne dojścia i obronę osady. Kiedy rozpoczął się atak, dla mieszkańców Skjordvik nie były to próby, rachunki ani opowieść o mistrzowskim dowodzeniu. Był to hałas zbliżających się wojowników, krzyk przy bramach, pośpieszne chwytanie broni i świadomość, że w domach pozostali ludzie, którzy nie mieli jak się bronić.",
        "Skjordvik zostało pokonane. Ogień pochłonął zabudowania, a walka zebrała krwawe żniwo. Srebro, towary i ludzi zabrano jako zdobycz. Część ocalałych straciła wolność, część domy i bliskich; nie wszyscy przeżyli dzień, który dla wojowników Sianity miał oznaczać zwycięstwo. Mówiąc potem o bogactwie przywiezionym do Hrafnviku, nie można było zapomnieć, skąd się wzięło.",
        "Zwycięzcy mieli teraz dowód, że młoda jarlowa potrafi poprowadzić wyprawę i powrócić z łupem. Jej wojownicy zyskali sławę, a osada nowe zasoby i jeńców. Nie przywieźli jednak prostego rozwiązania zagadki śmierci Sigurda. Sprawa człowieka bez rodu wciąż kierowała ich ku dalszym miejscom, a po pokonanych pozostały świadectwa, których nie można było bez końca uciszać.",
        "Wspominając ten najazd, niektórzy opowiadali o odwadze przy szturmie i zdobytym srebrze. Inni pamiętali płonące domy, odchodzące w niewolę rodziny i głosy, które ucichły. Obie pamięci należały do tej samej historii. Dlatego Skjordvik nie pozostało tylko nazwą zwycięskiego rajdu — stało się raną, którą później pokazano całemu Althingowi.",
        "Osobny był los Aslaka Cieśli. Nie został przywieziony ze Skjordvik jako jeniec: był wolnym mieszkańcem Hrafnviku, którego po wygnaniu porwał Hakon Czerwony i uczynił trallem. Z biegiem czasu opowieści o dwóch rodzajach zniewolenia zaczęły mieszać się w pamięci osady, lecz kronika musi rozróżniać te wydarzenia."
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
      "intro": "Zwycięstwo na północnym fiordzie nie zamknęło sprawy zabójstwa Sigurda. W Skjordvik pozostała krzywda, a poza jego wałami — niebezpieczny dalszy trop.",
      "paragraphs": [
        "Do Hrafnviku wracało srebro, zdobyczne przedmioty i ludzie pozbawieni wolności. Przy ogniskach wojowników pojawiły się opowieści o sile drużyny, o szturmie i o tym, jak młoda władza potrafi zdobywać bogactwo. Kupcy oceniali wartość łupu. Rodziny wojowników pytały o poległych. Inni przyglądali się jeńcom, których obecność zmieniała codzienne życie osady.",
        "Na samym Skjordvik poszukiwanie odpowiedzi nie zakończyło się. Trop człowieka łączonego z morderstwem Sigurda kierował dalej ku stromym klifom i Kruczej Gardzieli. Tam drużyna musiała pozostawić za sobą wygodę wojennego oddziału i przejść niebezpiecznym, wąskim szlakiem nad ciemną wodą. To nie była kolejna wyprawa całej warbandy, ale osobiste ryzyko tych, którzy nie chcieli porzucić śladu.",
        "Krucza Gardziel miała własne zagrożenia: mokrą skałę, zimną wodę, przejścia oświetlane tylko skąpym światłem oraz ślady ludzi, którzy zniknęli pomiędzy fiordami. Bohaterowie przeszli przez nią, przekonując się, że historia zabójstwa jarla nie kończy się na jednym najeździe. Nie każdy trop dawał odpowiedź. Nie każdą zagadkę można było rozwiązać, grożąc mieczem.",
        "Po powrocie zaczęły mnożyć się następstwa wyprawy. Jeńcy potrzebowali miejsca w osadzie, łupy zmieniały pozycję ludzi, a krewni zabitych ze Skjordvik mieli własne powody, aby pamiętać, skąd przypłynęły okręty. Na drugim brzegu fiordu pozostały ruiny i mieszkańcy, którzy mogli opowiedzieć światu inną wersję tych samych wydarzeń.",
        "Gdy Hrafnvik zaczęło myśleć o dalszej polityce, sprawa najazdu nie była już prywatnym rachunkiem między dwiema osadami. Wiadomość o ogniu i pojmanych dotarła do potężniejszych władców. Na Wielkim Althingu Eylendy Sianita miała usłyszeć o swojej wyprawie z ust ludzi, którzy nie zamierzali świętować jej zwycięstwa. Srebro można było przeliczyć. Cenę krzywd znacznie trudniej było zamknąć w liczbach."
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
      "intro": "Zanim bohaterowie dotarli na Wielki Althing, Hordaland przypomniał im, że nawet najhojniejszy dar króla może mieć swoją cenę.",
      "paragraphs": [
        "Gdy w Hrafnviku wciąż opowiadano o Skjordvik, do osady przybyło poselstwo Alreka Erikssona, króla Hordalandu. Nie przywiozło zwykłego wezwania, które można zignorować bez utraty twarzy. Wśród darów znajdowała się ozdobna szkatuła, kunsztowny naramiennik dla jarlowej oraz pierścienie przeznaczone dla wojowników. Król wysłał trzynastu ludzi, których przysięgi mogły wzmocnić ochronę niewielkiego Hrafnviku.",
        "Dar ze strony tak potężnego władcy nie był jedynie gestem przyjaźni. Sianita wciąż nie złożyła Alrekowi formalnej przysięgi wierności. Po zniszczeniu Skjordvik jej pozycja stawała się niepewna, a wieści o Wielkim Althingu na Eylendzie zapowiadały, że sprawa może zostać rozpatrzona wśród królów i jarlów. Dodatkowi wojownicy i królewska protekcja wyglądały na ratunek, ale wymagały zobowiązań, które mogły ograniczyć wolność jarlowej.",
        "W osadzie od dawna wiedziano, ile znaczy naramiennik i publicznie wypowiedziane słowo. Wojownik związany przysięgą nie służy tylko do stania z włócznią przy bramie: jego honor staje się częścią honoru tych, którym ślubował. Dla mieszkańców Hrafnviku trzynastu przybyszów mogło oznaczać silniejszą warbandę. Dla Hordalandu byli też widomym znakiem wpływu wielkiego królestwa na małą osadę.",
        "Poselstwo przypomniało bohaterom, że czas samodzielnych decyzji jednej jarlowej powoli dobiega końca. To, czy przyjąć dar i na jakich warunkach, splatało się z przyszłością całego rodu Sigurda. Sianita miała spotkać Alreka osobiście na Eylendzie. Tam naramiennik i wojownicy okazywali się nie początkiem rozmowy, lecz jej pierwszą stawką.",
        "Wypływając na Althing, bohaterowie zabrali ze sobą pamięć o ogniu Skjordvik i świadomość, że potężni sąsiedzi nie zamierzają przyglądać się ich losom bez własnego interesu. Morze oddzielało Hrafnvik od zgromadzenia; nie oddzielało go już od wielkiej polityki."
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
      "intro": "Eylenda przyjęła królów Północy jako neutralny gospodarz. Między namiotami, ucztami i zgromadzeniami zaczęły się prawdziwe zmagania o przyszłość Drengrlands.",
      "paragraphs": [
        "Na Eylendę przybyli możni z wielu krain. Wśród obozów wznosiły się sztandary Agderu, Hordalandu, Fjordane i rozdartego sporami Vestmaru. Obok królewskich drużyn rozstawiali się niezależni jarlowie, handlarze, posłańcy i ludzie posiadający więcej wpływu, niż zdradzały ich skromne szaty. Wyspa nie była ziemią jednego z walczących o koronę władców. Miała zapewnić miejsce, na którym można przemawiać, spierać się i słuchać wyroków.",
        "Przybycie na Althing nie oznaczało od razu wejścia przed oblicze sądu. Zanim padły wielkie przemówienia, należało poznać rozmówców. Bohaterowie Hrafnviku uczestniczyli w ucztach, wypytywali o stanowiska królestw, szukali ludzi gotowych poprzeć ich osadę i starali się dowiedzieć, które obietnice mają rzeczywistą wartość. Niektóre rozmowy przynosiły znajomości, inne kosztowały srebro, jeszcze inne wymagały zaufania, którego trudno udzielać obcym.",
        "Ylva nawiązała kontakt z Úlfhéðnar, wilczymi wojownikami związanymi z kultem Odyna. Ich obyczaje były surowe, a pojęcie próby wyrażało się bardziej w bólu i wytrwałości niż w łagodnych słowach. Zaprosili drużynę do wspólnego świętowania. Haroks, którego droga związana była z niedźwiedzią siłą, przeszedł z ich udziałem ciężki rytuał mający rozbudzić jego własną przemianę. Nie był to sąd nad nim ani kara; był to brutalny obrzęd, którego znaczenie rozumiały różnie obie strony.",
        "Floki, szkutnik i marzyciel, znajdował na Althingu nowy język dla swoich pragnień o statkach zdolnych wypływać dalej niż zwykłe morze. Halward zabiegał o kontakty i polityczne wpływy, Sianita poznawała stanowiska królów, a pozostali bohaterowie odkrywali, jak wiele można zdobyć lub stracić bez wyciągania miecza.",
        "Na Eylendzie ważyły się trzy sprawy: przyszłość Winlandu, pytanie o jednego Króla Królów i plan wojny przeciw Frankom. Ale dla Hrafnviku istniała jeszcze sprawa czwarta, bardziej osobista. Wśród możnych przebywali ludzie, którzy pamiętali Skjordvik. Zanim bohaterowie opuścili wyspę, mieli usłyszeć, że Północ nie zapomniała o ich pierwszym zwycięstwie."
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
      "intro": "Przy wielkich stołach Eylendy Sianita musiała stawić czoło królom. Najważniejsza z jej odpowiedzi brzmiała: nie.",
      "paragraphs": [
        "Halfdan Czarny z Agderu należał do tych ludzi, których obecność zmieniała wagę rozmowy. O potędze jego królestwa świadczyli wojownicy i posłańcy, ale równie wiele mówiły ambicje. Halfdan widział przyszłość Drengrlands w wielkiej wojnie przeciw Frankom. Rozmawiając z Sianitą, zabiegał o jej głos w tej sprawie i sondował możliwość zjednoczenia Północy pod jedną koroną. Jarlowa nie obiecała mu jednak poparcia jako Królowi Królów.",
        "Jeszcze poważniejszy charakter miało spotkanie z Alrekiem Erikssonem z Hordalandu. Władca przypomniał o przysiędze, której Sianita nie złożyła, choć jego poselstwo przybyło do Hrafnviku z naramiennikiem i trzynastoma wojownikami. Alrek mówił o bezpieczeństwie osady, lecz równocześnie dawał do zrozumienia, jak niebezpieczna może być samotna pozycja jarlowej, przeciw której ciążyły oskarżenia o zniszczenie Skjordvik.",
        "Alrek zaproponował jeszcze jedno rozwiązanie. Sianita mogłaby poślubić jego syna, oddać własny tytuł jarla i związać przyszłość swojej osady z potężniejszym rodem. W zamian miała otrzymać obietnicę bezpieczeństwa dla mieszkańców. Oferta mogła uchodzić za korzystną w oczach doradców, którzy nad wszystko stawiali spokój. Dla Sianity oznaczała rezygnację z samodzielnego władania ziemią odziedziczoną po ojcu.",
        "Jarlowa odmówiła. Nie złożyła Alrekowi oczekiwanej przysięgi, nie przyjęła również małżeństwa, które wymagało porzucenia jej tytułu. Na tak wielkim zgromadzeniu odmowa nie była sprawą prywatną; rozchodziła się po obozach i przy każdym kolejnym spotkaniu zmieniała sposób, w jaki patrzono na Hrafnvik.",
        "Na Althingu Sianita poznała także trzech braci z Vestmaru: Olafa, Alfhelda i Torstena Gudrodssonów. Najstarszy Olaf domagał się wobec niej surowego rozliczenia za Skjordvik. Alfheld wolał polityczną karę wygnania. Najmłodszy Torsten patrzył na jarlową życzliwiej i dopuszczał przyszłą współpracę. W ten sposób jedna oskarżona kobieta zobaczyła przed sobą nie tylko trzy odmienne stanowiska, ale też pęknięcie samego Vestmaru — krainy, w której bracia rywalizowali o wpływy.",
        "Gdy kończyły się te rozmowy, nie podpisano wielkiego pojednania i nie zapewniono Hrafnvikowi spokojnej przyszłości. Sianita zachowała jednak swoją odpowiedź. Wśród królów i następców tronów nie zgodziła się, aby jej życie zostało ułożone wyłącznie przez cudzą wolę."
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
      "intro": "Althing rozstrzygnął sprawy, o których mówiono od wielu sezonów: Winland, jedną koronę Północy i wyprawę przeciw Frankom.",
      "paragraphs": [
        "Pierwsza debata dotyczyła Winlandu, odległych ziem, o których opowiadali żeglarze, handlarze i ludzie przywożący osobliwe rośliny oraz przedmioty. Nie wszyscy widzieli w tych opowieściach obietnicę bogactwa. Wyprawy przez ocean oznaczały ryzyko, nieznane szlaki i długie lata niepewności. Sianita oraz jej towarzysze poparli dalszą eksplorację i inwestycje. Kiedy jednak przyszło do rzeczywistych zobowiązań, gotowość finansowego wsparcia wyraziły przede wszystkim Eylenda i Fjordane.",
        "Druga sprawa brzmiała prościej, ale mogła odmienić cały układ Drengrlands: czy należy ustanowić Króla Królów. Halfdan Czarny i inni potężni władcy mieli swoich zwolenników, lecz wiele rodów obawiało się utraty niezależności. Wśród jarlów nie brakowało tych, którzy gotowi byli stanąć ramię w ramię przeciw obcemu wrogowi, ale nie mieli ochoty składać własnych pierścieni u stóp jednego pana. Sianita wstrzymała się od głosu. Nie wybrano wspólnego władcy Północy.",
        "Najwięcej zgody przyniosła sprawa trzecia — przygotowanie wielkiej wojny przeciw Frankom. Mówiono o bogactwach południa, o ziemiach, o które można walczyć, i o przeciwnikach wyznających nową wiarę. Niektóre głosy wzywały do wyprawy po łup, inne do podboju. Sianita poparła wojnę, podobnie jak większość przedstawicieli królestw. Zgromadzenie zaakceptowało przygotowania do wielkiej wyprawy w kolejnym roku.",
        "Między oficjalnymi debatami toczyła się jednak druga część Althingu: rozmowy na uboczu, obietnice składane pod namiotami i poselstwa między obozami. Halward, brat jarlowej, wykazywał się szczególną sprawnością w tych zakulisowych działaniach. Bohaterowie uczyli się, że nawet prawdziwy głos oddany publicznie może mieć długą historię spotkań, przysług i kosztownych zabiegów.",
        "Trzy decyzje nie stworzyły jednej Północy. Pozostawiły niezależne królestwa, kilku ambitnych królów i zapowiedź wojny, na którą nikt nie chciał wysłać statku w pojedynkę. Dla Hrafnviku znaczenie miało to, że jego jarlowa po raz pierwszy uczestniczyła w sprawach znacznie większych od rodzinnej osady. Lecz kiedy głosowania dobiegły końca, sama miała stanąć przed prawem Eylendy — nie jako przywódczyni zwycięskiej wyprawy, ale jako oskarżona."
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
      "intro": "Przed dziewięcioma sędziami Eylendy wojna z północnego fiordu przestała być opowieścią o łupie. Stała się sprawą krwi i odpowiedzialności.",
      "paragraphs": [
        "Na Wielkim Althingu podniesiono sprawę Skjordvik. Oskarżenie wysunął Olaf Gudrodsson z Vestmaru, najstarszy z trzech braci rywalizujących o wpływy w swoim królestwie. Przypomniał o zniszczonej osadzie, ludziach wziętych do niewoli i tych, którzy zginęli podczas najazdu. Dla mieszkańców Hrafnviku było to echo wyprawy, którą wspominali jako zwycięstwo. Dla zgromadzonych sędziów oznaczało konieczność wysłuchania obu stron.",
        "Przed sądem stanęli świadkowie. Orm, jeden z ocalałych, oraz dziecko ze Skjordvik mówili, że w zamieszaniu nie zdołali rozpoznać napastników. Ich świadectwo nie rozwiązało sporu. Ludzie przyglądali się bohaterom Hrafnviku, a pod ciężarem pytań powróciło to, co wydawało się już zamknięte za bramą spalonej osady.",
        "Następnie wystąpił Mord, syn Svali, jeden z braci bliźniaków z Hrafnviku. Nie próbował wyrzec się udziału w wydarzeniach ani zasłaniać niewiedzą. Przyznał, że działał podczas wyprawy i że służył jarlowej. Wskazał na poszukiwanie człowieka podejrzewanego o zabójstwo Sigurda oraz konflikt z osadą, która udzieliła mu schronienia. Jego słowa nie zmazały krzywdy. Sprawiły jednak, że trudno było już przedstawiać najazd jako dzieło bezimiennych wojowników.",
        "Sianita sama przemówiła do zgromadzonych. Potwierdziła wydarzenia i stanęła wobec odpowiedzialności za swoich ludzi. Jej mowa przekonała wielu słuchaczy; to, co dla części możnych było dowodem odwagi i szczerości, dla innych nie wystarczało, by uznać sprawę za zakończoną. Król i jarl mogą cenić honor wojownika, ale sędzia musi jeszcze odpowiedzieć na pytanie, co uczynić ze zniszczoną osadą.",
        "Dziewięciu sędziów rozdzieliło swoje głosy. Trzech opowiedziało się za pozostawieniem jarlowej bez sankcji. Sześciu uznało, że sprawę należy oddać w ręce bogów. Tak zrodził się wyrok, którego nie można było spłacić srebrem ani zręcznym przemówieniem: bohaterowie mieli udać się do kurhanu Haralda Hardrady i odzyskać Gungnir, włócznię Odyna.",
        "Dla wojowników Hrafnviku nie oznaczało to zwykłego wyjścia z sądu. Dopiero co przyjechali na Eylendę zabiegać o polityczne bezpieczeństwo. Teraz musieli opuścić zgromadzenie i wyruszyć do miejsca, o którym opowiadano w sagach o umarłych. Słowa dziewięciu ludzi wysłały ich na drogę, która miała kosztować życie wielu towarzyszy."
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
      "intro": "Wyrok Althingu nie dał bohaterom wytchnienia. Aby odzyskać włócznię Odyna, musieli ruszyć przez ziemie, których nawet mieszkańcy Eylendy nie odwiedzali bez lęku.",
      "paragraphs": [
        "Za obozami zgromadzenia pozostały ogniska, śpiewy i namioty możnych, którzy mogli jeszcze spierzać się przy miodzie o przyszłość Północy. Sianita i jej towarzysze opuścili te miejsca jako ludzie obarczeni wyrokiem. Wyruszali po artefakt, o którym znano pieśni, ale którego zdobycie nie przypominało zwykłej wyprawy po srebro. Pod ich stopami miała znaleźć się ziemia wulkanów, duchów i mogił tak starych, że nawet skaldowie nie potrafili podać ich wieku.",
        "Jednym z pierwszych miejsc były Czarne Piaski Zapomnienia. Rozciągały się tam ciemne pustkowia, po których wiatr przesuwał suche ziarna popiołu i piasku, zacierając ślady niemal natychmiast po przejściu ludzi. Widoczny przed chwilą szlak znikał. To, co pozostawiali za sobą, przestawało wyglądać jak droga, którą można po prostu odtworzyć. Podróżnicy musieli polegać na sobie nawzajem i na znakach, które potrafili jeszcze rozpoznać.",
        "Dalej czekała Rzeka Umarłych Koni. Jej zimna, spieniona woda przetaczała się między kamieniami, a kaskady odcinały łatwy marsz naprzód. Przeprawa wymagała nie tylko odwagi. W pewnym momencie droga zażądała zapłaty — bohaterowie oddali cenne runy, przedmioty niosące dla nich znaczenie i własną historię. Tak zrozumieli, że nawet pozornie pusta ziemia może stawiać warunki tym, którzy przez nią przechodzą.",
        "Nie był to jeszcze kurhan Haralda. Z każdym etapem rosło zmęczenie, a wraz z nim świadomość, jak daleko odeszli od bezpiecznego Hrafnviku. Nie mogli po prostu zawrócić i uznać sprawy za zamkniętą: dziewięciu sędziów wysłało ich po dowód, który miał rozstrzygnąć o losie jarlowej. Nie mogli też wiedzieć, ilu z nich będzie stało przed sędziami podczas powrotu.",
        "Zapamiętano te pustkowia nie jako pojedynczą walkę, ale jako początek wielkiej próby. Każda mila uczyła wojowników, że w miejscach granicznych człowiek nie zawsze wygrywa siłą. Czasami przechodzi dalej dlatego, że potrafi wytrzymać, zrezygnować z czegoś własnego albo zrozumieć ostrzeżenie, zanim będzie za późno."
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
      "intro": "Eylenda ukazała bohaterom ziemię, w której ogień wychodzi spod kamieni, a opowieści o olbrzymach przestają być tylko opowieściami.",
      "paragraphs": [
        "Im głębiej wyprawa zapuszczała się na wyspę, tym bardziej zmieniał się krajobraz. Zielone doliny i ścieżki znane ludziom ustępowały popękanym skałom, szerokim pasmom popiołu i ziemi, spod której wydobywało się ciepło. W oddali drżało powietrze nad płynnym ogniem, a wiatr niósł zapach siarki. Bohaterowie oglądali miejsca, gdzie granica między Midgardem i ognistymi opowieściami o Muspelheimie zdawała się niemal zanikać.",
        "Była to droga, na której nikt nie potrzebował przeciwnika z mieczem, aby poczuć strach. Skała potrafiła osunąć się pod nogami, powietrze paliło w płucach, a widok czerwonego blasku za czarnym wzgórzem nie pozwalał zapomnieć, że sama wyspa może się obudzić. Wyprawa po przedmiot należący do dawnych bogów prowadziła przez miejsca, które wyglądały, jakby bogowie wciąż o coś walczyli.",
        "W dolinie olbrzymów bohaterowie napotkali trolla zamkniętego w żelaznej klatce. Więzień prosił o uwolnienie. Nie był człowiekiem z Hrafnviku ani towarzyszem, któremu kiedyś składano przysięgę; był jednym z mieszkańców świata, w którym drużyna pozostawała gościem. Uwolnienie go mogło być aktem litości, ale mogło również sprowadzić niebezpieczeństwo, którego nie umieli przewidzieć.",
        "Bohaterowie zdecydowali, że nie otworzą klatki. Zostawili trolla na łaskę olbrzymów, a jego wołanie pozostało w dolinie, kiedy ruszyli dalej. Dla jednych był to rozsądny wybór w wyprawie, której cel wciąż pozostawał daleko. Dla innych mógł być przypomnieniem, że nawet bohaterowie sag nie mają mocy ocalenia każdego napotkanego stworzenia.",
        "Ziemia ognia pozostawiła po sobie widoki, których nie można było łatwo pomylić z żadnym fiordem Północy. Coraz wyraźniej stawało się też, że dawni mieszkańcy i bogowie nie opuścili całkowicie swoich ścieżek. Za kolejnym wzgórzem bohaterowie mieli zobaczyć coś jeszcze bardziej niepokojącego niż lawa: dom, w którym czas zatrzymał się wraz ze śmiercią jego gospodarzy."
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
      "intro": "W opuszczonym gospodarstwie drużyna spotkała ludzi, którzy żyli tak, jakby nie wiedzieli, że dawno już umarli.",
      "paragraphs": [
        "Pośród pustkowia znajdowało się gospodarstwo. Dom i zabudowania przypominały świat dobrze znany z Hrafnviku: miejsce, w którym pracuje się od świtu, przygotowuje jedzenie, troszczy o obejście i czeka na powrót bliskich. Tym bardziej osobliwa była cisza, która otaczała to miejsce. Nie przypominało ono bogatej hali jarla ani zasypanej śniegiem świątyni. Wyglądało raczej jak coś, co świat zdążył zostawić za sobą.",
        "Mieszkali tam ludzie — a przynajmniej tak przedstawiała się sprawa na początku. Rozmawiali i zachowywali się, jakby zwyczajny czas nadal płynął dla nich z dnia na dzień. Prawda okazała się znacznie trudniejsza. Gospodarze byli duchami, które nie przyjęły do wiadomości własnej śmierci. Pozostali związani z miejscem i wspomnieniami, których nie potrafili opuścić.",
        "Wojownicy przybyli na Eylendę po włócznię i przez większą część wyprawy musieli troszczyć się przede wszystkim o przetrwanie. Tutaj stali wobec zadania, którego nie można było wykonać, rozbijając przeciwnikowi tarczę. Zanim dusze mogły odejść, trzeba było pomóc im dostrzec prawdę — nie upokorzyć ich, lecz znaleźć sposób, aby zrozumiały, że ich życie naprawdę dobiegło końca.",
        "Drużyna pomogła mieszkańcom gospodarstwa pożegnać się ze światem żywych. Duchy odnalazły drogę ku Helheimowi, miejscu przeznaczonemu dla wielu zmarłych, których los nie prowadził na wielkie uczty wojowników. Nie było tutaj ani zdobycznego srebra, ani nowego króla, którego można wesprzeć przysięgą. Pozostała tylko pamięć o ludziach, którzy wreszcie mogli odejść.",
        "Wyprawa po Gungnir była pełna prób odwagi, lecz to spotkanie stało się dowodem czegoś innego. Bohaterowie, którzy potrafili spalić wrogą osadę i stanąć przed sądem Althingu, potrafili również pomóc nieznajomym umarłym. W sagach najczęściej zapamiętuje się zadany cios. Ci, którzy przebyli to gospodarstwo, mieli powód pamiętać także rozmowę i okazane współczucie."
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
      "intro": "W kurhanie Haralda Hardrady bohaterowie zdobyli Gungnir, lecz za włócznię Odyna zapłacili życiem Flokiego, Morda i dziesięciu braci krwi.",
      "paragraphs": [
        "W końcu stanęli przed ziemią przeznaczoną umarłym wojownikom. Kurhan Haralda Hardrady nie wyglądał jak miejsce, do którego można wejść z pochodnią i bezkarnie wynieść królewski dar. Wokół wznosiły się stare mogiły, a przejścia strzegły draugry — ci, którzy po śmierci nie zaprzestali pilnowania własnych grobów. Bohaterowie wiedzieli, że to tutaj kończy się próba nałożona przez Althing. Nie wiedzieli jeszcze, ile zabierze im ostatni odcinek drogi.",
        "Szli wśród kamienia, ciemności i pozostałości dawnej chwały. Nie każde zagrożenie miało kształt żywego wroga, a nie każdy przeciwnik reagował na strach tak, jak człowiek. Wojownicy przybyli z daleka, by udowodnić przed sędziami, że nie są tylko najeźdźcami ze Skjordvik. Teraz musieli stanąć przeciw tym, o których dotąd słuchali w pieśniach.",
        "Ostateczną próbą było starcie z Haraldem Hardradą, dawnym królem, którego imię wciąż znali skaldowie. Nie walczono już o łup z cudzej przystani. Stawką był Gungnir, włócznia Odyna, i możliwość powrotu z dowodem, którego oczekiwali sędziowie. Bohaterowie stanęli wobec śmierci i nie cofnęli się. W końcu oręż trafił w ich ręce.",
        "Zwycięstwo nie przyszło za darmo. Poległ Floki, szkutnik i marzyciel, który widział przed sobą podróże dalsze niż wszystkie znane szlaki. Zginął także Mord, jeden z synów Svali, człowiek, którego ród jeszcze niedawno domagał się sprawiedliwości za śmierć ojca. Wyprawa odebrała również życie dziesięciu wojownikom związanym z drużyną przysięgą krwi — dziesięciu braciom krwi, którzy nie wrócili pod własne dachy.",
        "Ich śmierć nie była liczbą na rachunku wojennej drużyny. Każdy z nich pozostawił ludzi, którzy mogli czekać na jego statek, broń, naramiennik albo wieść o ostatniej walce. Dla Sianity i pozostałych bohaterów Gungnir był teraz jednocześnie triumfem i ciężarem. Nikt nie mógł już opowiedzieć o kurhanie jedynie jako o chwili zdobycia boskiego oręża.",
        "Harald Hardrada wreszcie odnalazł spoczynek, a jego saga została domknięta czynem żywych. Dla przybyłych z Hrafnviku oznaczało to jednak początek nowej żałoby. Włócznię można było ponieść wysoko, aby pokazać zgromadzonym jej blask. Poległych trzeba było ponieść do domu, gdzie na ich miejsce nikt nie mógł już powrócić."
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
      "intro": "Gungnir wrócił z bohaterami na Eylendę, a potem do Hrafnviku. W rodzinnej osadzie zamiast samych pieśni zwycięstwa rozległy się również pieśni żałobne.",
      "paragraphs": [
        "Powrót z kurhanu okazał się dziwnie inny niż droga, którą przyszło im pokonać. To, co wcześniej wymagało długiej wędrówki i wielu prób, teraz zdawało się mijać w nienaturalnym pośpiechu. Ylva odnalazła osobliwe przejścia, a poszczególni wędrowcy zachowali niejednakowe wspomnienia drogi. Wiedzieli jednak, że ponownie widzą ogniska Althingu — i że przywieźli Gungnir, włócznię, po którą zostali wysłani.",
        "Na Eylendzie zebrali się ludzie, którzy chcieli zobaczyć oręż Odyna i wysłuchać opowieści o Haraldzie Hardradzie. Dziewięciu sędziów nie zdołało jednak porozumieć się, czy włócznia ma zostać zatrzymana na wyspie, czy należeć do tych, którzy ją odzyskali. Nie ustanowiono nowego właściciela. Gungnir pozostał przy drużynie, a rozmowy o wojnie i królestwach wciąż dzieliły możnych. Na wyspie doszło również do zaręczyn Sianity i Asgrima, syna Halfdana Czarnego z Agderu.",
        "Wśród powracających krążyła też wiadomość nie mniej niepokojąca niż opowieść o umarłym królu. Idar, wysłannik Alreka Erikssona, przekazał bohaterom wieść, że król Hordalandu wypuścił na wolność człowieka odpowiedzialnego za zabójstwo Sigurda. Poznali jego imię: Vestar Bez Rodu. Miał udać się na Ruś, lecz jego dokładna kryjówka pozostawała nieznana. Nawet z Gungnirem w ręku nie zamknęli więc historii śmierci swojego jarla.",
        "Tej samej nocy Eylendą wstrząsnęła ziemia. Z głębi gór dochodził pomruk, a nad ciemnymi szczytami pojawił się czerwony blask. Budziły się wulkany. Popiół unosił się ku niebu, konie płoszyły się przy obozach, a część mieszkańców zaczęła przygotowywać się do opuszczenia wyspy. Dla bohaterów był to koniec pobytu na Eylendzie, lecz nie koniec wspomnień, które mieli stamtąd zabrać.",
        "Ciała Flokiego i Morda przewieziono przez morze w beczkach z solanką, aby nie zostawić ich na obcej ziemi. Po dwóch tygodniach żeglugi okręty znów ujrzały brzegi Hrafnviku. Rodzina Morda mogła odprowadzić go na spoczynek. Floki, budowniczy okrętów, otrzymał szczególny grób: jego niedokończony statek przeniesiono do świętego lasu Odyna, a w kadłubie złożono jego ciało. Miejscowy kowal wyrył na kamieniu runicznym scenę ostatniej walki z Haraldem Hardradą.",
        "Harrox żegnał brata, mówiąc o jego odwadze i miejscu przy ucztach Valhalli. Wśród żałobników był również chrześcijański kapłan, który przypomniał o Chrystusie i zwycięstwie nad śmiercią. Stara i nowa wiara znalazły się obok siebie tak jak podczas pierwszego Thingu — tym razem przed grobem człowieka, którego nie potrafiła przywrócić żadna z nich. Pamiętano także o dziesięciu braciach krwi, którzy zginęli podczas wyprawy i których nie było już przy powitalnych ogniskach.",
        "Zakończyła się wielka podróż po Gungnir, ale nie skończyła saga Hrafnviku. W osadzie pozostali żywi, którzy musieli prowadzić handel, bronić ziemi i mierzyć się z dawnymi przysięgami. Zmarli zostawili po sobie puste miejsca. Na brzegu wciąż czekały okręty, w wielkiej sali wisiały tarcze, a w świętym lesie stał niedokończony statek — odtąd już nie obietnica przyszłej wyprawy, lecz pomnik człowieka, który nigdy jej nie odbędzie."
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
    {id: "gardarike", name: "Gardarike — Ruś", parentId: "midgard", kind: "Kraina wielkich rzek", visibility: "known",
     description: "Kraina czterech rodów i handlu rzecznego łączącego północ z Miklagardem."},
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
    // Publiczna geografia znana z podręcznika, nie lista odwiedzonych miejsc.
    {
      id: "harstad", name: "Harstad", kind: "Sala miodowa i osada", visibility: "known", parentRegionId: "agder",
      description: "Królewska sala Halfdana Czarnego, znana z uczt i bogatych dekoracji.", history: "Ośrodek opisany w podręcznikowym atlasie świata; nie stanowi potwierdzenia wizyty bohaterów.",
      image: "assets/locations/Harstad_ Royal Mead-Hall at Dusk.png", personIds: []
    },
    {
      id: "yppsala-wodenhorgr", name: "Yppsala — Wodenhorgr", kind: "Sanktuarium Odyna", visibility: "known", parentRegionId: "agder",
      description: "Główna świątynia Agderu; miejsce wielkich blótów i zgromadzeń religijnych.", history: "Ośrodek opisany w podręcznikowym atlasie świata; nie stanowi potwierdzenia wizyty bohaterów.",
      image: "assets/locations/Stormbound Ritual at the World Tree.png", personIds: []
    },
    {
      id: "omen", name: "Omen", kind: "Port zbrojmistrzów", visibility: "known", parentRegionId: "agder",
      description: "Nadmorska osada słynąca z doskonałej broni i handlu.", history: "Ośrodek opisany w podręcznikowym atlasie świata; nie stanowi potwierdzenia wizyty bohaterów.",
      image: "assets/locations/Viking Forge Market in a Snowy Fjord.png", personIds: []
    },
    {
      id: "holmgard", name: "Holmgard", kind: "Miasto rzeczne", visibility: "known", parentRegionId: "gardarike",
      description: "Pierwsza twierdza na szlaku Dniepru, później silny ośrodek wojskowy.", history: "Ośrodek opisany w podręcznikowym atlasie świata; nie stanowi potwierdzenia wizyty bohaterów.",
      image: "", personIds: []
    },
    {
      id: "novgorod", name: "Nowogród (Novgorod)", kind: "Miasto kupieckie", visibility: "known", parentRegionId: "gardarike",
      description: "Największe miasto Rusi, siedziba Rurykowiczów i centrum targów oraz kuźni.", history: "Ośrodek opisany w podręcznikowym atlasie świata; nie stanowi potwierdzenia wizyty bohaterów.",
      image: "", personIds: []
    },
    {
      id: "helgisrata", name: "Helgisrata", kind: "Miasto nad wodospadem", visibility: "known", parentRegionId: "gardarike",
      description: "Osada Olegowiczów kontrolująca transport łodzi na Wołdze.", history: "Ośrodek opisany w podręcznikowym atlasie świata; nie stanowi potwierdzenia wizyty bohaterów.",
      image: "", personIds: []
    },
    {
      id: "truvorsberg", name: "Truvorsberg", kind: "Górska warownia", visibility: "known", parentRegionId: "gardarike",
      description: "Twierdza Truworowiczów na samotnej górze.", history: "Ośrodek opisany w podręcznikowym atlasie świata; nie stanowi potwierdzenia wizyty bohaterów.",
      image: "", personIds: []
    },
    {
      id: "eylenda", name: "Eylenda", kind: "Wyspa", visibility: "known", parentRegionId: "drengrlands",
      description: "Na tej wyspie bohaterowie stanęli przed najpotężniejszymi ludźmi Północy, przeszli przez krainę ognia i umarłych oraz odzyskali Gungnir, włócznię Odyna. Zwycięstwo miało jednak swoją cenę.",
      history: "Na Wielkim Althingu możni rozmawiali o Winlandzie, wojnie z Frankami i idei Króla Królów, lecz nie wyłonili wspólnego władcy. Bohaterowie zapuścili się także do kurhanu Haralda Hardrady i odzyskali Gungnir. Wyprawa kosztowała życie Flokiego i Morda. Eylendę naznaczył również żywioł ognia.",
      image: "assets/locations/Eylenda.png", personIds: ["sianita","halvard","haroks","ylva","floki","asgrim","mord"]
    },
    {
      id: "ejkjavik", name: "Ejkjavik", kind: "Osada", visibility: "known", parentRegionId: "eylenda",
      description: "Osada na Eylendzie, w której odbywa się Wielki Althing — zgromadzenie jarlów, przysiąg i rozstrzygania sporów.",
      history: "W Ejkjaviku podczas Wielkiego Althingu omawiano wyprawę do Winlandu, wojnę z Frankami i ideę Króla Królów. Althing jest nazwą zgromadzenia; Ejkjavik to nazwa osady, która je gości.",
      image: "assets/locations/Ejkjavik.png", personIds: ["sianita","halvard","haroks","ylva","floki","mord"]
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
      image: "assets/locations/Stormlit Thingvellir Assembly Plain.png", personIds: []
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
      image: "assets/locations/Boiling Lake Beneath Stormy Peaks.png", personIds: []
    },
    {
      id: "hardrada-mound", name: "Kurhan Haralda Hardrady", kind: "Kurhan", visibility: "known", parentRegionId: "eylenda",
      description: "Miejsce wyprawy bohaterów na Eylendzie, związane z pochówkiem i legendą Haralda Hardrady.",
      history: "W naszej kampanii bohaterowie dotarli do kurhanu i odzyskali Gungnir, włócznię Odyna. Wyprawa stała się jednym z najważniejszych rozdziałów sagi i przyniosła bolesne straty.",
      image: "assets/locations/Kurchan Harold Hardrary.png", personIds: ["sianita","halvard","haroks","ylva","floki","mord"]
    },
    {
      id: "hrafnvik", name: "Hrafnvik", kind: "Osada bohaterów", visibility: "known", parentRegionId: "osady-bohaterow",
      description: "Osada, w której brat wystąpił przeciw bratu, a przelana krew zmieniła porządek władzy. Tutaj rozpoczęła się opowieść o Sianicie, Halwardzie i ludziach, których losy odmieniła śmierć jarla Sigurda.",
      history: "Hroald utracił władzę i wzrok, a jego brat Sigurd objął miejsce jarla. Wkrótce Sigurd został zamordowany, a Sianita przejęła odpowiedzialność za osadę. W Hrafnviku pamięta się zarówno rozlew krwi, jak i tych, którzy zginęli podczas późniejszych wypraw.",
      image: "assets/locations/Hrafnvik.png", personIds: ["sigurd","hroald","runa","sten","sianita","halvard","asgrim","svala","mord","ulf","erik","ragnvald-p","styrbjorn","leif","hakon","floki","aslak","torvald","morotar","astrid","anslem","haroks","ylva","ragnvald-s"]
    },
    {
      id: "skjorvik", name: "Skjordvik", kind: "Osada", visibility: "known", parentRegionId: "drengrlands",
      description: "Osada zdobyta ogniem i żelazem przez wojowników Hrafnviku. Zwycięzcy zabrali stąd srebro, łupy i jeńców, lecz dla pokonanych dzień najazdu stał się początkiem zupełnie innej historii.",
      history: "Wojownicy Hrafnviku zdobyli osadę, zabierając srebro, towary i jeńców. Dla najeźdźców był to triumf, dla mieszkańców Skjordvik — dzień straty, o którym trudno zapomnieć. Aslak Cieśla nie został pojmany podczas tego najazdu: wcześniej był wolnym rzemieślnikiem Hrafnviku, a po wyroku wygnania porwał go kupiec Hakon Czerwony i uczynił swoim trallem.",
      image: "assets/locations/skjorvik.svg", personIds: ["haki","ragnvald-s","orm"]
    }
  ],
  // Publiczne bestiariusz i przedmioty: wyłącznie odkryte wpisy.
  bestiary: [
    {
      "id": "troll-w-klatce",
      "name": "Troll z Doliny Olbrzymów",
      "kind": "Troll",
      "placeId": "eylenda",
      "eventId": "ogien-i-olbrzymy",
      "symbol": "ᛉ",
      "summary": "Stworzenie napotkane przez drużynę podczas wyprawy przez Eylendę.",
      "history": "W Dolinie Olbrzymów bohaterowie odnaleźli trolla uwięzionego w żelaznej klatce. Prosił ich o uwolnienie, lecz nie potrafili przewidzieć, co nastąpi po otwarciu zamknięcia. Drużyna zdecydowała się nie wypuszczać więźnia i ruszyła dalej. Jego dalsze losy pozostają nieznane."
    },
    {
      "id": "backahast",
      "name": "Backahast",
      "kind": "Wodny stwór · sezon I",
      "placeId": null,
      "eventId": null,
      "locationLabel": "Czarna sadzawka na trasie pierwszej wyprawy",
      "symbol": "ᚺ",
      "summary": "Tajemnicza istota z ciemnej wody, napotkana przez bohaterów w pierwszym sezonie.",
      "history": "W skalnym przejściu nad czarną sadzawką krył się Backahast — potwór przybierający zwodniczą postać, przypominającą starą, spróchniałą łódkę. Bliskość wody i wąska droga czyniły to spotkanie niebezpiecznym. W publicznej Kronice nie ma jeszcze osobnego rozdziału tej wyprawy, dlatego nie przypisujemy stworzeniu cudzego wydarzenia ani nie rozstrzygamy tu jego dalszych losów."
    },
    {
      "id": "draugry-kurhanu",
      "name": "Draugry — nieumarli wojownicy",
      "kind": "Nieumarli strażnicy grobów",
      "placeId": "hardrada-mound",
      "eventId": "kurhan-gungnir",
      "symbol": "ᛦ",
      "summary": "Nieumarli strażnicy mogił, spotkani na drodze do kurhanu Haralda Hardrady.",
      "history": "Wśród starych grobów na Eylendzie bohaterowie napotkali draugry — poległych wojowników, którzy nie zaprzestali strzec miejsc spoczynku. Zastępowały żywe straże przy kamiennych przejściach, stojąc na drodze wyprawie po Gungnir. Ich obecność przypominała, że dawne przysięgi i groby nie zawsze milkną po śmierci. Wpis nie ujawnia niepotwierdzonych zdolności ani liczebności nieumarłych."
    },
    {
      "id": "harald-hardrada-nieumarly",
      "name": "Harald Hardrada — nieumarły król",
      "kind": "Nieumarły władca",
      "placeId": "hardrada-mound",
      "eventId": "kurhan-gungnir",
      "symbol": "ᛏ",
      "summary": "Król z kurhanu, który stanął przeciw bohaterom w ostatniej próbie odzyskania Gungnira.",
      "history": "W głębi kurhanu bohaterowie zmierzyli się z Haraldem Hardradą, dawnym władcą znanym z pieśni skaldów. Starcie przesądziło o losie wyprawy po włócznię Odyna. Drużyna odzyskała Gungnir, lecz straciła Flokiego, Morda oraz dziesięciu braci krwi. Zgodnie z rozegraną Kroniką Harald wreszcie odnalazł spoczynek; nie dopisujemy mu dalszych tajemnych celów ani nieujawnionych właściwości."
    },
    {
      "id": "zjawy-z-gospodarstwa",
      "name": "Zjawy z zapomnianego gospodarstwa",
      "kind": "Niespokojne duchy",
      "placeId": "eylenda",
      "eventId": "gospodarstwo-zapomnianych",
      "symbol": "ᛁ",
      "summary": "Duchy dawnych mieszkańców domu na pustkowiach Eylendy, nieświadome własnej śmierci.",
      "history": "W odosobnionym gospodarstwie na Eylendzie bohaterowie spotkali zjawy zachowujące się tak, jakby nadal żyły. Zmarli wykonywali zwyczajne czynności, nie potrafiąc pogodzić się z końcem swego życia. Drużyna nie pokonała ich w bitwie, lecz pomogła im poznać prawdę i pożegnać się z doczesnym domem. Dzięki temu duchy mogły odejść ku Helheimowi."
    }
  ],
  items: [
    {
      "id": "gungnir",
      "name": "Gungnir — włócznia Odyna",
      "kind": "Legendarny oręż",
      "placeId": "hrafnvik",
      "eventId": "powrot-i-pogrzeby",
      "symbol": "ᚨ",
      "image": "assets/items/Mythic Runic Spear of Asgard (1).png",
      "summary": "Boska włócznia odzyskana z kurhanu Haralda Hardrady.",
      "history": "Bohaterowie wyprawili się na Eylendę, by odzyskać Gungnir z kurhanu Haralda Hardrady. Zdobycie włóczni kosztowało życie Flokiego, Morda i dziesięciu braci krwi. Oręż powrócił z drużyną do Hrafnviku; nie ustanowiono jego nowego właściciela. Konkretne właściwości mechaniczne włóczni nie zostały publicznie opisane."
    },
    {
      "id": "hrafnsauga-oko-kruka",
      "name": "Hrafnsauga — „Oko Kruka”",
      "kind": "Zaginiony relikt rodowy",
      "placeId": null,
      "eventId": null,
      "symbol": "ᚨ",
      "image": "assets/items/Nordycki Amulet Wszechwidzącego Oka.png",
      "locationLabel": "Pierwszy tom · relikt zaginiony po zabójstwie jarla",
      "summary": "Stary skarb rodu, który zniknął tej samej nocy, gdy zamordowano jarla. Jego wygląd przywodzi na myśl symbol Odyna.",
      "history": "Hrafnsauga, nazywane Okiem Kruka, należało do najcenniejszych pamiątek rodu jarla. Po jego śmierci relikt zaginął. Dwa kunsztownie wykonane krucze łby obejmują ciemny, niemal szklisty rdzeń, a wokół biegną drobne znaki runiczne. Przedmiot nie wydaje się wykonany ani z kamienia, ani z żelaza. Jego obecne położenie i właściwości pozostają nieznane bohaterom."
    },
    {
      "id": "srebrne-krazki",
      "name": "Srebrne krążki",
      "kind": "Niezwykłe srebro · ślad z pierwszego tomu",
      "placeId": null,
      "eventId": null,
      "symbol": "ᛟ",
      "image": "assets/items/Tajemnicze srebrne medaliony w półmroku.png",
      "locationLabel": "Pierwszy tom · ślad związany ze Skjoldvik",
      "summary": "Gładkie, niemal idealnie okrągłe kawałki srebra, jakich nie sposób łatwo porównać ze zwykłym kruszcem kowala.",
      "history": "Krążki wyglądają jak srebro, ale ich forma budzi niepokój: brzeg jest tak równy, jak gdyby nie kształtował go młot, a powierzchnia nie przypomina zwyczajnie kutego metalu. Bohaterowie dowiedzieli się, że przybysz płacił podobnymi krążkami ludziom Skjoldvik. Sam ich wygląd i fakt używania ich jako zapłaty nie wyjaśniają ani miejsca wytworzenia, ani znaczenia tego srebra."
    },
    {
      "id": "zlote-jablka-idunn",
      "name": "Złote jabłka Idunn",
      "kind": "Motyw z podań · niepotwierdzony łup",
      "placeId": null,
      "eventId": null,
      "symbol": "ᛁ",
      "image": "assets/items/Golden Apples in a Norse Great Hall.png",
      "locationLabel": "Nordyckie podania · brak potwierdzonego znalezienia w Kronice",
      "summary": "Złociste owoce znane z opowieści o Idunn, którym przypisuje się moc zachowania młodości bogów.",
      "history": "W pieśniach o Asgardzie Idunn strzeże jabłek, dzięki którym bogowie zachowują młodość. Dla Drengrów to opowieść o wielkim darze, utracie i nieprzemijającym życiu, nie zwykły opis sadu. Publiczna Kronika nie potwierdza, by drużyna odnalazła takie owoce lub poznała ich działanie. Wpis zachowuje motyw z podań, bez ustanawiania przedmiotu w ekwipunku bohaterów i bez podawania fikcyjnych premii."
    }
  ]
};
