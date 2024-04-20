import { NgModule } from "@angular/core";
import { MyHeaderComponent } from "./my-header/my-header.component";
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    MyHeaderComponent,
  ],
  exports: [
    MyHeaderComponent,
  ],
  imports: [
    IonicModule
  ]
})
export class ComponentModule { }
