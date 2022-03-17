fetch('Abbigliamento.json')
.then(res => res.json())
.then(data => {
    data.forEach((item:Vestito) => {
        let capo = new Vestito (item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)     
       
    })
})


class Vestito {
        id:number
        codprod:number
        collezione:string
        capo:string
        modello:number
        quantita:number
        colore:string
        prezzoivaesclusa:number
        prezzoivainclusa:number
        disponibile:string
        saldo:number

    constructor (id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,
    disponibile:string,saldo:number) {

        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivainclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo
    }

    getsaldocapo():number{
        return (this.prezzoivainclusa/100) * this.saldo;
    }

    getacquistacapo():string{
        return `il prezzo del capo ${this.capo} scontato è ${this.prezzoivainclusa - this.getsaldocapo()} Euro`;
    }
}

let shorts = new Vestito (6, 1717, "estate", "short", 1890, 10, "giallo", 16.50, 20.13, "negozio", 33)
console.log(shorts);

let canotta = new Vestito (7, 1725, "primavera", "canotta", 1750, 7, "bianco", 9.50, 11.59, "negozio", 46)
console.log(canotta);

let giacca = new Vestito (8, 1740, "estateinverno", "giacca", 1643, 19, "blu", 112.50, 137.25, "magazzino", 50)
console.log(giacca);