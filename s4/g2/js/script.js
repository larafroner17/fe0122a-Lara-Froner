//let, var, const
var nome = "Filippo";
console.log(nome);

{
    let nome = "Angelo";
    console.log(nome);
}

{
    let nome = "Laura";
    console.log(nome);
}
////////////////////////////////

var frutta = "fragola";
console.log(frutta);

console.log(nome);

var cognome = "Tancredi";
console.log(cognome);

{
    const cognome = "Balocco";
    console.log(cognome);
}

console.log(cognome);
//let aggiunge
var utente = "Ciro";
console.log(utente);

//boleani
var oggetto1 = "paletta";
var oggetto2 = "scopa";

var prima_comp = oggetto1 == oggetto2;

console.log(prima_comp); //true

console.log(!prima_comp); //false

console.log(oggetto1 == oggetto2 || oggetto1 == "paletta"); //or

console.log(oggetto1 == oggetto2 && oggetto1 == "paletta"); //and

console.log(oggetto2 == "scopa" && oggetto1 == "paletta"); //and

//confronto
var numb1 = 76;
var numb2 = 54.3;
console.log(numb1 > numb2);
console.log(numb1 < numb2);
console.log(numb1 == numb2);

// matematici
var numb3 = 100;
var numb4 = 60;

var differenza = (numb3 -= numb4);
console.log(differenza);

var numb5 = 45.85;
var numb6 = 51;
var somma = (numb5 += numb6);
console.log(somma);























