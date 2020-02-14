---
layout: post
title: "Dlaczego Jquery jest złe?"
author: "Igor Kowalczyk"
categories: internet programowanie javascript
comments: true
---

Witam wszystkich ponownie, tym razem w Nowym Roku i z nowym postem (wreszcie) ;). Tym razem będzie on o możliwie **najgorszej bibliotece - Jquery**, może i stara biblioteka ale nadal można ją bardzo często spotkać w internecie.
Nieważne co gadać o jej "dobrych" stronach i tak zostanie ona (według mnie) najgorszą z możliwych. 
**Od samego początku Jquery zrewolucjonizowało Java Script, po prostu było łatwiej**, ale teraz jak wiadomo 
"Czasy się zmieniają" tak samo jak internet i Jquery ze swoim AJAX'em stało się złe ale nadal odgrywa ono olbrzymią rolę w Front Endzie.

Bez zbędnego gadania przejdźmy do części właściwej.

# 1) Rozmiar

**Jquery jest po prostu grube (bez urazu)**, nawet po zminimalizowaniu w pliku .min waży bardzo dużo **(aż 87KB)** a w pliku bez kompresji **(262KB)**, to duży wręcz olbrzymi rozmiar jak na jedną bibliotekę. Ale w praktyce plik zminimalizowany to tylko 30kb ale i tak taki rozmiar zwalnia czas potrzebny na załadowanie treści strony.

Doliczając do tego kilka innych skryptów robi się z tego niezła paczka, a jak wiadomo każdy znak w pliku to dłuższy czas ładowania strony, więc chyba warto trzymać się zasady "Czym mniej tym lepiej".

# 2) Szybkość

Jeden plik z Jquery spowalnia znacząco stronę, a co w wypadku połączeń mobilnych jest **strzałem w stopę z wyrzutni rakiet**. Użytkownicy mobilni zakładają że strona załaduje się szybko i będą mogli z niej korzystać po krótkim czasie, a co z czasem ładowania Jquery i kilku innych skryptów daje nie najlepszy wynik czasowy.

**Czyli wychodzi że Jquery nie jest sprinterem.**

# 3) Przestarzały projekt

Niby nadal Jquery jest rozwijany, nadal ulepszany i nadal są wydawane nowe wersje. **Jak pisałem wcześniej Jquery zrewolucjonizowało Java Script.** 

Pierwsze wydanie **Jquery zostało wydane 26 sierpnia 2006 roku**. Dawno temu ale Jquery i tak się zestarzało, może nie przez sam czas ale przez rozwiązania w nim użyte które sprawdzały się dobrze kilka lub kilkanaście lat temu ale dzisiaj są przestarzałe i nie zbyt dobre. 

Dzisiejsze techniki różnią się znacząco od tego co jest wykorzystywane w Jquery, niektóre rozwiązania są po prostu w dzisiejszych czasach gorsze, ponieważ wiele się zmieniło od 2006 roku. Przykładem takich zestarzałych rozwiązań są np. `fadeIn` i `fadeOut`. Dzisiaj używa się raczej `classListadd` a w klasie np. `display: none;`, są także inne rozwiązania użyte w Jquery które dzisiaj są przestarzałe są to np. `.bind()` i `.delegate()`. Jquery jest także dzisiaj mało wydajne z animacjami (mówię to o `.animate()` ).

# 4) Użyteczność dawniej i dziś

Większość programistów używa Jquery przez lenistwo i używa tej biblioteki do np. wyszukiwania po selektorach, co da się w bardzo prosty sposób osiągnąć na Vanilla JS (czysty JavaScript bez żadnych bibliotek itp.), nawet sposób bez użycia Jquery wydaje mi się prostszy.
Kod Jquery:
```javascript
$('#id > tag .klasa');
```
a bez Jquery wygląda to tak:
```javascript
document.querySelectorAll('#id > tag .klasa');
```
Również prosto a nie trzeba ładować całej biblioteki z dolarem?
Kiedyś to "łapanie" elementów było totalną nowością, każdy tego używał ale dzisiaj raczej prościej jest użyć po prostu `querySelectorAll`. Jquery zmieniło się przez lata tak jak sam JavaScript i na dzień dzisiejszy Jquery IMO jest mniej użyteczny niż kiedyś.

Więc, wychodzi z tego wszystkiego że **Jquery jest złe**,  może kiedyś było dobre, a nawet bardzo dobre ale z upływem czasu zmieniło się na gorsze, powstały inne, lepsze na ten czas biblioteki. Co wy na ten temat myślicie myślicie?