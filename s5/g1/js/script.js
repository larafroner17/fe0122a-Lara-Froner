var dataAttuale = new Date;

document.querySelector('h1').innerHTML = dataAttuale;

document.getElementById('anno').innerText = dataAttuale.getFullYear();
anno.style.color = 'red';
anno.style.fontSize = '40px';
anno.style.fontWeight = 'bold';
    let lAnno = dataAttuale.getFullYear();

document.getElementById('mese').innerText = dataAttuale.getMonth();
        let ilMese = dataAttuale.getMonth();

document.querySelector('p.giorno').innerText = dataAttuale.getDate();
    let ilGiorno = dataAttuale.getDate();

document.querySelector('h3 > input').value =
    (ilGiorno + '/' + ilMese + '/' + lAnno);

document.querySelector("h3 > input").style.color = 'blue';
document.querySelector("h3 > input").style.fontWeight = 'bolder';  



