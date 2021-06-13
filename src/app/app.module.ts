import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { CoreModule } from './core/core.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AdharPipe } from './adhar.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { BannerComponent } from './core/component/banner/banner.component';
import { TeamComponent } from './core/component/team/team.component';
import { CardComponent } from './core/component/card/card.component';
import { PartnershipComponent } from './core/component/partnership/partnership.component';
import { OrganisationNumberComponent } from './core/component/organisation-number/organisation-number.component';
import { EventComponent } from './core/component/event/event.component';
import { PromotionComponent } from './core/component/promotion/promotion.component';




@NgModule({
  declarations: [ //Component, Pipe, Directive
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AdharPipe,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    UserdetailsComponent,
    BannerComponent,
    TeamComponent,
    CardComponent,
    PartnershipComponent,
    OrganisationNumberComponent,
    EventComponent,
    PromotionComponent
  ],
  imports: [ // Custom : Angular Module, 3rd Party Module
    BrowserModule,
    //CoreModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
