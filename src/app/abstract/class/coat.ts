import { Clothes } from "./clothes";

export class Coat extends Clothes {

  V: any;
  constructor(name: string, V: any) {
    super(name);
    if (this.V < 5) throw new Error('V < 5');
    this.V = V;
  }
  override FabricCosts() {
    return this.V / 6.5 + 0.5;
  }
  override display() {
    return this.name + " V:" + this.V;
  }
}
