import { SeriesService } from './../service/series/series.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TabService } from '../service/tab/tab.service';
import { RecursionService } from '../service/recursion/recursion.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {

  constructor(private tabService: TabService, private seriesService: SeriesService,
    private recursionService: RecursionService) { Chart.register(...registerables); }

  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();
  lineChart: any;
  xx: string[] = [];
  yy: number[] = [];
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  ngOnInit() {
  }

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: Array.from(this.xyTab.keys()), // Використовуємо ключі як мітки
        datasets: [
          {
            label: 'Графік функції (Tab)',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: Array.from(this.xyTab.values()), // Використовуємо значення як дані
            spanGaps: false,
          },
          {
            label: 'Графік функції (Series)',
            fill: false,
            borderColor: 'rgba(192,75,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: Array.from(this.xySeries.values()), // Використовуємо значення як дані
            spanGaps: false,
          },
          {
            label: 'Графік функції (Recursion)',
            fill: false,
            borderColor: 'rgba(192,192,75,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: Array.from(this.xyRecursion.values()), // Використовуємо значення як дані
            spanGaps: false,
          }
        ]
      }
    });
  }



  onClick(xn: any, xk: any, h: any) {
    let xn1 = parseFloat(xn), xk1 = parseFloat(xk), h1 = parseFloat(h);
    console.log("Табулювання");
    this.xyTab = this.tabService.getTab(xn1, xk1, h1);
    console.log("Ряд");
    this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
    console.log("Рекурсія");
    this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);
    this.input();
    this.lineChartMethod();
  }

  input() {
    this.xyTab.forEach((value, key, map) => {
      let s = '';
      let y: number = 0;
      y = value;
      s = y.toFixed(4) + " ";
      y = this.xySeries.get(key);
      s = s + y.toFixed(4);
      y = this.xyRecursion.get(key);
      s = s + " " + y.toFixed(4);
      let x = key;
      this.xyInput.set(x.toFixed(2), s);
    })
  }


}

