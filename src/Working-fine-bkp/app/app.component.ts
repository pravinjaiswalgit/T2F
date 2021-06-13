import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  users:IUser[] = [];
  loginUser:string = '';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users=this.userService.getAllUser();
  }

}