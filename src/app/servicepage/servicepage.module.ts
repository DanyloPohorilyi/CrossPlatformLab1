import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicepagePageRoutingModule } from './servicepage-routing.module';

import { ServicepagePage } from './servicepage.page';
import { InterfacepagePageModule } from '../interfacepage/interfacepage.module';
import { ComponentModule } from '../component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicepagePageRoutingModule,
    ComponentModule,
  ],
  declarations: [ServicepagePage]
})
export class ServicepagePageModule { }
