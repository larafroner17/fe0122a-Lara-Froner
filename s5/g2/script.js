let budget = 900;

document.querySelector('input').value = budget;

let res = '';

/*if (budget == 500) {

    document.querySelector('#avviso').innerHTML = 'Budget a metà' + budget;

} else if (budget == 100) {

    document.querySelector('#avviso').innerHTML = 'Budget a metà' + budget;

}*/

let budget = document.querySelector('input')


//switch per messagi
switch (budget) {
    case 500:
        document.querySelector('#avviso').innerHTML = 'ATTENZIONE: budget a metà!!!' + budget;
        break;

    case 100:
        document.querySelector('#avviso').innerHTML = 'ATTENZIONE: budget quasi esaurito!!!' + budget;
        break;

    default:
        document.querySelector('#avviso').innerHTML = 'ATTENZIONE: budget pari a: !!!' + budget;
        break;

}