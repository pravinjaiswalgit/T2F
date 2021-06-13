import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingModuleRoutingModule } from './lazy-loading-module-routing.module';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyChild1Component } from './lazy-child1/lazy-child1.component';
import { LazyChild2Component } from './lazy-child2/lazy-child2.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LazyHomeComponent,
    LazyChild1Component,
    LazyChild2Component
  ],
  imports: [
    CommonModule,
    LazyLoadingModuleRoutingModule,
    RouterModule
  ]
})
export class LazyLoadingModuleModule {

  constructor(){
    console.log("Lazy Module !!!")
  }
 }
