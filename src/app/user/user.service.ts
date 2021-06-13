import { Injectable } from '@angular/core';

// Required for Service : Start
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
// Required for Service : End
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users:IUser[] = [];
  url:string='assets/api/users/users.json'

  constructor(private _httpClient:HttpClient){ }

  getAllUsers():Observable<IUser[]>{
    return  this._httpClient.get<IUser[]>(this.url)
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
