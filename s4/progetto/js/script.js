function n(dato){ 
   document.getElementById("operazioni").value+=dato;
}

function operazione() { 
document.getElementById("operazioni").value=eval(document.getElementById("operazioni").value); 
}

function cancella() { 
 document.getElementById("operazioni").value=""; 
}

function isSymbol(s) {
   if(s == '+' || s == '-' || s == '/' || s == '*' || '.'){
      return true;  
   }else{
      return false;
   }
}

function resetCalcolatrice() {
   let operazione = document.getElementById("operazioni")
   risultato.value = ''
}

function totale() {
   let result = document.getElementById("operazioni")
   let totale = eval(res.value)
   res.value = totale
}

function prendiN(n) {
   let risultato = document.getElementById("operazioni")
   let num = tasto.id
   risultato.value += num
}

function RQ(valore) {
   valore = document.getElementById("operazioni").value;
   document.getElementById("operazioni").value=Math.sqrt(valore);
}

