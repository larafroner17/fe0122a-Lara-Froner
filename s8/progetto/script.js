fetch('Abbigliamento.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var capo = new Vestito(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
    });
});
var Vestito = /** @class */ (function () {
    function Vestito(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
        this.saldo = saldo;
    }
    Vestito.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa / 100) * this.saldo;
    };
    Vestito.prototype.getacquistacapo = function () {
        return "il prezzo del capo ".concat(this.capo, " scontato \u00E8 ").concat(this.prezzoivainclusa - this.getsaldocapo(), " Euro");
    };
    return Vestito;
}());
var shorts = new Vestito(6, 1717, "estate", "short", 1890, 10, "giallo", 16.50, 20.13, "negozio", 33);
console.log(shorts);
var canotta = new Vestito(7, 1725, "primavera", "canotta", 1750, 7, "bianco", 9.50, 11.59, "negozio", 46);
console.log(canotta);
var giacca = new Vestito(8, 1740, "estateinverno", "giacca", 1643, 19, "blu", 112.50, 137.25, "magazzino", 50);
console.log(giacca);
