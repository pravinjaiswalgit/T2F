import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book/book-details.component';
import { BookDetailsGuard } from './book/book-details.guard';
import { BookListComponent } from './book/book-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'books',component:BookListComponent},
  {
    path:'books/:id',
    component:BookDetailsComponent,
    canActivate:[BookDetailsGuard]
  },
  {path:'', redirectTo:'home',pathMatch:'prefix'},
  {path:'**',redirectTo:'home',pathMatch:'prefix'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
