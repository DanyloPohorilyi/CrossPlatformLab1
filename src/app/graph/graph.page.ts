import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  xn: number = 0;
  xk: number = 0;
  a: number = 0;
  h: number = 0;
  xx: string[] = [];
  yy: number[] = [];
  data1: string[] = [];
  constructor() { Chart.register(...registerables); }
  ngOnInit() {
    this.xn = 1;
    this.xk = 10;
    this.h = 0.1;
    this.a = 5;
    this.graphras(this.xn, this.xk, this.a, this.h);
  }
  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          }
        ]
      }
    });
  }

  graphras(xn: any, xk: any, a: any, h: any) {
    this.data1 = [];

    this.xn = parseFloat(xn.replace(',', '.'));
    this.xk = parseFloat(xk.replace(',', '.'));
    this.a = parseFloat(a.replace(',', '.'));
    this.h = parseFloat(h.replace(',', '.'));
    let x: number, y: number, i: number = 0.0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();
    while (x < this.xk) {
      if (x <= 0) {
        y = Math.pow(Math.abs(x), 5) * (1 / Math.tan(x + 2));
      }
      else {
        if (x <= this.a) {
          y = (5.0 * x + x * x) / Math.pow((x * x + 3), 1);
        }
        else {
          y = (Math.pow(Math.sin(x + 2.0), 2)) / ((1 / Math.tan(Math.PI * Math.pow(x, 3))));
        }
      }
      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));
      let s = "x= " + x.toFixed(1) + ", y=" + y.toFixed(1);
      x += this.h;
      this.data1.push(s);
    }
    this.lineChartMethod();
  }

}
