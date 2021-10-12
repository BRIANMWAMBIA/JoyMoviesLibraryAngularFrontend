import { BookDetailsComponent } from './routes/books/book-details/book-details.component';
import { AddBookComponent } from './routes/books/add-book/add-book.component';
import { BookListComponent } from './routes/books/book-list/book-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './routes/books/edit-book/edit-book.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';


const routes: Routes=[
  {path: '', component: BookListComponent,canActivate: [AngularFireAuthGuard]},
  {path: 'add', component: AddBookComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'update/:id',component: EditBookComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'details/:id', component: BookDetailsComponent, canActivate: [AngularFireAuthGuard]}
  // {path: '**', component: BookListComponent},
]
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
  
})
export class BooksRoutingModule { }
