import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from './user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  title:string="My String"
  isDisable:boolean=false;
  users:IUser[] = [];
 
  
  usersfromService;
  constructor(userService:UserService){
    this.usersfromService = userService;
  }

  ngOnInit(): void {
    this.users = this.usersfromService.getAllUser();
  }

  SampleFunction(){
    console.log('Test Function Called !!!!!');
  }

}
