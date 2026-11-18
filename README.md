# Sagas of Midgard — Kronika Graczy

Publiczna kronika RPG z siecią postaci, osobną zakładką **Mapy świata**, Atlasem lokacji i **Kroniką wydarzeń**.

## Publikacja strony (jednorazowo)

1. Wejdź w **Settings → Pages** tego repozytorium.
2. W **Build and deployment** ustaw **Deploy from a branch**, `main`, folder `/ (root)`.
3. Kliknij **Save** i poczekaj na pierwszy deployment.
4. Publiczny adres: https://looterius.github.io/Sagas-of-Midgard/

## Gdzie edytować kronikę?

- `index.html` — interfejs strony.
- `styles.css` — wygląd.
- `data.js` — NPC, lokacje, **jawne** relacje i publiczne rozdziały w tablicy `chronicle`.
- Zakładka **Kronika wydarzeń** — filtrowanie historii według lokacji, rozwijanie opowieści oraz odnośniki do miejsc i postaci.
- `app.js` — nawigacja i interaktywna sieć postaci.
- `maps.js` — Mapy świata, klikalne krainy, podpięcie do Atlasu i zoom.

Nazwy postaci pochodzą z tablicy FigJam. Obecnie część kart ma inicjały zamiast portretów, a relacje osobiste zostaną dodane dopiero po potwierdzeniu kanonu.

## Bezpieczeństwo sekretów MG

To **publiczne repozytorium i publiczna strona**: każdy może odczytać zawartość wszystkich plików. Nigdy nie wpisuj tu informacji tajnych dla graczy, nawet jako ukrytych pól, danych JSON, komentarzy czy niewidocznych zakładek. Notatki wyłącznie dla Skalda trzymaj w prywatnym Notion lub osobnym prywatnym repozytorium.

## Koszty

Wersja statyczna, bez bazy, logowania, płatnego API i frameworków. W podstawowym użyciu GitHub Pages w publicznym repozytorium może działać bezpłatnie, z zastrzeżeniem limitów GitHub.

## Dane i obrazy

Do NPC przypisz `image: "assets/nazwa.webp"`, gdy obraz zostanie umieszczony w folderze `assets`. Na start używane są eleganckie zastępcze awatary. Bezpieczniej wrzucać jedynie ilustracje, które wolno publicznie udostępniać.

## Uprawnienia odwiedzających
- W publicznej kronice **karty i relacje są do odczytu**: gracze mogą przybliżać, przesuwać płótno prawym przyciskiem myszy (także nad kartami), przesuwać tło lewym, a lewym przyciskiem przeciągać pojedyncze karty **wyłącznie lokalnie w bieżącej stronie**. Nie mogą zapisać tych zmian do repozytorium.
- Oficjalne pozycje kart zapisane są w `data.js` i aktualizowane przez właściciela repozytorium / asystenta z dostępem do GitHub. Ruchy odwiedzających nie zmieniają tych danych; odświeżenie strony przywraca je automatycznie. Przycisk **Przywróć układ** zeruje lokalne przesunięcia w aktualnym filtrowanym widoku.
- Kronikę wydarzeń można rozszerzać o rozdziały po kolejnych sesjach, aktualizując tablicę `chronicle` w `data.js`.

## Atlas lokacji — aktualny model

Atlas ma hierarchię **świat → obszar → kraina → lista miejsc**. Lokacje są klikalnymi nazwami oddzielonymi przecinkami, nie wielopoziomowym menu. Kliknięcie otwiera pełną kartę z ilustracją, historią, powiązanymi postaciami i rozegranymi wydarzeniami.

- `data.js → atlasRegions` — **wyłącznie znane** graczom krainy. `parentId` wskazuje region nadrzędny.
- `data.js → places` — **wyłącznie znane** graczom lokacje. `parentRegionId` przypisuje do krainy; `null` oznacza, że położenie nie zostało potwierdzone.
- `withinSiteId` — opcjonalna relacja geograficzna (np. świątynia jest w mieście), **bez** dodatkowego poziomu na liście krainy.
- `personIds` — tylko powiązania NPC-ów poznane i zatwierdzone przez MG.
- `history` — krótka, jawna historia lokacji, niezależna od głównej chronologii wydarzeń.
- `image` — ilustracja lokalna, np. `assets/locations/hrafnvik.svg`. Cztery ilustracje SVG są obecnie ilustracjami stylizowanymi, które można zastąpić portretami/fotografiami lokacji.
- `atlas.js` — przeglądanie hierarchii, karta lokacji, łącza do NPC-ów i kroniki.

