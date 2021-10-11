

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './routes/books/book-list/book-list.component';
import { SharedMaterialModule } from './shared/shared-material/shared-material/shared-material.module';
import { AddBookComponent } from './routes/books/add-book/add-book.component';
import { BookDetailsComponent } from './routes/books/book-details/book-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './shared-components/shared-components.module';



@NgModule({
  declarations: [
    AddBookComponent,
    BookDetailsComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedMaterialModule,
    SharedComponentsModule,
    FlexLayoutModule,
    
    
  ],
  exports: [AddBookComponent,
    BookDetailsComponent,
    BookListComponent]
})
export class BooksModule { }
