import { Injectable } from '@angular/core';
import { UserComponent } from './user/user.component';
import { User } from './user/user.interface';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  

  objTempUsers:User[] = [{
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

  users:User[]=[
    {
    userName:'User 1',
    userAge:50,
    userGender:'M',
    userMobile:8888888881,
    userPhone:8888888881,
    userIncome:5000,
    userID:1,
    userOtherDetails:'other details 1',
    userAdhar : '1234567891'
  },
  {
    userName:'User 2',
    userAge:30,
    userGender:'M',
    userMobile:8888888882,
    userPhone:8888888882,
    userIncome:3000,
    userID:2,
    userOtherDetails:'other details 2',
    userAdhar : '123456782'
  },
  {
    userName:'User 3',
    userAge:20,
    userGender:'M',
    userMobile:8888888883,
    userPhone:8888888883,
    userIncome:2000,
    userID:3,
    userOtherDetails:'other details 3',
    userAdhar : '123456783'
  },
  {
    userName:'User 4',
    userAge:40,
    userGender:'M',
    userMobile:8888888884,
    userPhone:8888888884,
    userIncome:4000,
    userID:4,
    userOtherDetails:'other details 4',
    userAdhar : '123456784'
  },
  {
    userName:'User 5',
    userAge:80,
    userGender:'M',
    userMobile:8888888888,
    userPhone:8888888888,
    userID:5,
    userOtherDetails:'other details 5',
    userAdhar : '123456785'
  }];


  getAllUser():User[]{
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
