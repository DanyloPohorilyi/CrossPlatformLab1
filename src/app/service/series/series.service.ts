import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }
  getSeries(x: number) {
    let sum: number = 0, min = 1E-12, mem = 1, n = 1, mul = 1;
    do {
      mem = mem * Math.sin(n * x) / n;
      sum = sum + mul * mem;
      mul = -mul;
      n++;
    } while (mem > min || mem < -min);
    return sum * 2;
  }
  getTab(xn: number = -3.14, xk: number = 3.14, h: number = 0.1) {
    let x = xn, y = 0.0;
    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService)
        this.logService.write("x = " + x.toFixed(2) + ", y = " + y.toFixed(4));
      x = x + h;
    }
    return this.xy;
  }

}
