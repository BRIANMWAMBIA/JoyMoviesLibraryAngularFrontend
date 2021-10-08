import { BookDetailsComponent } from './routes/books/book-details/book-details.component';
import { AddBookComponent } from './routes/books/add-book/add-book.component';
import { BookListComponent } from './routes/books/book-list/book-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes=[
  {path: '', component: BookListComponent},
  {path: 'add', component: AddBookComponent},
  {path: 'edit/:id', component: AddBookComponent},
  {path: 'details', component: BookDetailsComponent}
  // {path: '**', component: BookListComponent},
]
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
  
})
export class BooksRoutingModule { }
