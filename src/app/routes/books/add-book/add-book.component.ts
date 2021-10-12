import { IBooks } from './../../../shared/models/book.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.bookForm = this.fb.group({
      id: ['', {}],
      title: ['', {}],
      author: ['', {}],
      pages: ['', {}],
      type: ['', {}],
      about: ['', {}]
    })
  }
  submitForm(form: IBooks) {
     // this.movies.addNew(mov);
     this._bookServices.addNew(form).then(res => {
      //console.log("SUCCESS");
     //reset the  form
     this.snackbar.open("Movie Saved", "success", { duration: 5000, panelClass: ['green-snackbar'] });
     this.initForm();
   }
    
   ).catch(err=>{
     console.log(err);
   })
  }
}
