
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

  constructor() { }
  

  objTempUsers:IUser[] = [{
    userName:'User 1',
    userAge:50,
    userGender:'M',
    userMobile:8888888881,
    userPhone:8888888881,
    userIncome:5000,
    userID:1,
    userOtherDetails:'other details 1',
    userAdhar : '1234567891'
  }];

  users:IUser[]=[{
    userName:'User 1',
    userAge:50,
    userGender:'M',
    userMobile:8888888881,
    userPhone:8888888881,
    userIncome:5000,
    userID:1,
    userOtherDetails:'other details 1',
    userAdhar : '1234567891'
  }];


  getAllUser():IUser[]{
    return this.users;
  }

  /* work fine 
  getUserByID(_UserID:number):User[]{
    //return this.objUser = this.users.find(data => data.userID === i_UserID);
    
    return this.users;
  }
  */

  getUserByID(_UserID:number){
    this.objTempUsers = this.users.filter(data => data.userID === _UserID);
    return this.objTempUsers;
  }
}
