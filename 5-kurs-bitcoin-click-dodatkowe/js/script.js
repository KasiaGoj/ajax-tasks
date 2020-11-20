$(document).ready(function () {
    let btnGetData = $('#get-data');

    console.log(btnGetData);

    function getData() {
        $.getJSON('https://blockchain.info/pl/ticker')
            .then((data) => {
                console.log(data.PLN.buy);
                console.log(data.PLN.sell);

                let pBuy = $('#kurs-kupno');
                let pSell = $('#kurs-sprzedaz');

                let arrows = $('.fas');

                pBuy.html(`${data.PLN.buy} ${data.PLN.symbol}`);
                pSell.text(`${data.PLN.sell} ${data.PLN.symbol}`);

                if (data.PLN.buy > parseFloat(pBuy.attr('btc'))) {
                    arrows.eq(0).removeClass().addClass('fas fa-angle-up green');
                    console.log('większy');
                } else if (data.PLN.buy < parseFloat(pBuy.attr('btc'))) {
                    console.log('mniejszy');
                    arrows.eq(0).removeClass().addClass('fas fa-angle-down red');
                } else {
                    console.log('równy');
                    arrows.eq(0).removeClass().addClass('fas fa-angle-right blue');
                }
                pBuy.attr('btc', data.PLN.buy);

                if (data.PLN.sell > parseFloat(pSell.attr('btc'))) {
                    console.log("większe");
                    arrows.eq(1).removeClass().addClass('fas fa-angle-up green');
                } else if (data.PLN.sell < parseFloat(pSell.attr('btc'))) {
                    console.log('mniejsze');
                    arrows.eq(1).removeClass().addClass('fas fa-angle-down red');
                } else {
                    arrows.eq(1).removeClass().addClass('fas fa-angle-right blue');
                    console.log('równe');
                }
                pSell.attr('btc', data.PLN.sell);

            })
    };
    btnGetData.click(getData);
});