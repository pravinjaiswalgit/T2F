//Added - Start 
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { IOrganisationNumber } from './organisation-number.interface';
//Added - End


@Injectable({
  providedIn: 'root'
})
export class OrganisationNumberService {
  organisationnumbers:IOrganisationNumber[]= [];
  url:string='assets/api/organisation-number/organisation-performance.json'
  //url:string='assets/api/organisation-number/organisation-project.json'
  ///url:string='assets/api/organisation-number/organisation-team.json'


  constructor(private _httpClient:HttpClient){ }

  getAllOrganisationNumber():Observable<IOrganisationNumber[]>{
    return  this._httpClient.get<IOrganisationNumber[]>(this.url)
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
