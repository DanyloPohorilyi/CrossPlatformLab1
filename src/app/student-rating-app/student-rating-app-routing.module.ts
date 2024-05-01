import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentRatingAppPage } from './student-rating-app.page';

const routes: Routes = [
  {
    path: '',
    component: StudentRatingAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRatingAppPageRoutingModule {}
