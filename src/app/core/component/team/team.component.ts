import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITeam } from './team.interface';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title:string="My Team"
  isDisable:boolean=false;
  teams:ITeam[] = [];
  errorMessage:string=''

  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _teamService:TeamService){
  }

  ngOnInit(): void {
    this._teamService.getAllTeamMumber().subscribe({
      next:(data)=>this.teams=data,
      error:(error) => this.errorMessage=error
    }
    );
  }


}
