//Added - Start 
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { IEvent } from './event.interface';

//Added - End

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events:IEvent[]= [];
  url:string='assets/api/event/event.json'

  constructor(private _httpClient:HttpClient){ }

  getAllEvent():Observable<IEvent[]>{
    return  this._httpClient.get<IEvent[]>(this.url)
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

