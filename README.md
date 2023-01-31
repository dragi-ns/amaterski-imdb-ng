# Amaterski IMDB NG 😉

Ovo je Angular verzija. Vanilla JS verzija: https://github.com/dragi-ns/amaterski-imdb

## Pokretanje

```bash
# Kloniranje
$ git clone https://github.com/dragi-ns/amaterski-imdb-ng.git
# Ulazak u folder
$ cd amaterski-imdb-ng/
# Instaliranje neophodnih biblioteka (sačekati da završi)
$ npm install
# Pokretanje json-server-a (u jednom terminalu)
$ npm run db
# Pokretanje Angular dev servera (u drugom terminalu)
$ ng serve
```

## Zadatak

Kreirati json fajl koji će imati spisak filmova (movies) sa poljima: title: string, year: string, duration: number (u minutima), rating: number, description: string, director: string, logo: string (URL slike od filma). Popuniti JSON podacima po želji (nekoliko filmova). JSON fajl se “pokreće” pomoću json-server biblioteke. Napraviti web aplikaciju koja će predstavljati portal za ocenjivanje filmova i sadrži:

- Početnu stranicu (indeks.html) koja prikazuje sve filmove (title, year i rating)
- Na početnoj stranici se nalazi i dugme Dodati film koje otvara novu stranicu (movie_add.html) u okviru koje se nalazi forma za dodavanje novog filma i gde je moguće kreirati film
- Na početnoj stranici je takođe moguće kliknuti na film što zatim otvara novu stranicu (movie_view.html) koja prikazuje više informacija o filmu (prikazati sva polja filma)
- U okviru stranice koja prikazuje detaljne informacije o filmu (movie_view.html) moguće je kliknuti na dugme Izmena koje otvara novu stranicu (movie_edit.html) za
  menjanje informacija o filmu. Nova stranica sadrži formu koja omogućava izmene
- U okviru stranice koja prikazuje detaljne informacije o filmu (movie_view.html) moguće je kliknuti na dugme Brisanje koje otvara novu stranicu (movie_delete.html) za brisanje izabranog filma. Na novoj stranici je potrebno pitati korisnika da li je siguran da želi da obriše film i omogućiti mu da unese razlog brisanja

Dizajn po želji. Kreirati projekat na Git-u. Saveti:

- možete svi raditi na jednoj grani (npr. main)
- svaki član tima neka preuzme jednu stranicu (potpuno su nezavisne)
- dogovorite se unapred ko će šta da radi i kako će da izgleda struktura projekta (gde će da
  se nalaze JS i CSS fajlovi i slično)
- Koristite neki alat za vođenje projekta (planer ili npr. Trello: https://trello.com/ )
