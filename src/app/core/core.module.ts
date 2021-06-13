import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './component/banner/banner.component';
import { PromotionComponent } from './component/promotion/promotion.component';
import { TeamComponent } from './component/team/team.component';
import { CardComponent } from './component/card/card.component';
import { PartnershipComponent } from './component/partnership/partnership.component';
import { OrganisationNumberComponent } from './component/organisation-number/organisation-number.component';
import { EventComponent } from './component/event/event.component';



@NgModule({
  declarations: [
    BannerComponent,
    PromotionComponent,
    TeamComponent,
    CardComponent,
    PartnershipComponent,
    OrganisationNumberComponent,
    EventComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
