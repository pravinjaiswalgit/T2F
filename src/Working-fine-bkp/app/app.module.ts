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
    UserdetailsComponent
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