**Zasada publikacji:** nie trzymaj nieodkrytych lokacji lub światów w publicznym `data.js` (nawet z `visible: false`, zakomentowanych czy ukrytych za CSS). Pełen podręcznikowy katalog Skalda przechowuj **poza publicznym repozytorium**. Publiczne dane powinny zawierać wyłącznie informacje jawne po rozegranych sesjach.

Hrafnvik i Skjǫrvik celowo nie mają przypisanego królestwa — na razie nie potwierdziliśmy ich geograficznego położenia.

## Kontrola danych przed publikacją

W katalogu repozytorium uruchom `node scripts/check-public-atlas.mjs`, aby sprawdzić referencje, statusy widoczności oraz obecność lokalnych grafik. Zwykła publikacja GitHub Pages nadal działa bez Node i bez serwera.

## Ekran Ziem Drengrów — układ królestw

Atlas otwiera **Midgard**, a po kliknięciu Ziem Drengrów pokazuje sześć klocków: **Agder, Hordalands, Vestmar, Fjordane** (cztery królestwa), **Eylenda** (niezależna wyspa bez króla) oraz **Osada bohaterów** (Hrafnvik, bez przypisania do królestwa). Skjǫrvik pozostaje osobnym, znanym miejscem w spisie Ziem Drengrów, bez przypisania do konkretnego królestwa. Przyszłe, poznane miejscowości przypinamy do właściwych regionów jako listy nazw oddzielonych przecinkami; kliknięcie otwiera kartę lokacji.

Nazwa rodzinnej wioski w kampanii wymaga ostatecznego potwierdzenia przez Skalda (w dotychczasowej kronice jest to **Hrafnvik**, wcześniej pojawiało się również **Kjordvik**). Do czasu potwierdzenia nie zastępuj automatycznie nazw w istniejących rozdziałach.

## Mapy świata — pierwszy etap

Osobny tab **Mapy świata** nie zastępuje Atlasu. Zaczyna się od mapy Midgardu, a kliknięcie Ziem Drengrów otwiera drugi poziom z pięcioma klikalnymi regionami: czterema królestwami Drengrów i niezależną Eylendą. Kliknięcie krainy przechodzi do istniejącego Atlasu; kliknięcie znanej lokacji w wykazie pod mapą otwiera jej istniejącą kartę. W kartach Atlasu przycisk **Zobacz obszar na mapie** prowadzi z powrotem do map.

- `assets/maps/midgard.svg` — poglądowy widok Midgardu; `assets/maps/Drengrlands.png` — dostarczona mapa kampanii z klikalnymi podpisami krain i znanych lokacji. Stary plik `assets/maps/drengrlands.svg` zachowano jako archiwalny, ale nie jest używany w nowym widoku.
- `maps.js` — klikalne obszary etykiet krain (Eylenda, Agder, Hordalands, Vestmar, Fjordane) oraz siedem znanych lokacji na dostarczonym obrazie. Procentowe współrzędne wskazują napisy na obrazie, **nie są współrzędnymi GPS ani prawnym przypisaniem lokacji do królestwa**. Gardarike pozostaje na ilustracji, ale nie otrzymuje karty ani linku, dopóki nie znajdzie się w publicznym Atlasie.
- Wszystkie znane lokacje można otworzyć w liście pod mapą Ziem Drengrów. Na grafice Hrafnvik i Skjǫrvik mają klikalne podpisy, ale w strukturze danych nadal **nie są przypisane do konkretnego królestwa**.
- Dopiero po zatwierdzeniu lokalizacji przez Skalda można dodać do wpisu `places` pole `mapPosition: { mapId: "drengrlands", x: 43, y: 56, confirmed: true }` — wartości `x`, `y` są procentami położenia pinezki na zatwierdzonej ilustracji, nie współrzędnymi GPS. **Przykład składni, nie wskazanie żadnego rzeczywistego miejsca.**
- Nie dopisuj nowych map, lokacji, markerów ani nieodkrytych sekretów bez potwierdzenia, że gracze mogą je zobaczyć.

