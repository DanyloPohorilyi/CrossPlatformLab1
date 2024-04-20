import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {

  yy: number = 0;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }
  getRecursion(x: number, mem: number, mul: number, n: number, sum: number) {
    let min = 1E-12;
    mem = mem * Math.sin(n * x) / n;
    sum = sum + mul * mem;
    n++;
    mul = -mul;
    if (mem > min || mem < -min)
      this.getRecursion(x, mem, mul, n, sum);
    else this.yy = sum * 2;
  }
  getTab(xn: number = -3.14, xk: number = 3.14, h: number = 0.1) {
    console.log("hi");
    let x = xn, y = 1.0;
    while (x <= xk) {
      this.getRecursion(x, 1, 1, 1, 0);
      this.xy.set(x, this.yy)
      if (this.logService)
        this.logService.write("x = " + x.toFixed(2) + ", y = " + this.yy.toFixed(4));
      x = x + h;

    }
    return this.xy;
  }
}
