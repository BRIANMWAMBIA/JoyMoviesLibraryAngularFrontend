import { BooksService } from './../../../shared/services/books/books.service';
import { IBooks } from './../../../shared/models/book.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookForm!: FormGroup;
  book!: IBooks;
  id!: string;
  constructor(
    private _booksservice: BooksService,
    private fb: FormBuilder,
   private route: ActivatedRoute,
   private snackbar: MatSnackBar,
   private router: Router
  ) { }

  ngOnInit(): void {
  
    this.populateForm();
  }
  populateForm(){
    this.id=this.route.snapshot.params.id;
    this._booksservice.getById(this.id).subscribe(res=>{
      this.book=res as IBooks;
          console.log(this.book);
          this.bookForm = this.fb.group({
            id: [this.book.Id, {}],
            title: [this.book.Title, {}],
            pages: [this.book.Pages, {}],
            type: [this.book.Type, {}],
            author: [this.book.Author, {}],
            about: [this.book.About, {}]
          });
        },
        err=> {
          console.log(err);
        })
      
    }
  submitForm(form: any) {
    this.book = {
      Id: form.id,
      Title: form.title,
      Pages: form.pages,
      Type: form.type,
      Author: form.author,
      About: form.about,
    }
    this.editBook(this.id,this.book);
  }
  editBook(id: string, form: IBooks) {
    this._booksservice.editBook(id,form);
    this.snackbar.open("Updated Successfully", "Success",{duration: 5000});
    this.router.navigate(['/books']);
     
    
    //console.log(form,id);
  }
}