Kontrola: `node --check maps.js && node scripts/check-public-atlas.mjs && node scripts/check-public-maps.mjs`. Walidacja działa również przez GitHub Actions na PR i `main`.

## Sieć postaci — grupowanie i potwierdzona wiedza

Nowy panel pod wyszukiwarką pozwala wyświetlić tylko wybrane postacie, bez ingerencji w oficjalne pozycje kart. Zakładki: **Wszyscy, Bohaterowie, NPC, Zmarli, Władcy i jarlowie, Jeńcy**. Drugi poziom: **Królestwa i krainy, Osady, Rody i rodziny, Frakcje**. Wybrane kryteria można łączyć (logiczne AND), a wyszukiwarka przeszukuje wyłącznie pasujące karty. Filtry ukrywają inne karty i ich linie relacji; widoczna grupa układa się automatycznie. Powrót do „Wszyscy” przywraca oryginalne współrzędne. Goście mogą tymczasowo przesuwać karty; zmiany nie są zapisywane ani współdzielone.

- `character-groups.js` — wyłącznie reguły filtrowania i tymczasowego układu, nie zapisuje do repozytorium danych graczy.
- `data.js → people[].grouping` — **opcjonalne, jawnie potwierdzone** informacje: `role: "hero" | "npc"`, `lifeStatus: "deceased"`, `titles: ["jarl", "ruler"]`, `statuses: ["captive"]`, listy `kingdomIds`, `settlementIds`, `familyIds`, `factionIds`.
- `data.js → places[].personIds` — znane powiązania postaci z osadą, nie dowód miejsca pochodzenia ani aktualnego zamieszkania.
- `data.js → characterGroupCatalog` — jawne etykiety rodów i frakcji (puste, dopóki ich przynależności nie zostały zatwierdzone).
- Pierwsze potwierdzone metadane przypisano Hroaldowi (NPC, dawny jarl), Aslakowi (NPC, jeniec), Runie i bratu Anslemowi (NPC). **Sześcioro bohaterów graczy** jest jawnie zatwierdzonych w sieci: Sianita Gunnarsdóttir, Halvard „Snake-Eye”, Haroks Magnusson, Ylva, Floki oraz Asgrim. Pięć pierwszych postaci pochodzi z Hrafnviku; Asgrim jest synem władcy Agder i dołączył później do drużyny. **Tylko Floki z tej szóstki jest zmarły**; pozostaje w grupie Bohaterowie. Nie dopisuj innych niepotwierdzonych śmierci, rodów ani frakcji.
- Kategorie bez przypisań pozostają dostępne, ale pokazują komunikat o braku potwierdzonych danych; nie dorabiaj fabuły, żeby zapełnić widok.

Kontrola: `node scripts/check-character-groups.mjs` (również w CI). Test obejmuje filtry, połączenia kategorii i powtarzalność układu 110 kart.

## Bohaterowie graczy — portrety i historie

W `data.js → people` znajduje się sześć zatwierdzonych postaci graczy. Publiczne portrety zostały obejrzane i przypisane na podstawie wyglądu (Asgrim ma własny podpisany plik). Nie zmieniaj istniejących identyfikatorów postaci. Ich historie zawierają jedynie znane graczom wydarzenia, bez przyszłych scen i notatek Skalda. Jeden dodatkowy, niejednoznaczny portret `ChatGPT Image 17 wrz 2026, 11_37_54.png` pozostawiono bez przypisania.

- `sianita` — **Sianita Gunnarsdóttir**, jarlowa, żyje, Hrafnvik.
- `halvard` — **Halvard „Snake-Eye”**, dawniej roboczo nazywany Styr (wycofane imię nie pojawia się na stronie), żyje, Hrafnvik. Ma jedną potwierdzoną więź rodzeństwa z Sianitą.
- `haroks` — **Haroks Magnusson**, berserker, żyje, Hrafnvik.
- `ylva` — **Ylva**, łuczniczka, żyje, Hrafnvik.
- `floki` — **Floki**, budowniczy statków, poległ w wyprawie na Eylendę; **Bohaterowie i Zmarli** jednocześnie, Hrafnvik. Jego portret jest wyszarzany przez CSS w obu widokach.
- `asgrim` — **Asgrim**, syn Halfdana Czarnego, przybył z tarczownikami, zaręczył się z Sianitą. Ma związek z Agder oraz drużyną Hrafnviku; nie utożsamiaj tego z pochodzeniem z osady.

