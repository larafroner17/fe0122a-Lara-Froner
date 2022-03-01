// Quando il documento è pronto...
$(document).ready(() => {
    //gestisco il click sul pulsante Iscriviti

    $('#iscr-news').click(function () {

        // inizializzo le variabili (locali)
        var controllo = $('#nome').val();
        var controllo2 = $('#email-1').val();
        var controllo3 = $('#email-2').val();

        // creo un if per il valore dell'input dell'id nome
        if (controllo == '' || controllo == undefined) {
            $('#nome').next().text('Richiesto');
        } else {
            $("#nome").next().text('');
        }

        // ---------------------------------------------------------------
        if (controllo2 == '' || controllo2 == undefined) {
            $('#email-1').next().text('Richiesto');
        } else {
            $("#email-1").next().text('');
        }

        // ----------------------------------------------------------------
        if (controllo3 == '' || controllo3 == undefined) {
            $('#email-2').next().text('Richiesto');
        } else {
            $("#email-2").next().text('');
        }

        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse
        if (controllo2 != controllo3) {
            alert('Le email non corrispondono');
        }
    })


    //invio del form se tutti i campi sono validi
    $('#iscr-news').submit(function () {
        alert('From inviato');
    })


    $('#puisci-form').click(function () {
        // prendi tutti gli input che hanno type=text
        // sostituisci il testo del value con una stringa vuota
        $('input:text').val('');
    })

})

$('#pulisci-form').click(function(){
    $('#form-email input[type="text"]').val('')
})
