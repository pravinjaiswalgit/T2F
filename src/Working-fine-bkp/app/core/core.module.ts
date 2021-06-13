import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './component/banner/banner.component';
import { PromotionComponent } from './component/promotion/promotion.component';



@NgModule({
  declarations: [
    BannerComponent,
    PromotionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
