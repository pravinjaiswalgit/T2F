import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyChild1Component } from './lazy-child1/lazy-child1.component';
import { LazyChild2Component } from './lazy-child2/lazy-child2.component';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';

const routes: Routes = [
  { path:'',redirectTo:'lazy-loading',pathMatch:'full'},

  {path:'lazy-loading',component:LazyHomeComponent,
    children:[
      {path:'',redirectTo:'child1',pathMatch:'full'},
      {path:'child1',component:LazyChild1Component},
      {path:'child2',component:LazyChild2Component},
      {path:'**',redirectTo:'child1'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingModuleRoutingModule { }
