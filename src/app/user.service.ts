//Added - Start 
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
//Added - End

import { Injectable } from '@angular/core';
import { UserComponent } from './user/user.component';
import { IUser } from './user/user.interface';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:IUser[]= [];
  constructor(private _httpClient:HttpClient){ }
  url:string='assets/api/users/users.json'

  getAllUser():Observable<IUser[]>{

    return  this._httpClient.get<IUser[]>(this.url)
            .pipe(
                tap((data)=>{
                    console.log(data)
                }),
              catchError(this.handleError)
            );
  }


  getUserByID(_UserID:number):Observable<IUser[]>{
      return  this._httpClient.get<IUser[]>(this.url)
      .pipe(
          tap((data)=>{
            this.users = this.users.filter(data => data.UserID === _UserID);
          }),
        catchError(this.handleError)
      );
  }


  handleError(err:HttpErrorResponse){
      return throwError(err.message || 'Server Error');
  }
}



  // Org
  // getUserByID(_UserID:number){
  //   this.user = this.users.filter(data => data.userID === _UserID);
  //   return this.user;
  // }

  // getUserByID(_UserID:number):Observable<IUser[]>{
  //   this.users = this.users.filter(data => data.UserID === _UserID);
  //   return this.users;
  // }




// ngOnInit(): void {
//   const id:number=Number(this._activatedRoute.snapshot.paramMap.get('id'));
//    this.pageTitle+=id

//      this._bookService.getAllBooks().subscribe({
//        next:(data)=>{
//         this.book = data.filter(book=>book.bookID===id)
       
//        }
//      });
//  }



//   getAllUser():IUser[]{
//     return this.users;
//   }



//   /* work fine 
//   getUserByID(_UserID:number):User[]{
//     //return this.objUser = this.users.find(data => data.userID === i_UserID);
    
//     return this.users;
//   }
//   */

//   getUserByID(_UserID:number){
//     this.objTempUsers = this.users.filter(data => data.userID === _UserID);
//     return this.objTempUsers;
//   }
// }
