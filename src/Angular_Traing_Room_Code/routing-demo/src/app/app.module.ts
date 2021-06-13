import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book/book-list.component';
import { BookDetailsComponent } from './book/book-details.component';
import { BookDetailsGuard } from './book/book-details.guard';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book/book.service';

@NgModule({
  declarations: [   // components,pipes,directives
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookDetailsComponent
  ],
  imports: [         // cutstom module,3 rd modules,angular modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BookDetailsGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
