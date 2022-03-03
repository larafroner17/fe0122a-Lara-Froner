// quando il documento è pronto...(forma breve)...
$(document).ready(() => {

    var bottoneSx = $('#l-btn');
    var bottoneDx = $('#r-btn')

    bottoneSx.click(function() {
        let carosello = $('#img-l');
        carosello.animate({
            left: '-=300px',
        }, 1000);
    })


bottoneDx.click(function() {
    let carosello = $('#img-l');
    carosello.animate({
        left: '-=300px',
    }, 1000);
})
})