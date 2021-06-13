import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users:IUser[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users=this.userService.getAllUser();
  }

}
