import { ActivatedRoute } from '@angular/router';
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
id!: string;
  constructor(private _bookServices: BooksService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
this.getDetails();
  }
getDetails(){
  this.id= this.route.snapshot.params.id;
  this._bookServices.getById(this.id).subscribe(res=>{
this.book=res as IBooks;
  },
  err=>{

  })
}
}
