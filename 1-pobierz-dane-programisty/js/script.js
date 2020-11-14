/* Stwórz stronę zawierającą przycisk pt. "Pobierz dane"

Po kliknięciu przycisku pobierz dane o programiście w formacie JSON z internetu za pomocą Javascript lub jQuery:

https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php
imię, nazwisko, zawód firma
Pobrane dane wyświetl poniżej przycisku w nowym, stworzonym DIVie o id="dane-programisty".

Zadanie domowe zrób za pomocą GitHub Pages. */

let btnGetData = document.getElementById('get-data');

// console.log(btnGetData);

const getData = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')

    .then(response => response.json())
    .then((data) => {

        let pName = document.createElement('p');
        let pLastName = document.createElement('p');
        let pJob = document.createElement('p');
        let pCompany = document.createElement('p');

        pName.innerText = `Imię: ${data.imie}`
        pLastName.innerText = `Nazwisko: ${data.nazwisko}`
        pJob.innerText = `Zawód: ${data.zawod}`
        pCompany.innerText = `Firma: ${data.firma}`

        $('#dane-programisty').append(pName);
        $('#dane-programisty').append(pLastName);
        $('#dane-programisty').append(pJob);
        $('#dane-programisty').append(pCompany);

        // console.log(data);
        // console.log(data.imie);
        // console.log(data.nazwisko);
        // console.log(data.zawod);
        // console.log(data.firma);
    })
    .catch(error => {
        console.error(error);
    })
}
 
btnGetData.addEventListener('click', getData);