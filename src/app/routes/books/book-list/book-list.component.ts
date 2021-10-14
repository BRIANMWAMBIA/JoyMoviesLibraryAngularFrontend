import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  constructor(
    private _bookServices: BooksService,
    private router: Router,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this._bookServices.getAll().subscribe(res => {
      this.bookList = res;
      if (this.bookList.length==0) {
        this.isempty=true;
        // console.log(this.bookList);
      }

    }, err => {

    }
    )
    
  }
  getDetails(id: any) {
    console.log("working");
    
  this.router.navigate(['/books/details',id]);

  }
  deleteBook(id: any) { 
    if(confirm('You Are About To Delete This Book')) {
      console.log("Deleted successfully");
      this._bookServices.deleteBook(id);
    this.snackbar.open("Deleted Successfully", "Succes", {duration: 5000})
      this.getAll();
    }
 
  }
  editBook(id: any){
console.log("edited successfully");
this.router.navigate(['/books/update',id]);
  }
}
