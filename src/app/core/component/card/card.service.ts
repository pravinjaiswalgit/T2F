//Added - Start 
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';
//Added - End

import { ICard } from './card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  card:ICard[]= [];
  url:string='assets/api/card/home-page-card.json'

  constructor(private _httpClient:HttpClient){ }

  getAllCardsDetails():Observable<ICard[]>{
    return  this._httpClient.get<ICard[]>(this.url)
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