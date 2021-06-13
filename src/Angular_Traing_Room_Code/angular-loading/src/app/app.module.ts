import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerLoadingModuleModule } from './eager-loading-module/eager-loading-module.module';
import { LazyLoadingModuleModule } from './lazy-loading-module/lazy-loading-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EagerLoadingModuleModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