Wszyscy figurują w `places.hrafnvik.personIds`, więc mogą być otwierani również z karty osady. Nowe karty rozłożono na wolnych pozycjach sieci; w `app.js` „Dopasuj widok” obejmuje teraz wszystkie widoczne karty bez zmiany ich współrzędnych.

### Portrety — przypisania z wizualnej weryfikacji

- Sianita: `841056920_1454607076732851_414940541375700284_n.jpg` — kobieta w zbroi
- Halvard: `836508976_2515877412221096_575784062671443810_n.jpg` — ciemnowłosy wojownik w czarnym stroju
- Haroks: `819106917_1403096258558492_2259915694493588498_n.jpg` — muskularny wojownik w futrze z toporem
- Ylva: `836713553_1631673708686109_4202120061548436723_n.png` — łuczniczka z sową
- Floki: `843041093_29439569015649515_6290487889105704541_n.jpg` — szkutnik pracujący przy statku
- Asgrim: `Asgrim.jpeg` — podpisany plik

**Efekt żałobny:** `app.js` nadaje klasę `is-deceased` kartom osób z `grouping.lifeStatus === "deceased"`. `styles.css` wyszarza ich zdjęcia w sieci i w oknie szczegółów. Nie modyfikujemy oryginalnych obrazów na dysku. Pliki numerowane nie zostały przemianowane, tylko podpięte do właściwych identyfikatorów postaci.

## Sieć postaci — obsługa myszy i więzi Hrafnviku

- **Prawy przycisk + przeciągnięcie**: przesuwanie całego widoku, również po rozpoczęciu na portrecie. Domyślne menu kontekstowe jest wyłączone wyłącznie nad płótnem Sieci postaci.
- **Lewy przycisk na pustym tle + przeciągnięcie**: przesuwanie całej mapy.
- **Lewy przycisk na portrecie + przeciągnięcie**: przestawienie tylko tej karty, z aktualizacją linii relacji w trakcie ruchu; prędkość niezależna od przybliżenia.
- **Zwykłe kliknięcie portretu / Enter / spacja**: otwarcie biografii. Drobny ruch wskaźnika nie powinien uruchamiać przeciągania; po faktycznym przeciągnięciu nie otwiera się przypadkowo biografia.
- **Przywróć układ**: odtwarza oficjalne współrzędne w „Wszyscy” lub domyślny układ bieżącego filtra. Zmiana filtra także zeruje przesunięcia. Po odświeżeniu strony układ zawsze wraca do oryginału.

### Ujawnione więzi rodzinne

W publicznej kronice brat Sigurda, **Hroald**, został pozbawiony władzy i wzroku. **Sianita i Halvard** są rodzeństwem i dziećmi Sigurda, a więc Hroald jest ich **wujem** (Sianita — jego bratanica; Halvard — bratanek). W `data.js → relationships` są dwa osobne łuki rodzinne do Hroalda oraz wcześniejszy łuk rodzeństwa Sianita–Halvard. Zaręczyny Sianita–Asgrim pozostają niezmienione.

Relacje są jawne i widoczne na mapie **Wszyscy**; gdy filtr ukryje jedną z postaci, nie rysujemy krawędzi do ukrytej karty.

## Korekta Sieci postaci: zgodność płótna, ramki i połączeń

Wcześniejsze style odziedziczone po starej siatce deklarowały `map-scene: 1130×870`, podczas gdy po dodaniu bohaterów pozycje kart i `svg#connections` działały na `1600×1000`. Powodowało to przesunięcie końców linii, a także obcinanie kart przy dopasowaniu widoku. Teraz wszystkie trzy warstwy korzystają z tych samych wymiarów **1600×1000**, a funkcja `fit()` bierze pod uwagę rzeczywiste pozycje widocznych kart i margines bezpieczeństwa. Usunięto dekoracyjną wewnętrzną ramkę, którą można było błędnie uznać za granicę mapy.

