//Added - Start 
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { IPartnership } from './partnership.interface';
//Added - End

@Injectable({
  providedIn: 'root'
})
export class PartnershipService {

  card:IPartnership[]= [];
  url:string='assets/api/partnership/home-page-partnership.json'

  constructor(private _httpClient:HttpClient){ }

  getAllPartnershipDetails():Observable<IPartnership[]>{
    return  this._httpClient.get<IPartnership[]>(this.url)
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