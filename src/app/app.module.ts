import { BooksService } from './shared/services/books/books.service';
import { HomeComponent } from './routes/home/home.component';
import { MoviesService } from './shared/services/movies/movies.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedMaterialModule } from './shared/shared-material/shared-material/shared-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddMovieComponent } from './routes/movies/add-movie/add-movie.component';
import { MovieListComponent } from './routes/movies/movie-list/movie-list.component';

import { MovieDetailsComponent } from './routes/movies/movie-details/movie-details.component';
import { CoverComponent } from './routes/cover/cover.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
// import { AuthRoutingModule } from './auth-routing.module';
// import { AuthModule } from './routes/auth/auth.module';
//import { AuthModule } from './routes/auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
   
    AddMovieComponent,
    MovieListComponent,
   
    MovieDetailsComponent,
  HomeComponent,
   
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    SharedMaterialModule,
//  AuthModule,
    NoopAnimationsModule,
    FlexLayoutModule,
   HttpClientModule,
   ReactiveFormsModule,
   FormsModule,
   AngularFireModule.initializeApp(environment.firebase),
   AngularFireDatabaseModule,
   AngularFireAuthModule,
   AngularFirestoreModule
  
  ],
  providers: [MoviesService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
