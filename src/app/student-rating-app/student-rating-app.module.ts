import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentRatingAppPageRoutingModule } from './student-rating-app-routing.module';

import { StudentRatingAppPage } from './student-rating-app.page';
import { ComponentModule } from '../component.module';
import { StudentRatingFormComponent } from './student-rating-form/student-rating-form.component';
import { ViewformComponent } from '../viewform/viewform.component';
import { UpdateformComponent } from '../updateform/updateform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentRatingAppPageRoutingModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  declarations: [StudentRatingAppPage, StudentRatingFormComponent, ViewformComponent, UpdateformComponent]
})
export class StudentRatingAppPageModule { }