`graph-geometry.js` wyprowadza połączenia **od ramki do ramki**. Dla zasłoniętego połączenia wyznacza trasę przez wolny korytarz, omijając pośrednie portrety, jeśli istnieje przejście. Zawiera tytuł relacji dostępny po najechaniu na linię, punkty zakotwiczenia i podświetlanie połączonych kart. Działa po przeciągnięciu postaci oraz przełączeniu filtrów, bo rysowanie używa aktualnych współrzędnych.

Test `node scripts/check-character-graph.mjs` kontroluje miejsca zaczepienia, przeszkody, wszystkie ujawnione relacje i filtry oraz zgodność SVG i CSS. **Przy ręcznym zoomowaniu lub przesuwaniu treść może celowo znaleźć się poza widokiem i zostać przycięta**; przycisk `Dopasuj widok` przywraca wszystkie widoczne karty na ekran.

## RWD i mobilna Sieć postaci (listopad 2026)

- Na telefonie **przeciągnięcie jednym palcem** przesuwa całe płótno, a **rozsunięcie lub zsunięcie dwóch palców** przybliża i oddala mapę wokół ich środka. Zakres skali 6–300%; przyciski ± i Dopasuj widok wciąż działają. Tap na portret otwiera kartę; po ruchu gestem nie powinien otwierać jej przypadkowo.
- Na komputerze dotychczasowe sterowanie pozostaje bez zmian: prawy przycisk przesuwa sieć, lewy na karcie — kartę, lewy na tle — sieć.
- **Mobilna karta postaci** to jeden przewijany ekran o szerokości urządzenia: krótszy portret, czytelna typografia, opis i relacje bez poziomego przewijania. Zamknięcie pozostaje widoczne.
- **Znane powiązania** są teraz przyciskami prowadzącymi do kart innych postaci. Potwierdzone powiązania z osadami (jawne `people[].grouping.settlementIds` lub `places[].personIds`) otwierają kartę danego miejsca w Atlasie; `kingdomIds` otwiera jawny region Atlasu. Powiązanie z osadą oznacza znaną więź, nie koniecznie miejsce urodzenia.
- Po przejściu do kolejnej karty postaci czytanie zaczyna się od góry. Tab/Shift+Tab przemieszczają się po interaktywnych kontrolkach w karcie; Escape ją zamyka.
- **Sekrety MG pozostają poza danymi strony**. Nie dodano nowych niepotwierdzonych przynależności.
- W CI: `node scripts/check-mobile-rwd.mjs` wraz z dotychczasowymi testami Atlasu, map i grafu.

## Wydajność portretów — WebP + loading on demand

**Nie usuwaj i nie nadpisuj oryginalnych obrazów w `assets/portraits/`.** Oryginały służą do ponownej kompresji i stanowią fallback.

Z pliku `data.js → people[].image` generator tworzy w katalogu `assets/portraits/optimized/`:
- `<person-id>-thumb.webp` (do 480×640 px, WebP quality 73) dla małych kart w Sieci postaci i NPC-ów Atlasu;
- `<person-id>-full.webp` (do 1200×1600 px, WebP quality 78), o ile jest co najmniej 6% mniejszy od oryginału; w przeciwnym wypadku w szczegółach pozostaje oryginalny plik;
- `portrait-assets.js` — jawny manifest mapujący aktualne oryginalne ścieżki na wersje WebP i oznaczający nieistniejące pliki (bez zbędnych 404).

**Zachowanie:** `app.js` odracza pobieranie niewidocznych miniatur w Sieci postaci przez `IntersectionObserver` z zakresem 150 px od ekranu mapy. Wersja pełna jest pobierana dopiero przy otwarciu biografii. `atlas.js` używa miniatur WebP dla NPC oraz natywnego `loading="lazy"` dla obrazów poza widokiem. Jeżeli wariant WebP nie jest dostępny, aplikacja próbuje załadować oryginał, a następnie zdalny adres źródła.

Wynik optymalizacji z 18 listopada 2026: **16 plików** skompresowano z **25,24 MiB oryginałów** do **0,50 MiB łącznych miniaturek** oraz **2,03 MiB łącznych wersji do szczegółów** (część już małych JPEG pozostaje oryginałem w widoku pełnym). To zmniejsza transfer wszystkich 16 miniaturek o **około 98%**. `Svala Ketilsdóttir i synowie` nadal nie ma dostarczonego portretu, dlatego używa placeholdera, bez niepotrzebnego żądania.

