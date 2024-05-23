import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservablepagePageRoutingModule } from './observablepage-routing.module';

import { ObservablepagePage } from './observablepage.page';
import { ComponentModule } from '../component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservablepagePageRoutingModule,
    ComponentModule
  ],
  declarations: [ObservablepagePage]
})
export class ObservablepagePageModule { }
