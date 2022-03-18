abstract class Tasse {
  abstract getUtileTasse(): number;
  abstract getTasseInps(): number;
  abstract getTasseIrpef(): number;
  abstract getRedditoAnnuoNetto(): number;
}

class Lavoratore extends Tasse {
  redditoannuolordo: number;
  tasseInps: number;
  tasseIrpef: number;

constructor(redditoannuolordo: number, tasseInps: number, tasseIrpef: number){
    super();
    this.redditoannuolordo = redditoannuolordo;
    this.tasseInps = tasseInps;
    this.tasseIrpef = tasseIrpef;
}

getTasseInps() {
    return (this.redditoannuolordo/100) * this.tasseInps;
}

getTasseIrpef() {
    return (this.redditoannuolordo/100) * this.tasseIrpef; 
}

getUtileTasse() {
    return this.getTasseInps() + this.getTasseIrpef();
}

getRedditoAnnuoNetto() {
    return this.redditoannuolordo - this.getUtileTasse();

}
}