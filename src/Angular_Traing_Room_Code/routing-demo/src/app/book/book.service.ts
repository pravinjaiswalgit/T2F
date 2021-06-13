import { Injectable } from '@angular/core';
import { IBook } from './book';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

import { tap , catchError } from 'rxjs/operators'

//import 'rxjs/add/operator/catch'



@Injectable({
  providedIn:'root'
})
export class BookService {

  constructor(private _httpClient:HttpClient){

  }

  books:IBook[]= [];

  url:string='assets/api/books/books.json'

  getAllBooks():Observable<IBook[]>{

    return  this._httpClient.get<IBook[]>(this.url)
            .pipe(
                tap((data)=>{
                    console.log(data)
                }),

              catchError(this.handleError)

            );
                


  //  return  this._httpClient.get<IBook[]>('assets/api/books/books.json')
  //           .toPromise();
  }

  


  handleError(err:HttpErrorResponse){
      return throwError(err.message || 'Server Error');
  }


}
