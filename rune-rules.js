/* Publiczny, skrócony opis mechaniki ze źródła: Sagas of Midgard Corebook,
   rozdział 4, drukowane s. 53–61. Samodzielne polskie streszczenie zasad:
   wartości i warunki zachowane, bez kopiowania opisów narracyjnych. */
(() => {
  "use strict";
  const effects = {
  "algiz": [
    "Do 5 wybranych sojuszników: przez 2 rundy nie otrzymują obrażeń. Gdy dowolna chroniona postać podejmie działanie mogące zadawać obrażenia, cała osłona natychmiast znika — także u pozostałych.",
    "Rzucający otrzymuje DR 2 na 3 rundy. Nie wykonuje rzutu na aktywację tego efektu.",
    "Do 2 wybranych sojuszników: przez 3 rundy ich HP nie może spaść poniżej 1."
  ],
  "ansuz": [
    "Możesz poświęcić akcję na zadanie Odynowi jednego pytania i uzyskanie odpowiedzi. Po tej akcji wracasz do normalnej świadomości.",
    "Przez 5 rund otrzymujesz +40 do zdolności boskiej One-Eyed Wisdom.",
    "Wybierz widocznego sojusznika: przez 2 rundy może automatycznie zaliczać dowolne rzuty, także po zobaczeniu wyniku rzutu."
  ],
  "berkanan": [
    "Otrzymujesz +30 do Scouting podczas następnej fazy rajdu.",
    "Wybierz do 5 sojuszników: przez 5 rund otrzymują +40 do Light Hands.",
    "Do 3 przeciwników trafionych już w ramach tego rzutu run: brzozy unieruchamiają ich na 3 rundy. Aby się uwolnić, trzeba zadać drzewom 15 obrażeń (ognień zadaje ×2); trafienie drzew nie wymaga rzutu."
  ],
  "dagaz": [
    "Przez 3 rundy sojusznicy w zasięgu topora na początku swojej tury odzyskują 2 + (SP Runecasting / 4) HP. Wrogowie otrzymują dodatkowe 1 + (SP / 10) obrażeń od zdolności kosztujących Favor.",
    "Wybierz sojusznika w zasięgu oszczepu: przez 3 rundy jest odporny na obrażenia od broni i magii, ale otrzymuje trzykrotne obrażenia od trucizny.",
    "Po rozpatrzeniu tego rzutu run natychmiast kończą się WSZYSTKIE efekty runiczne i statusy na polu bitwy — zarówno korzystne, jak i szkodliwe. Bez rzutu."
  ],
  "ehwaz": [
    "Przez 3 rundy dosiadasz magicznego wierzchowca: +20 do Dodge i +2 do zadawanych obrażeń; możesz atakować z jego grzbietu. Po efekcie bezpiecznie lądujesz.",
    "Ty i sojusznicy przez 1 + (SP Runecasting / 4) rund możecie pokonywać 2 przedziały odległości podczas ruchu zamiast 1.",
    "Magiczna szarża: wykonaj rzut na trafienie wobec każdego wroga w zasięgu topora. Trafieni zostają odepchnięci do zasięgu oszczepu i nie mogą poruszać się w następnej turze."
  ],
  "fehu": [
    "Za atakowany cel można obrać dowolnego widocznego wroga. Przy trafieniu zadajesz 5 + (SP Runecasting / 3) obrażeń; pojawia się też skarb o wartości 20 + (SP / 2) HS.",
    "Ty i wszyscy sojusznicy w zasięgu topora dostajecie +15 do trafienia na 2 rundy.",
    "Przez 3 rundy każdy wróg w zasięgu oszczepu zadaje o 2 obrażenia mniej (−2). Bez rzutu."
  ],
  "gebo": [
    "Sojusznik w zasięgu łuku natychmiast odzyskuje 5 + (SP Runecasting / 3) HP.",
    "Wybierz do 5 sojuszników: przez 3 rundy odzyskują po 3 HP na początku własnej tury.",
    "Do 3 + (SP Runecasting / 6) istot w zasięgu łuku: każda natychmiast odzyskuje 5 + (SP / 4) HP."
  ],
  "hagalaz": [
    "Wszystkie istoty w zasięgu topora albo oszczepu od rzucającego otrzymują 3 + (SP Runecasting / 3) obrażeń od gradu. Bez rzutu; efekt nie ogranicza się do wrogów.",
    "Na 2 rundy powstaje śnieżna zawierucha w zasięgu oszczepu. Istoty w jej obszarze wielkości zasięgu topora są oślepione, poruszają się z połową prędkości i muszą wydać akcję na ruch.",
    "Przez 2 rundy oblodzenie rozciąga się do zasięgu łuku wokół ciebie. Wróg próbujący poruszyć się po lodzie pada na ziemię i otrzymuje 3 obrażenia."
  ],
  "ihwaz": [
    "Atakujesz jednego wroga w zasięgu łuku. Trafienie zadaje 10 + (SP Runecasting / 2) obrażeń od ognia.",
    "Przez 2 rundy sojuszników w zasięgu oszczepu nie można powalić; dostają +20 do Force of Nature i ignorują kary za poruszanie się po niebezpiecznym terenie.",
    "Do 3 sojuszników objętych rzutem run: dostają 10 tymczasowych HP na 3 rundy. Te HP tracą jako pierwsze, zanim utracą zwykłe HP."
  ],
  "ingwaz": [
    "Przez 10 rund masz +40 do Natural Leader i możesz wykonać próbę uwiedzenia nieagresywnej istoty z tym bonusem.",
    "Wrogo nastawiona istota w zasięgu oszczepu staje się przyjazna i walczy po waszej stronie podczas następnej tury. Efekt natychmiast kończy się, jeśli ona otrzyma obrażenia od ciebie lub sojusznika.",
    "Zaatakuj wroga już objętego tym rzutem run. Po trafieniu kontrolujesz jego akcje przez 2 rundy; obrażenia nie przerywają kontroli. Rozkaz bezpośrednio samobójczy wymaga dodatkowego udanego rzutu Runecasting; niepowodzenie oznacza bezczynność celu, nie koniec efektu."
  ],
  "isaz": [
    "Jedna istota w zasięgu oszczepu: po trafieniu zostaje zamknięta w lodzie na 3 rundy. Lód ma 30 HP, otrzymuje ×2 obrażeń od ognia i jest odporny na obrażenia lodowe. Sojusznik może dobrowolnie przyjąć efekt bez rzutu.",
    "Do 4 sojuszników: przez 3 rundy mają +5 tymczasowych HP (traconych jako pierwsze) oraz DR 2. Pancerz przyjmuje ×2 obrażeń od ognia. Po 3 rundach niewykorzystane tymczasowe HP znikają.",
    "Przez 3 rundy wróg rozpoczynający turę w zasięgu topora od któregokolwiek sojusznika otrzymuje 3 + (SP Runecasting / 6) obrażeń od zimna. Bez rzutu; efekt nie kumuluje się z kolejną taką samą osłoną."
  ],
  "jera": [
    "Pojawia się uczta dla drużyny: +5 Favor; podczas mead-break można odzyskać 75% całkowitych HP. Podczas rajdu: +20 do następnego rzutu rajdowego (ale nie pierwszego). Uczta znika w ciągu 24 godzin.",
    "Wybierz siebie lub sojusznika w zasięgu łuku: przez maksymalnie 3 rundy możesz poświęcać akcję, by dodawać +15 do jego następnej akcji za każdą rundę skupienia (maksymalnie +45). Jeśli rzucający otrzyma obrażenia, niewykorzystany bonus przepada.",
    "Wróg już trafiony tym rzutem run: przez maksymalnie 5 rund kumuluje −15 do wszystkich działań za każdą rundę podtrzymywania (do −75). Po 5 rundach ginie. Otrzymanie obrażeń przez rzucającego natychmiast kończy efekt."
  ],
  "kaunan": [
    "Istoty trafione w zasięgu oszczepu otrzymują 6 + (SP Runecasting / 4) obrażeń od ognia; przy pudle połowę. Podpalony cel na początku każdej tury otrzymuje dalsze 1 + (SP / 3) obrażeń, dopóki nie wyda akcji na ugaszenie.",
    "Przez 2 + (SP Runecasting / 10) rund broń twoja i sojuszników w zasięgu topora przy trafieniu zadaje dodatkowe 1 + (SP / 6) obrażeń od ognia.",
    "Do 5 wrogów trafionych wcześniej jakimkolwiek efektem tego rzutu run: przez 3 rundy nie mogą odzyskiwać HP w żaden sposób. Bez rzutu."
  ],
  "laguz": [
    "Fala uderza we wszystkie istoty przed tobą, do zasięgu oszczepu. Trafienie zadaje 3 + (SP Runecasting / 4) obrażeń i odpycha cel o 1 przedział odległości.",
    "Ty i sojusznicy możecie chodzić po wodzie z normalną prędkością przez maksymalnie 10 rund. Podczas rajdu dodatkowo +30 do Navigation.",
    "Do 3 wrogów wcześniej objętych tym rzutem run: przez 3 rundy otrzymujesz przeciw nim +20 do trafienia i +2 obrażeń od trucizny."
  ],
  "mannaz": [
    "Na 3 rundy rośniesz do dwukrotności wzrostu: −10 do Dodge, ale +3 obrażeń przy atakach bronią.",
    "Przez 3 rundy możesz teleportować się do sojusznika w zasięgu oszczepu, który ma otrzymać obrażenia, i przyjąć je zamiast niego. Maksymalnie 2 takie przejęcia na rundę.",
    "Wróg już trafiony tym rzutem run maleje do połowy rozmiaru na 3 rundy. Jego Dodge Rollover wzrasta o +10, lecz zadaje −3 obrażenia. Bez rzutu."
  ],
  "naudiz": [
    "Przeciwnik w zasięgu oszczepu: po trafieniu łańcuchy unieruchamiają go na 3 rundy, a ty masz +15 do trafienia przeciw niemu. Możesz użyć tej akcji maksymalnie 3 razy w jednej walce.",
    "Przez 2 rundy nie możesz działać ani się poruszać, ale również nie możesz otrzymać obrażeń. Na początku swojej tury w rundzie 3 odzyskujesz pełne HP.",
    "Wszyscy sojusznicy w zasięgu łuku natychmiast zostają uwolnieni z ograniczeń ruchu: chwytów, kajdan oraz efektów naturalnych i magicznych."
  ],
  "othalan": [
    "Przez jeden sezon po powrocie z rajdu wszystkie ulepszenia osady kosztują o 30% mniej.",
    "Podczas walki wewnątrz osady, która kiedykolwiek należała do bohatera, otrzymujesz +30 do trafienia i +30 do Dodge.",
    "Podczas fazy szturmu (Assault Phase) wynik w przedziale 76–100 pozwala przejąć osadę lub wymusić danegeld."
  ],
  "pertho": [
    "Wybierz 2 sojuszników w zasięgu łuku. Każdy może przerzucić jeden własny rzut wykonany w ciągu najbliższych 5 rund.",
    "Przez 10 rund zdolność With Joy I Cease pozwala przy jednym zabójstwie zabić maksymalnie 5 wrogów zamiast jednego. Po upływie 10 rund rzucający UMIERA; drużyna otrzymuje Favor i Death Boon według zwykłych zasad.",
    "Do 5 wybranych rzutów obronnych (Dodge albo zdolność boska unikająca obrażeń) dodajesz +20. Decyzję możesz podjąć po wykonaniu rzutu; niewykorzystane użycia znikają po walce."
  ],
  "raido": [
    "Przyzywasz do 6 magicznych sześcionożnych wierzchowców, które pokonują przeszkody terenowe. Trwają 1 + (SP Runecasting / 10) godzin. Nie nadają się do bitwy: otrzymanie obrażeń kończy efekt dla trafionego jeźdźca.",
    "Ty i do 5 sojuszników natychmiast przemieszczacie się do widocznego miejsca odległego o 20–(50 + SP Runecasting / 2) mil.",
    "Wróg trafiony już tym rzutem run: otrzymuje 6 + (SP Runecasting / 5) obrażeń, nie może poruszać się przez 2 rundy, po czym upada na ziemię."
  ],
  "sowilo": [
    "Do 5 przeciwników w zasięgu łuku: przy trafieniu przez 2 rundy ty i wszyscy sojusznicy otrzymujecie +20 do trafienia przeciw tym celom.",
    "Przez 3 rundy świecisz na obszar zasięgu łuku, a wszystkie twoje zdolności wykorzystujące broń zadają +3 obrażenia.",
    "Wróg już objęty tym rzutem run: przy trafieniu jest skamieniały przez 5 rund, a przy pudle jest oślepiony przez 3 rundy."
  ],
  "thurisaz": [
    "Tworzysz pas cierni długości 1 przedziału odległości w zasięgu łuku na 2 + (SP Runecasting / 6) rund. Wróg poruszający się przez ciernie otrzymuje 2 + (SP / 2) obrażeń bez rzutu.",
    "Przez 3 rundy każdy wróg, który trafi cię atakiem wręcz zadającym obrażenia, sam otrzymuje 2 + (SP Runecasting / 4) obrażeń.",
    "Wróg trafiony już tym rzutem run przez 2 rundy musi atakować najbliższą istotę — sojusznika lub wroga — a przy trafieniu zadaje o 2 obrażenia więcej."
  ],
  "tiwaz": [
    "Wszyscy sojusznicy w zasięgu łuku przez 3 rundy są odporni na strach i mają +10 do Dodge.",
    "Wszyscy sojusznicy w zasięgu łuku przez 3 rundy otrzymują +10 do trafienia. Podczas rajdu efekt może zamiast tego zapewnić +30 do następnego rzutu Tactics.",
    "Wskazany wróg w zasięgu runy przez 5 rund musi atakować tylko ciebie (+10 do jego Rollover). Ty masz +20 do trafienia przeciw niemu, a inne istoty mają −20 do ataków na ciebie lub tego wroga. Gdy zadasz obrażenia innej istocie, efekt znika."
  ],
  "uruz": [
    "Przyzywasz tura na 3 rundy. Jego HP i premia do ataku wzrastają o SP Runecasting / 2. Tur sam atakuje wrogów.",
    "Przez 3 rundy możesz dodatkowo używać Gore: przemieść się do zasięgu oszczepu i wykonaj atak, wykorzystując premię Runecasting. Trafienie zadaje 4 obrażenia kłute i powala cel.",
    "Przez 3 rundy otrzymujesz +40 do Might of the Storm i +4 obrażenia przy atakach bronią."
  ],
  "wunjo": [
    "Otrzymujesz +30 do następnego rzutu Planning podczas rajdu.",
    "Następne ulepszenie osady kosztuje o 40% mniej.",
    "Wybierz jednego sojusznika w zasięgu łuku: wszystkie działające na niego efekty statusowe natychmiast się kończą."
  ]
};
  // Słownik jawny: nie zawiera odkryć, przyszłych wydarzeń ani danych MG.
  window.SOM_RUNE_RULES = Object.freeze(effects);
})();