import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyReactFormPage } from './my-react-form.page';

const routes: Routes = [
  {
    path: '',
    component: MyReactFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyReactFormPageRoutingModule {}
