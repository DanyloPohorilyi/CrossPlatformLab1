import { Clothes } from "./clothes";

export class Jeans extends Clothes {

  Waist: any;
  constructor(name: string, Waist: any) {
    super(name);
    if (Waist < 0) throw new Error('Waist < 0');
    this.Waist = Waist;
  }
  override FabricCosts() {
    return this.Waist / 6 + 0.5;
  }
  override display() {
    return this.name + " Waist:" + this.Waist;
  }
}