**Po dodaniu lub podmianie obrazów:** `node scripts/export-public-portrait-references.mjs > /tmp/som-portrait-refs.json`, następnie `python -m pip install Pillow` i `python scripts/optimize-portraits.py /tmp/som-portrait-refs.json`. Zacommituj wygenerowane pliki WebP i `portrait-assets.js` razem ze zmianą w `data.js`. Walidacja CI: `node scripts/check-portrait-assets.mjs`. Nie dodawać ręcznie nazw/sekretów Skalda — manifest budujemy tylko z publicznych `people[]`.

## Mobilna nawigacja Wstecz (History API)

Strona zachowuje się jak aplikacja z wewnętrznymi ekranami, ale **nie blokuje systemowego przycisku Wstecz**. `navigation.js` zapisuje w historii przeglądarki wyłącznie jawny stan UI (zakładka, aktualny poziom mapy, region Atlasu, ewentualnie karta postaci/miejsca, filtry postaci i otwarte rozdziały Kroniki).

Przykładowe drogi:
- Sieć postaci → Sianita → Halvard → **Wstecz = Sianita** → **Wstecz = Sieć postaci**.
- Sieć postaci → Sianita → Hrafnvik w Atlasie → **Wstecz = Sianita** → **Wstecz = Sieć postaci**.
- Mapy świata → Ziemie Drengrów → **Wstecz = Midgard** → **Wstecz = poprzednia zakładka**.
- Atlas Midgardu → Ziemie Drengrów → Agder → miejsce → **Wstecz** cofa po jednej karcie i poziomie.
- **Wstecz z ekranu startowego** nie jest przechwytywane. Przeglądarka wychodzi z aplikacji albo wraca na stronę poprzedzającą jej otwarcie.

Bez sztucznego przechwytywania `popstate` na korzeniu, bez zapętlonego dopisywania historii podczas odtwarzania. W obrębie jednego kliknięcia (np. zamknięcie postaci + otwarcie miejsca) wpisy historii są konsolidowane w jednym mikrozadaniu. X i Escape w modalach cofają do poprzedniego wewnętrznego ekranu, jeśli istnieje wpis w historii. Po odświeżeniu otwartego ekranu można kontynuować nawigację na podstawie `history.state`. Nie używać `sessionStorage` do zapisywania postępów fabularnych; historia nie zawiera sekretów MG.

Test: `node scripts/check-navigation-history.mjs`, uruchamiany w CI; ponadto test interakcji mobilnych w Chromium/Android.

## Kanon Sieci postaci — listopad 2026

Nowa lista zawiera **25 jawnych postaci** (6 bohaterów graczy, 19 NPC), każda z osobną biografią opartą na Tomie I, znanych wydarzeniach Eylendy i korektach MG. Nowo dodani: Sigurd, Sten (Stern), Hakon Czerwony, Torvald Kowal, Mord, Ulf. Dawna zbiorcza karta „Svala Ketilsdóttir i synowie” jest teraz indywidualną kartą Svali; jej bliźniacy Mord i Ulf otrzymali własne pozycje.

### Obowiązujące korekty Skalda
- Sigurd i Hroald byli braćmi; **Sigurd oślepił Hroalda** i przejął tron Hrafnviku.
- Sigurd był ojcem **Sianity Gunnarsdóttir** oraz **Halvarda „Snake-Eye”**. Zachowujemy nieregularny patronimik Sianity na wyraźną prośbę MG — NIE zamieniamy go na Sigurdsdóttir. Styr to wycofane imię Halvarda.
- **Runa** = dawna „Rona”, **Sten** = dawny „Stern”; oboje są dziećmi Hroalda.
- **Ulf i Mord są braćmi bliźniakami**, synami Svali. Mord jest NPC-em, który poległ; Ulf nie jest automatycznie Ulfem Szarym (osobny bohater w scenariuszu).
- Potwierdzeni zmarli w filtrze Zmarli: **Sigurd, Mord i Floki**. Floki pozostaje bohaterem gracza, mimo śmierci. **Sten ma nieustalony los** (w Tomie I oficjalnie uznawany za martwego/zaginionego), więc nie nadano mu flagi „zmarły”.
- Hakon Czerwony jest najbogatszym mieszkańcem i właścicielem floty; dawniej zatrudniał Flokiego, obecnie Aslaka. Torvald Kowal powrócił od chrześcijaństwa do wiary w Thora i Odyna pod wpływem Flokiego.

