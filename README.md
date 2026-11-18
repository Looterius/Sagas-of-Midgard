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
