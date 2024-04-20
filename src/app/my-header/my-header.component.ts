import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent implements OnInit {
  @Input() name: string = 'Лабораторні роботи'

  constructor() { }

  ngOnInit() { }

}