### Połączenia i Atlas
W `data.js.relationships` znajdują się **17 jawnych relacji**: najbliższe więzi rodzinne, bliźniactwo, narzeczeństwo, spór na Thingu oraz relacje zawodowe i religijne. Karty obu końców są klikalne; status zmarłego jest wizualnie pokazany także przy NPC-ach Atlasu.

Katalog rodzin zawiera jawne etykiety „Rodzina Sigurda i Hroalda” oraz „Rodzina Svali i Ketila”. Nie dorabiamy nienazwanych rodów, skrywanych frakcji ani nowej historii. Połączenia lokacji dotyczą publicznie znanych związków, **nie zawsze pochodzenia lub aktualnego adresu**. Hrafnvik grupuje znanych mieszkańców i osoby z nim związane, Skjǫrvik — Ragnvalda Skjoldssona, Hakiego i Aslaka; Eylenda i kurhan odnoszą się do uczestników wyprawy. Nie deklarujemy, do którego królestwa należy Hrafnvik.

**Portrety:** sześć nowych NPC-ów nie otrzymało jeszcze zdjęć — czekają na pliki przekazane przez MG. **Nie wykorzystujemy sztucznych zdjęć ani wizerunków innych postaci jako zastępników.** W razie braku ilustracji istniejące inicjały; oryginały WebP i manifest pozostają nienaruszone. Po dołożeniu nowych zdjęć należy zregenerować `portrait-assets.js` i miniatury za pomocą `scripts/optimize-portraits.py`.

Testy: `node scripts/check-character-groups.mjs` oraz `node scripts/check-character-graph.mjs`; standardowe testy publicznego Atlasu i wydajności portretów nadal obowiązują.

Źródła narracyjne: `Scenariusz dla Sagas of Midgard(3).pdf` (Tom I), `Scenariusz dla Sagas of Midgard IIa.pdf` (Tom II) i dziennik faktycznie rozegranych wydarzeń 05.11.2026 w Notion. **Nie wolno przenosić do publicznego `data.js` sekretów Skalda ani nierozstrzygniętych wariantów scenariusza.**

## Swobodne przesuwanie kart i kolejne portrety (listopad 2026)

Usunięto ograniczenie x=0..1420/y=0..760 dla przeciągania kart myszką w Sieci postaci. Pozycje mogą być również ujemne lub przekraczać pierwotne 1600×1000. Router grafu generuje korytarze poza pierwotną sceną; przycisk „Dopasuj widok” obejmuje wszystkie widoczne karty również po ręcznym przesunięciu. Przesuwanie płótna i gest pinch na telefonie pozostają bez zmian, a „Resetuj układ” przywraca wyjściowy porządek.

Wykorzystane oryginalne zdjęcia z `assets/portraits/`: Sigurd, Sten (plik zawiera dawną formę Stern), Svala, Ulf, Hakon Czerwony, Torvald Kowal (plik nazywa się Thorwald), Orm, Ragnvald Skjoldsson i Haki. Portret Morda został później dostarczony jako `assets/portraits/Mord.png` (zob. aktualizacja 19.11.2026).

Potwierdzony, jawny kanon władców: Alrek Eriksson — Hordalands, Halfdan Czarny — Agder (ojciec Asgrima), Audbjorn — Fjordane. Vestmar nie jest w źródłach jednym zjednoczonym królestwem pod jednym jarlem: są tam cztery rywalizujące obozy. Trzej bracia Gudrodssonowie zostali następnie zatwierdzeni przez MG jako przedstawiciele podzielonego Vestmaru (zob. aktualizacja 19.11.2026). Drengrlands to obszar nadrzędny dla czterech królestw i Eylendy — **nie jest nazwą dynastii**. MG następnie potwierdził: `Orm.png` przedstawia **Orma Półgłosa** ze zniszczonej osady identyfikowanej w publicznym Atlasie jako Skjǫrvik. Nie utożsamiamy go z Ormem Jednorękim (zob. aktualizacja 19.11.2026).

