class SonAccount{
    public balanceInit:number = 0 //saldo attuale 0 o saldo aggiornato
    public primaOperazione:number; //saldo dopo la prima operazione
    public secondaOperazione:number; //saldo dopo p operazioni
    public terzaOperazione:number; //saldo dopo p operazioni
    public quartaOperazione:number //saldo dopo p operazioni

    constructor(balanceInit:number, primaOperazione:number, secondaOperazione:number, terzaOperazione:number, quartaOperazione:number){
        this.balanceInit = balanceInit;
        this.primaOperazione = primaOperazione;
        this.secondaOperazione = secondaOperazione;
        this.terzaOperazione = terzaOperazione;
        this.quartaOperazione = terzaOperazione;
    }

    //versamento
    oneDeposit(sommaAggiunta:number):number{
        this.primaOperazione = this.balanceInit + sommaAggiunta;
        return this.balanceInit += sommaAggiunta;


    }

    //prelievo
    oneWithDraw(sommaPrelevata:number):number{
        this.secondaOperazione = this.balanceInit + sommaPrelevata;
        return this.balanceInit -= sommaPrelevata;

    }

    //versamento2
    twoDeposit(sommaAggiunta2:number):number{
        this.terzaOperazione = this.balanceInit + sommaAggiunta2;
        return this.balanceInit += sommaAggiunta2;
    }

    //prelievo2
    twoWithDraw(sommaPrelevata2:number):number{
        this.quartaOperazione = this.balanceInit + sommaPrelevata2;
        return this.balanceInit -= sommaPrelevata2

    }


}

