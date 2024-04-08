import { Clothes } from "./clothes";

export class Suit extends Clothes {

  H: any;

  constructor(name: string, H: any) {
    super(name);
    if (this.H < 80) throw new Error('Short stature');
    this.H = H;
  }

  override FabricCosts() {
    return 2 * this.H + 0.3;
  }
  override display() {
    return this.name + " H:" + this.H;
  }
}
