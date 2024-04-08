export abstract class Clothes {
  name!: string;
  constructor(name: string) {
    this.name = name;
  }
  show() {
    return this.name;
  }
  abstract display(): any;
  abstract FabricCosts(): any;
}
