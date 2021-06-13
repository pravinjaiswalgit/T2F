import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from './user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  title:string="My User"
  isDisable:boolean=false;
  users:IUser[] = [];
  errorMessage:string=''
  
  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _userService:UserService){
  }

  ngOnInit(): void {
    this._userService.getAllUser().subscribe({
      next:(data)=>this.users=data,
      error:(error) => this.errorMessage=error
    }
    );
  }

  SampleFunction(){
    console.log('Test Function Called !!!!!');
  }

}
