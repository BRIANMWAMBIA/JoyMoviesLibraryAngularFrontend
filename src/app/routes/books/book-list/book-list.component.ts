import { IBooks } from './../../../shared/models/book.interface';
import { Component, OnInit } from '@angular/core';
import { IMovies } from 'src/app/shared/models/movie.Interface';
import { BooksService } from 'src/app/shared/services/books/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList!: IBooks[];
  isempty: boolean = false;
  constructor(private _bookServices: BooksService) { }

  ngOnInit(): void {
  }
  getAll() {
    this._bookServices.getAll().subscribe(res => {
      this.bookList = res as IBooks[];
      if (this.bookList!=[]) {
        console.log(this.bookList);
      }

    }, err => {

    }
    )
  }
  getDetails(id: any) {
    console.log("working");
  }
  deleteBook(id: any) {
    console.log("Deleted successfully")
  }
  editBook(id: any){
console.log("edited successfully");
  }
}
