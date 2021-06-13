import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdetailsGuard } from './userdetails/userdetails.guard';

// const routes: Routes = [
 
//   {path:'home',component:HomeComponent},
//   {path:'about',component:AboutComponent},
//   {path:'contactus',component:ContactusComponent},
//   {path:'userlist',component:UserComponent},
//   {
//     path:'userlist/:id',
//     component:UserdetailsComponent,
//     canActivate:[UserdetailsGuard]
//   },
//   {path:'eagar-loading', 
//     component: EagerHomeComponent,
//     children:[
//       {path:'child1', component:EagerChild1Component},
//       {path:'child2', component:EagerChild2Component},
//       {path:'',redirectTo:'',pathMatch:'prefix'},
//       {path:'**',redirectTo:'',pathMatch:'child1'}
//     ]
//   },
//   {path:'',redirectTo:'home',pathMatch:'prefix'},
//   {path:'**',redirectTo:'home',pathMatch:'prefix'},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



 const routes: Routes = [
 
   {path:'home',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'contactus',component:ContactusComponent},
   {path:'userlist',component:UserComponent},
   {
     path:'userlist/:id',
     component:UserdetailsComponent,
     canActivate:[UserdetailsGuard]
   },
   {path:'',redirectTo:'home',pathMatch:'prefix'},
   {path:'**',redirectTo:'home',pathMatch:'prefix'},
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }