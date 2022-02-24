
let bottone = document.getElementById("bottone");
bottone.addEventListener("click", function(){
    let aggiunta = document.getElementById("aggiunta").value;
    let lista = document.getElementById("lista");

    /*creazione elemento*/
    var li = document.createElement("li"); //<li></li> crea il tag li
    li.innerHTML = aggiunta; //scrivi aggiunta al suo interno

    

    /*aggiunta funzione all'elemento che ancora non esiste*/
    li.addEventListener("click", function () {
        li.remove()
    })
    
    lista.prepend(li)

    document.querySelector("aggiunta").value = ''

    salvaDatiNelDb(aggiunta)

})






function creaHTML() {

    var ls = localStorage.getItem('elementiSalvati')
    var db = ls ? JSON.parse(ls) : []

    db.forEach(function (elemento) {
        let li = document.createElement('li')
        li.innerHTML = elemento

        li.addEventListener('click', function () {
            li.remove()

        })
        lista.append(li)
    })
}
creaHTML()





//con questa funzione salvo e aggiorno i dati in localstorage
function salvaDatiNelDb(aggiunta) {

    /*salvataggio dati*/

    /* versione estesa
    if( localStorage.getItem('elementiSalvati') == null ){
        var db = [aggiunta]
    }else{
    var db = JSON.parse(localStorage.getItem('elementiSalvati'))
    db.push(aggiunta)
}
*/

    var ls = localStorage.getItem('elementiSalvati')

    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)

    localStorage.setItem('elementiSalvati', JSON.stringify(db))
}

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el) {

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento, 1)

    localStorage.setItem('elementiSalvati', JSON.stringify(db))
}