Po zmianie `people[].image` ponownie generujemy WebP i `portrait-assets.js` z publicznych `data.js.people[]`. W katalogu zachowujemy oryginały.

## Aktualizacja kanonu — 19 listopada 2026

**32 jawne postacie, 21 relacji, 3 rodziny i 4 królestwa w filtrach.** MG potwierdził, że Orm z istniejącego portretu to **Orm Półgłos z osady zniszczonej w wyniku najazdu Hrafnviku**. Przypisano go do jedynej jawnie zniszczonej osady w aktualnym Atlasie: **Skjǫrvik**. Nie publikujemy niepotwierdzonych szczegółów śledztwa i nie utożsamiamy Orma Półgłosa z Ormem Jednorękim. Plik `assets/portraits/Mord.png` jest już potwierdzonym zdjęciem Morda; `assets/portraits/Audbjorn.png` uzupełnia jego portret.

**Vestmar:** synowie Gudroda Łowcy to Olaf (najstarszy, pretendent przebywający w Myrka), Torsten (środkowy, jarl Dagrfjell) i Alfheld (młody, popularny jarl Guntersborgu). O ich rywalizacji i ojcu mówi jawna część podręcznika *Sagas of Midgard*, rozdział o Broken Kingdom of Vestmar, s. 83. MG potwierdził trzech braci i dostarczył portrety. Każdy ma swoją biografię, `kingdomIds:["vestmar"]`, wspólny filtr `Ród Gudrodssonów`, i obustronne klikalne połączenia oznaczone `Bracia; rywale o władzę w Vestmarze`. Vestmar **nie ma obecnie jednego niekwestionowanego króla** — trzech braci oraz gildisbroedr reprezentują odrębne obozy. Nie publikujemy zaplanowanych scen ani wyników, których gracze nie rozegrali.

Zaktualizowany manifest portretów i warianty WebP są generowane na podstawie wszystkich 32 aktualnych publicznych `people[]`. Nie wolno nadpisywać oryginałów ani dodawać niepotwierdzonych relacji.

## Potwierdzenia kanonu i obsługa sieci — 19.11.2026

- **Floki i Haroks** byli braćmi; **Morotar Jednooki** jest przybranym ojcem obu. Czworokąt nie jest domniemaną więzią krwi: trzy relacje rozróżniają braterstwo i przybrane ojcostwo. Dodano filtr „Rodzina Morotara”.
- **Ylva** jest córką **Astrid Freyjadóttir**. Dodano linię „Matka i córka” oraz filtr „Rodzina Astrid i Ylvy”.
- **Alrek Eriksson**, król Hordalands, był **konungiem uznawanym przez Hroalda**. Gdy Sianita objęła władzę w Hrafnviku, Alrek domagał się od niej przysięgi i proponował za męża swego syna. Sianita **odmówiła obu propozycjom**. Dodano jawne więzi polityczne Alrek–Hroald i Alrek–Sianita; nie mylić z rodziną ani formalnym lennem bez dodatkowego zatwierdzenia.
- **Ragnvald Skjoldsson** to jeniec pojmany w najechanym Skjǫrviku i zabrany do **Hrafnviku**. Został dodany do filtra Jeńcy i powiązany z oboma miejscami, bez zmiany statusu Ragnvalda Prawomówcy.
- Sieć ma **32 osoby, 27 relacji, 5 rodzin**. Na urządzeniach dotykowych krótkie dotknięcie otwiera biografię, normalny ruch palca przesuwa planszę, **przytrzymanie postaci przez 380 ms i przeciągnięcie** przesuwa samą kartę. Na desktopie działa bezpośredni drag myszą, również za zdjęcie (wyłączony natywny drag obrazu).
- Osobny układ pozycji jest utrzymywany **w pamięci bieżącej wizyty dla każdego filtra**, także po przełączeniu na „Władcy i jarlowie” i z powrotem; „Przywróć układ” resetuje tylko aktualną grupę. Po przeładowaniu strony układ wraca do domyślnego — publiczny kod nie zapisuje pozycji graczy.

**Synchronizacja z najnowszą kroniką:** zachowano pięć rozdziałów i 21 publicznych wydarzeń z równoległego commita, a także pisownię Halward i Skjordvik. Nowe więzi i mechanika przeciągania zostały nałożone na te materiały, nie zastąpiły ich.
