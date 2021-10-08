import { IMovies } from './../../../shared/models/movie.Interface';

import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books/books.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
bookForm!: FormGroup;
  constructor(private _bookServices: BooksService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.bookForm=this.fb.group({
      id: ['',{}],
      title: ['',{}],
      author: ['',{}],
      pages: ['',{}],
      type: ['',{}],
      about: ['',{}]
    })
  }
  submitForm( movie: IMovies) {
    this._bookServices.addNew(movie).subscribe(res=>{

    },
    err=>{

    }
      )
 }
}
