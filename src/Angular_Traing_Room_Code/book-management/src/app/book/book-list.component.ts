import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  
})
export class BookListComponent implements OnInit {

  title:string=' Book List Test !!! '

  imageHeight:number=60;

  imageWidth:number=60;

  showImage:boolean=false

  books:IBook[]=[];

  errorMessage:string=' '

  // bookService: BookService;

  constructor(private _bookService:BookService) {
      //this.bookService=book;
   }

  ngOnInit(): void {

    this._bookService.getAllBooks().subscribe({

      next:(data)=>this.books=data,

      error:(error) => this.errorMessage=error
    }

       

    );
  
      // this._bookService.getAllBooks().then((data)=>{
      //   this.books=data;
      // })
  
  }

  toggleImage():void{
    this.showImage=!this.showImage
  }
}
