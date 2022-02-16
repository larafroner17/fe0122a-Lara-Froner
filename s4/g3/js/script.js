function eta(anno_corrente, anno_nascita){
    return anno_corrente - anno_nascita;
}

var anno_corrente = 2022;

var anno_nascita = 1953;

console.log(eta(anno_corrente, anno_nascita));

console.log(eta);


var differenza = function eta(anno_corrente, anno_nascita){
    return anno_corrente - anno_nascita;
}

console.log(differenza(2022, 1953));


//sottrazione
var differenza = function eta(anno_corrente, anno_nascita){
    console.log(anno_corrente - anno_nascita);
}

differenza (2022, 1953);

//funzione freccia - invocala - mostra output
eta = (anno_corrente, anno_nascita) => {console.log(anno_corrente - anno_nascita)}
eta (2022, 1952);

//funzione freccia senza graffe 
eta = (anno_corrente, anno_nascita) => console.log(anno_corrente - anno_nascita)
eta (2022, 1952);

var calcolo = eta1 = (anno_corrente, anno_nascita) => console.log(anno_corrente - anno_nascita)

calcolo (2022, 1985);

//funzione all'interno di un'altra funzione

function operazioni (){
    var num = 10;

    function somma () {
        console.log(num + num);
    }
    return somma ();
}

operazioni ();

//operatori di comparazione

var x1 = 10;
var x2 = "10";
var x3 = "Iacopo";
var x4 = "Iacopo";

document.write ((x1 == x2) + "<br>"); //true

document.write ((x1 === x2) + "<br>"); //false

document.write ((x3 === x4) + "<br>"); //true

document.write ((x1 !== x2) + "<br>"); //true

//----------------------------------------------------------------


//OPERATORE TERNARIO........
var anni = 20;

var ingresso = (anni < 18) ? "non puoi entrare" : "puoi entrare";

console.log(ingresso);






