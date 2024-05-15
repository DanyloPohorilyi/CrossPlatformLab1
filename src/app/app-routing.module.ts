import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then(m => m.GraphPageModule)
  },
  {
    path: 'file',
    loadChildren: () => import('./file/file.module').then(m => m.FilePageModule)
  },
  {
    path: 'abstract',
    loadChildren: () => import('./abstract/abstract.module').then(m => m.AbstractPageModule)
  },
  {
    path: 'interfacepage',
    loadChildren: () => import('./interfacepage/interfacepage.module').then(m => m.InterfacepagePageModule)
  },
  {
    path: 'servicepage',
    loadChildren: () => import('./servicepage/servicepage.module').then(m => m.ServicepagePageModule)
  },
  {
    path: 'my-react-form',
    loadChildren: () => import('./my-react-form/my-react-form.module').then(m => m.MyReactFormPageModule)
  },
  {
    path: 'student-rating-app',
    loadChildren: () => import('./student-rating-app/student-rating-app.module').then(m => m.StudentRatingAppPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
