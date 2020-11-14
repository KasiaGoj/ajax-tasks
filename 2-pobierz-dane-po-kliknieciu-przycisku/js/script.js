/* Po załadowaniu się strony ustaw nasłuch zdarzenia click na tym przycisku.
Funkcją obsługującą to zdarzenie będzie funkcja anonimowa (oczywiście musisz ją stworzyć).
Funkcja anonimowa obsługująca zdarzenie click pobiera z serwera objekt JSON.

Adres URL do API na serwerze: https://akademia108.pl/api/ajax/get-post.php

Po pobraniu danych w formacie JSON wyciągnij z nich:
userId
id
title
body
a następnie dodaj te dane do strony (w dowolnym miejscu i w dowolny sposób).

Dodatkowe uwagi:
Napisz kod za pomocą biblioteki jquery, a do pobierania danych użyj:
w pierwszej wersji funkcji $.get(),
a w drugiej wersji funkcji $.getJSON(). */

$(document).ready(function() {

    $('#get-data').click(function() {

        /* pierwsza wersja funkcji $.get(), */

        // $.get('https://akademia108.pl/api/ajax/get-post.php').done(function(data) {
        //     let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
        //     let pId = $('<p></p>').text(`Post ID: ${data.id}`);
        //     let pTitle = $('<p></p>').text(`Title: ${data.title}`);
        //     let pBody = $('<p></p>').text(`Body: ${data.body}`);
        //     let hr = $('<hr />');

        //     // $('body').append(pUserId);
        //     // $('body').append(pId);
        //     // $('body').append(pTitle);
        //     // $('body').append(pBody);
        //     // $('body').append(hr);

        //     let jqBody = $('body');

        //     jqBody.append(pUserId);
        //     jqBody.append(pId);
        //     jqBody.append(pTitle);
        //     jqBody.append(pBody);
        //     jqBody.append(hr);

        
        //     // console.log(data);
        // })
        // .fail(function(error) {
        //     console.error(error);
        // });

        /* druga wersja funkcji $.getJSON() - pobierać monzna tylko dane w formacie json */

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php').done(function(data) {
            let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let pBody = $('<p></p>').text(`Body: ${data.body}`);
            let hr = $('<hr />');

            // $('body').append(pUserId);
            // $('body').append(pId);
            // $('body').append(pTitle);
            // $('body').append(pBody);
            // $('body').append(hr);

            let jqBody = $('body');

            jqBody.append(pUserId);
            jqBody.append(pId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);

        
            // console.log(data);
        })
        .fail(function(error) {
            console.error(error);
        });
    });
});
