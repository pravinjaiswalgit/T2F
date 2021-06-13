import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from '../hello/hello.component';
import { HiComponent } from '../hi/hi.component';
import { MyPipe } from '../my.pipe';



@NgModule({
  declarations: [
    HelloComponent,
    HiComponent,
    MyPipe
  ],
  imports: [
    CommonModule
  ],

  exports:[
    HelloComponent,
    HiComponent
  ]
})
export class MyModule { }
