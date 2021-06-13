import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
import { IPromotion } from './promotion.interface';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  promotion:IPromotion[]= [];
  url:string='assets/api/promotion/promotion.json'

  constructor(private _httpClient:HttpClient){ }

  getAllPromotion():Observable<IPromotion[]>{
    return  this._httpClient.get<IPromotion[]>(this.url)
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