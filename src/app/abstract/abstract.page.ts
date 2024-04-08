import { Component, OnInit } from '@angular/core';
import { Suit } from './class/suit';
import { Coat } from './class/coat';
import { Clothes } from './class/clothes';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.page.html',
  styleUrls: ['./abstract.page.scss'],
})
export class AbstractPage implements OnInit {
  clothes: Clothes[] = [];

  totalCost: number = 0;
  constructor() {
  }
  getRandomInt(max: number, min: number) {
    return Math.floor(Math.random() * Math.floor(max) + min + 1);
  }

  ras(nn: any) {
    this.clothes = new Array();
    let n = parseInt(nn);
    for (let i = 0; i < n; i++) {
      this.clothes.push(new Coat("Пальто", this.getRandomInt(100, 20)));
      this.clothes.push(new Suit("Костюм", this.getRandomInt(200, 80)));
    }
    this.totalCost = 0;
    this.clothes.forEach((e) => {
      this.totalCost += e.FabricCosts();
      console.log(e.display());
    })
  }

  ngOnInit(): void {
  }

}
