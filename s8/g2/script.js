var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione) {
        this.balanceInit = 0; //saldo attuale 0 o saldo aggiornato
        this.balanceInit = balanceInit;
        this.primaOperazione = primaOperazione;
        this.secondaOperazione = secondaOperazione;
        this.terzaOperazione = terzaOperazione;
        this.quartaOperazione = terzaOperazione;
    }
    //versamento
    SonAccount.prototype.oneDeposit = function (sommaAggiunta) {
        this.primaOperazione = this.balanceInit + sommaAggiunta;
        return this.balanceInit += sommaAggiunta;
    };
    //prelievo
    SonAccount.prototype.oneWithDraw = function (sommaPrelevata) {
        this.secondaOperazione = this.balanceInit + sommaPrelevata;
        return this.balanceInit -= sommaPrelevata;
    };
    //versamento2
    SonAccount.prototype.twoDeposit = function (sommaAggiunta2) {
        this.terzaOperazione = this.balanceInit + sommaAggiunta2;
        return this.balanceInit += sommaAggiunta2;
    };
    //prelievo2
    SonAccount.prototype.twoWithDraw = function (sommaPrelevata2) {
        this.quartaOperazione = this.balanceInit + sommaPrelevata2;
        return this.balanceInit -= sommaPrelevata2;
    };
    return SonAccount;
}());
