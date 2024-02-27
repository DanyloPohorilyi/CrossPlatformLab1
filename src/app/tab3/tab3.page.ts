import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number[][] = [];
  n: number = 0;
  constructor() { }
  generateMatrix() {
    this.a = [];
    try {
      if (isNaN(this.n)) {
        throw new Error('Параметр не є числом');
      }
      for (let i = 0; i < this.n; i++) {
        let row: number[] = [];
        for (let j = 0; j < this.n; j++) {
          row.push(Math.floor(Math.random() * 100)); // Генеруємо випадкові числа в діапазоні [0, 100)
        }
        this.a.push(row);
      }
    } catch (error) {
      console.log(error);
    }
  }
  getColor(num: number): string {
    const modValue = Math.abs(num) % 5; // Визначаємо модуль числа і використовуємо залишок від ділення на 5
    switch (modValue) {
      case 0:
        return '#f0b884';
      case 1:
        return '#e8e6a5';
      case 2:
        return '#bbe8b5';
      case 3:
        return '#acbbe8';
      case 4:
        return '#c5ace8';
      default:
        return '#eb9da2'; // Якщо залишок більше 4, повертаємо чорний колір або можна вибрати інший колір
    }
  }

}
