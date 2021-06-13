import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../user.service';
import { IUser } from '../user/user.interface';
//import { User } from './user/user.interface';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userID:number = 0;
  usersfromService;
  users:IUser[] = [];
  objUser:IUser[] = [];


  constructor(private _activateRoute:ActivatedRoute, 
      private userService:UserService,
      private _router:Router) { 
    this.usersfromService = userService;
  }

  ngOnInit(): void {
    
    const id:number = Number(this._activateRoute.snapshot.paramMap.get('id'));
    this.userID = id;
    this.users = this.usersfromService.getUserByID(id);
    
    // D:\Work 1\Training\Angular\Angular Routing.docx - Page Number 152 !!!
  }

  onBacktoUserList():void{
    this._router.navigate(['/userlist'])
  }




}
