/* Na obiekcie window ustaw nasłuch zdarzenia scroll.

Funkcją obsługującą to zdarzenie będzie funkcja scrollToEndOfPage() (oczywiście musisz ją stworzyć).

Funkcja scrollToEndOfPage() sprawdza, czy nie zostało przeskrolowane na dół do końca strony.

Jeśli się to wydarzy to ma zostać uruchomiona funkcja getData() (musisz ją stworzyć), która rozpocznie pobieranie danych (link do API poniżej), a następnie po otrzymaniu danych na dole strony ma zostać doklejona kolejna lista z użytkownikami (wtedy stronę będzie można skrolować ponownie na dół).

Gdy strona znowu zostanie przeskrolowana na dół do końca ponownie zostanie uruchomiony cały proces pobierania danych i doklejania ich na dole strony.

Adres URL do API na serwerze: https://akademia108.pl/api/ajax/get-users.php

Dodatkowe uwagi:
Napisz kod za pomocą czystego JavaScript, a do pobierania danych użyj Fetch API – czyli użyj funkcji fetch().
Dane pobieraj za pomocą metody GET protokołu HTTP.
Aby sprawdzić, czy zostało przeskrolowane na dół do końca strony użyj właściwości obiektu ‚document.documentElement’:
document.documentElement.scrollHeight – długość całej strony od góry do dołu
document.documentElement.scrollTop – wysokość na jaką przeskrolowaliśmy
document.documentElement.clientHeight – wysokość wewnętrzna okna przeglądarki */

/* zabezpieczenie, zeby nie pobierały się 2 zestawy danych na raz:*/
let preLoading = false;

/* funkcje do pokazywania i ukrywania preloadera */
const showPreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log('showPreloader()')
    preloader.style.display = "block";
    preLoading = true;
}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log('hidePreloader()')
    preloader.style.display = "none";
    preLoading = false;
}

/* funkcja getData pobiera 10 losowo wybranych obiektów danych */
const getData = () => {
    if (!preLoading) {
        
        showPreloader();

        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(res => res.json())
            .then(data => {

                let body = document.body;
                /* horyzontalna linia przed wklejaniem danych kolejnych uzytkowników */
                let hr = document.createElement('hr')
                body.appendChild(hr);

                /* pętla, poniewaz pobrane dane są w tablicy*/
                for (let user of data) {
                    /* dla kazdego uzytkownika tworzone będą paragrafy */
                    let pUserId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');

                    pUserId.innerText = `User Id: ${user.id}`;
                    pName.innerText = `User Name: ${user.name}`;
                    pWebsite.innerHTML = `User URL: ${user.website}<br /> . . . . . . .`;

                    let body = document.body;
                    body.appendChild(pUserId);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);
                }

                hidePreloader();
                console.log(data);
            })
            .catch(error => {
                console.log(error);
        })
    }
    
} 
/* Funkcja obsługująca zdarzenie scroll: scrollToEndOfPage() */
const scrollToEndOfPage = () => {
/* sprawdzenie, czy jesteśmy już na końcu strony */    
    let doc = document.documentElement;

/* cała długosc strony do przeskrolowania, takze ta niewidoczna część: */
    let scrollHeight = doc.scrollHeight;

/* przeskrolowany juz elemnt czyli scrollTop, wysokość w pikselach */
    let scrollTop = doc.scrollTop;    

/* wewn wysokość przeglądarki (w pikselach)*/
    let clientHeight = doc.clientHeight;

/* metoda ceil - zaokrągla ułamki w górę, zabezpiecza to w sytuacjach, gdzie np. scroll height wyniesie dokładnie 1040, a suma np 1039,99 */
    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    console.log(scrollTop);
    console.log(sumScrollTopClientHeight);

    if (sumScrollTopClientHeight >= scrollHeight) {
        console.log('koniec strony');

        getData();
    }
    
}
/* Na obiekcie window ustaw nasłuch zdarzenia scroll. */
window.addEventListener('scroll', scrollToEndOfPage);