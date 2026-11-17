# Sagas of Midgard — Kronika Graczy

Publiczna kronika RPG z interaktywną mapą postaci, atlasem lokacji i **Kroniką wydarzeń**.

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
- `app.js` — zachowanie mapy.

Nazwy postaci pochodzą z tablicy FigJam. Obecnie część kart ma inicjały zamiast portretów, a relacje osobiste zostaną dodane dopiero po potwierdzeniu kanonu.

## Bezpieczeństwo sekretów MG

To **publiczne repozytorium i publiczna strona**: każdy może odczytać zawartość wszystkich plików. Nigdy nie wpisuj tu informacji tajnych dla graczy, nawet jako ukrytych pól, danych JSON, komentarzy czy niewidocznych zakładek. Notatki wyłącznie dla Skalda trzymaj w prywatnym Notion lub osobnym prywatnym repozytorium.

## Koszty

Wersja statyczna, bez bazy, logowania, płatnego API i frameworków. W podstawowym użyciu GitHub Pages w publicznym repozytorium może działać bezpłatnie, z zastrzeżeniem limitów GitHub.

## Dane i obrazy

Do NPC przypisz `image: "assets/nazwa.webp"`, gdy obraz zostanie umieszczony w folderze `assets`. Na start używane są eleganckie zastępcze awatary. Bezpieczniej wrzucać jedynie ilustracje, które wolno publicznie udostępniać.

## Uprawnienia odwiedzających
- W publicznej kronice **karty są tylko do odczytu**: gracze mogą otworzyć kartę, przybliżyć mapę i przesuwać jej tło, lecz nie mogą przestawiać NPC-ów.
- Oficjalne pozycje kart zapisane są w `data.js` i aktualizowane przez właściciela repozytorium / asystenta z dostępem do GitHub.
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

Atlas od razu otwiera Ziemie Drengrów, prezentując sześć klocków: **Agder, Hordalands, Vestmar, Fjordane** (cztery królestwa), **Eylenda** (niezależna wyspa bez króla) oraz **Osada bohaterów** (Hrafnvik, bez przypisania do królestwa). Skjǫrvik pozostaje osobnym, znanym miejscem w spisie Ziem Drengrów, bez przypisania do konkretnego królestwa. Przyszłe, poznane miejscowości przypinamy do właściwych regionów jako listy nazw oddzielonych przecinkami; kliknięcie otwiera kartę lokacji.

Nazwa rodzinnej wioski w kampanii wymaga ostatecznego potwierdzenia przez Skalda (w dotychczasowej kronice jest to **Hrafnvik**, wcześniej pojawiało się również **Kjordvik**). Do czasu potwierdzenia nie zastępuj automatycznie nazw w istniejących rozdziałach.
