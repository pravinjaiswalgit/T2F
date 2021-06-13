import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerChild1Component } from './eager-loading-module/eager-child1/eager-child1.component';
import { EagerChild2Component } from './eager-loading-module/eager-child2/eager-child2.component';
import { EagerHomeComponent } from './eager-loading-module/eager-home/eager-home.component';

const routes: Routes = [
  { path:'',redirectTo:'eager-loading',pathMatch:'full'},

  {path:'eager-loading',component:EagerHomeComponent,children:[
    
    {path:'',redirectTo:'child1',pathMatch:'full'},
    {path:'child1',component:EagerChild1Component},
    {path:'child2',component:EagerChild2Component},
    {path:'**',redirectTo:'child1'}

  ]},

  {
    path:'lazy-loading',
    loadChildren:'./lazy-loading-module/lazy-loading-module.module#LazyLoadingModuleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
