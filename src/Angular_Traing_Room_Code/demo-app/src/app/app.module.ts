import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MyModule } from './my/my.module';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { PersonService } from './person.service';
import { TestPipe } from './test.pipe';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PersonComponent,
    TestPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    MyModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
