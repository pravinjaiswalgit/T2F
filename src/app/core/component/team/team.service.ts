//Added - Start 
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';
//Added - End


import { ITeam } from './team.interface';

@Injectable({
  providedIn: 'root'
})

export class TeamService {
  teams:ITeam[]= [];
  url:string='assets/api/team/team.json'

  constructor(private _httpClient:HttpClient){ }

  getAllTeamMumber():Observable<ITeam[]>{
    return  this._httpClient.get<ITeam[]>(this.url)
    .pipe(
        tap((data)=>{
            console.log(data)
        }),
      catchError(this.handleError)
    );
  }


  handleError(err:HttpErrorResponse){
    return throwError(err.message || 'Server Error');
  }
}
