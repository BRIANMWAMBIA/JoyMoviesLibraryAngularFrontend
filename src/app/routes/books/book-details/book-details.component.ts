import { IBooks } from './../../../shared/models/book.interface';
import { IMovies } from './../../../shared/models/movie.Interface';
import { BooksService } from './../../../shared/services/books/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
book!: IBooks;
  constructor(private _bookServices: BooksService) { }

  ngOnInit(): void {
  }
getDetails(){
  this._bookServices.getById(1).subscribe(res=>{
this.book=res as IBooks;
  },
  err=>{

  })
}
}
