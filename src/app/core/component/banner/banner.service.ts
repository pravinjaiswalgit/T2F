import { Injectable } from '@angular/core';

// Required for Service : Start
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
// Required for Service : End
import { IBanner } from './banner.interface';

@Injectable({
  providedIn: 'root'
})

export class BannerService {
  banner:IBanner[] = [];

  constructor(private _httpClient:HttpClient){ }

  url:string='assets/api/banner/home-page-banner.json'
  getAllBanner():Observable<IBanner[]>{

    return  this._httpClient.get<IBanner[]>(this.url)
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
