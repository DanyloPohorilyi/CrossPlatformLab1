import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyReactFormPageRoutingModule } from './my-react-form-routing.module';

import { MyReactFormPage } from './my-react-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyReactFormPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [MyReactFormPage]
})
export class MyReactFormPageModule { }
