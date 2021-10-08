import { IMovies } from './../../models/movie.Interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly url = 'https://localhost:44378/api';
  constructor( private http: HttpClient) { }
  getAll() {
    return this.http.get(this.url+'BooksAPI');
  } 
   addNew(movie: IMovies){
     return this.http.post(this.url+'/BooksAPI', movie)
   }
   getById(id: number) {
    return this.http.get(this.url+'/BooksAPI'+id)
   }
   editBook(movie: IMovies){
     return this.http.put(this.url+'/BooksAPI'+movie.Id,movie);
   }
   deleteBook(id: number) {
     return this.http.delete(this.url+'/BooksAPI'+id);
   }
}
