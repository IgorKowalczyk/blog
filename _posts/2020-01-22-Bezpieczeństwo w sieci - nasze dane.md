---
layout: post
title: "Bezpieczeństwo w sieci - Nasze dane"
author: "Igor Kowalczyk"
categories: internet
comments: true
---

Witajcie, jak mówiłem, ten wpis jest kolejną częścią serii o bezpieczeństwie w internecie.  Dzisiaj zajmę się danymi jakie udostępniamy w internecie.

**Bez przedłużania, zaczynajmy.**

# Hasła

**Dużo ludzi popełnia fatalny błąd - podaje to samo hasło w wielu miejscach** w internecie, dla hakera jedno hasło w większości portali jest wielkim ułatwieniem bo łatwo może dopasować je do E-Maila, Loginu czy numeru telefonu.

Błędem jest także ustawianie zbyt krótkiego lub zbyt prostego hasła typu: `hasło1, hasło2, hasło3`, dla hakerów to także wielkie ułatwienie. Gdy używamy takiego hasła jeszcze do wielu kont, E-Maili itp. jeszcze bardziej stajemy się podatni na atak hakerów.

**Po takim dopasowaniu hasła do E-Maila czy innego konta, już tylko prosta droga do zalogowania i  stracenia dostępu do konta**.

# E-Maile

**E-Maile - są dzisiaj bardzo powszechne, większość serwisów przy rejestracji czy przy logowaniu pyta nas o nasz E-Mail** (albo o telefon ale o tym za chwile). Jeżeli osoba hakująca posiada nasz adres E-Mail z jakiś wycieków baz danych czy sami go mu podaliśmy (nie koniecznie wysyłając mu wiadomość z E-Mailem tylko podając ten E-Mail w miejscu publicznym np. w profilu na jakimś serwisie). Jest wstanie uzyskać dostęp do hasła może i taką samą drogą jak uzyskał do E-Maila (raczej wykluczając wiadomość z hasłem od nas). Jak haker ma adres E-Mail i hasło do niego lub do innego serwisu - jest wstanie wykraść dalsze dane.

**Teraz jest pytanie co zrobić jak ktoś nieznany zalogował się na nasz adres E-Mail** - najlepiej sprawdzić wszystkie pola w profilu (np. przekierowanie adresu E-Mail) i wylogować ze wszystkich urządzeń, potem należy zmienić hasło.

Do rejestracji na nieznanych lub podejrzanych serwisach IMO najlepiej jest użyć tkz. "Ten Minute Mail", te adresy E-Mail istnieją tylko 10 minut (można zwykle ten czas przedłożyć) , pomagają uniknąć otrzymywania spamu na nasz główny adres E-Mail.

# Numer telefonu

**Wiele stron przy rejestracji lub logowaniu prosi o podanie numeru telefonu** - wydaje się to bezpieczniejsze niż adres E-Mail ale tylko na pierwszy rzut oka, jak się wydaje telefon to rzecz fizyczna zwykle mamy ją przy sobie. 

Jak dostaniemy wiadomość np. przepisz kod z tej wiadomości (mówię tu o **weryfikacji dwu etapowej** o której wspomnę za chwilę) to jest znak że ktoś próbuję wykraść nasze konto a zarazem nasze dane podane na tym koncie. Nie można wtedy odetchnąć z ulgą i pomyśleć "Uff, było blisko", trzeba jak najszybciej zmienić hasło na tym serwisie aby zapobiec drugiemu takiemu atakowi. **Numer można zawsze przepiąć aby otrzymywane wiadomości z niego były wysyłane na 2 numer** np. kod weryfikacyjny pójdzie także do hakera a nie tylko do nas, wiec trzeba przepiąć numer ponownie do nas.

**Ja osobiście polecam do rejestracji w różnych podejrzanych serwisach za pomocą numeru telefonu z różnych stron które udostępniają takie numery i wyświetlają wszystkie przychodzące na nie wiadomości u siebie na stronie**, zapobiega to np. otrzymaniu spamu na ten numer telefonu.

# Weryfikacja 2 etapowa

**Włączenie weryfikacji dwu etapowej zwiększa poziom bezpieczeństwa na koncie** ale i tak **takie konto jest narażone na ataki hakerów**. Mogą podać ci linka np. do zaproszenia do gry, przekierowuje na **fałszywą stronę logowania** (np. z jedną zmienioną literą, adres wygląda tak samo ale to zupełnie inny adres, **dane idą do osoby hakującej**), osoba zyskuje hasło, E-Mail (może nawet i numer telefonu) i kod weryfikacji 2 etapowej. 

Ten sposób wykorzystują także w innych formach np. tylko do E-Maila czy hasła. Potem na stronie można zobaczyć np. napis "Przerwa techniczna, przepraszamy itp.) **w tym wszystkim chodzi o danie hakerowi jak najwięcej czasu na uzyskanie dostępu do konta lub do samego E-Maila.** Po takiej akcji dopiero po jakimś czasie zorientujemy się że zostaliśmy oszukani, ale zwykle już bywa za późno.

# Tokeny U2F

Ja osobiście bardzo polecam używać takiego klucza - daje on nam największe szanse że nasze konto nie zostanie przejęte przez inną osobę. **Fizyczne zabezpieczenie jest najlepsze - nawet najlepszy rosyjski haker nie jest w stanie wkraść się na konto z takim zabezpieczeniem** (musiał by ukraść Ci ten token z domu).

 **Taki token sprawdza poprawność adresu strony czy nie ma w niej literówek** (a wszyscy wiemy co oznacza literówka - fałszywą stronę), **potem wysyła poprawne dane logowania i jesteśmy bezpiecznie zalogowani**. Wiele firm na ten czas w swoich serwisach wprowadziła możliwość włączenia takiego zabezpieczenia - i to **IMO jest najlepszy sposób zabezpieczenia danych**.
 
**Ale pamiętajmy wszystko musimy zabezpieczać abyśmy byli bezpieczni!** Następny wpis pojawi się niebawem. Cześć!

**Koniecznie zobacz > [poprzednią cześć posta](https://igorkowalczyk.github.io/blog/internet/2019/12/28/Jasna-i-ciemna-strona-internetu)**