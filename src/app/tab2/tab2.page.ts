import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  a: number = 0;
  b: number = 0;
  cCount: number = 0;
  dCount: number = 0;
  eCount: number = 0;

  findNumb(a: any, b: any){
    try{
      this.a = parseInt(a);
      this.b = parseInt(b);
      this.calculateCounts();
    }
    catch(error){
      console.log(error);
    }
  }

  calculateCounts() {
    this.cCount = 0;
    this.dCount = 0;
    this.eCount = 0;

    for (let num = this.a; num <= this.b; num++) {
      if (num % 44 === 0) {
        this.cCount++;
      }
      if (num % 2 !== 0) {
        this.dCount++;
      }
      if (num % 5 === 3) {
        this.eCount++;
      }
    }
  }
}
