/* Adres URL do API na serwerze: https://akademia108.pl/api/ajax/get-post.php

Po pobraniu danych w formacie JSON wyciąg z nich:

userId
id
title
body */

let btnGetData = document.getElementById('get-data');

console.log(btnGetData);

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')

    .then(response => response.json())
    .then((data) => {

        let pUserId = document.createElement('p');
        let pId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');

        pUserId.innerText = `User ID: ${data.userId}`
        pId.innerText = `User ID: ${data.id}`
        pTitle.innerText = `User ID: ${data.title}`
        pBody.innerText = `User ID: ${data.body}`

        $('#dane-programisty').append(pUserId);
        $('#dane-programisty').append(pId);
        $('#dane-programisty').append(pTitle);
        $('#dane-programisty').append(pBody);

        // document.body.appendChild(pUserId);
        // document.body.appendChild(pId);
        // document.body.appendChild(pTitle);
        // document.body.appendChild(pBody);

        // console.log(data);
        console.log(data.userId);
        console.log(data.id);
        console.log(data.title);
        console.log(data.body);
    })
    .catch(error => {
        console.error(error);
    })
}
 
btnGetData.addEventListener('click', getData);