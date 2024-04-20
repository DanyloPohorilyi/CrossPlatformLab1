import { ComponentModule } from './../component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InterfacepagePageRoutingModule } from './interfacepage-routing.module';

import { InterfacepagePage } from './interfacepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfacepagePageRoutingModule,
    ComponentModule,
  ],
  declarations: [InterfacepagePage]
})
export class InterfacepagePageModule { }
