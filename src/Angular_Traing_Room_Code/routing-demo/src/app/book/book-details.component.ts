import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  pageTitle="Book Details : "

  book:IBook[] |undefined

  constructor(private _activatedRoute:ActivatedRoute,
              private _router:Router,
              private _bookService:BookService
    ) { }

  /* Working Fine */  
  ngOnInit(): void {
   const id:number=Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.pageTitle+=id

      this._bookService.getAllBooks().subscribe({
        next:(data)=>{
         this.book = data.filter(book=>book.bookID===id)
        
        }
      });
  }


  onBack():void{
      this._router.navigate(['/books'])
  }

}
