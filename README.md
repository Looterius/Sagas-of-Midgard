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
