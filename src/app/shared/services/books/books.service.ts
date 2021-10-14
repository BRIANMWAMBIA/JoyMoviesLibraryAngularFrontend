import { IBooks } from './../../models/book.interface';
import { IMovies } from './../../models/movie.Interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // readonly url = 'https://localhost:44378/api';
  // constructor( private http: HttpClient) { }
  // getAll() {
  //   return this.http.get(this.url+'BooksAPI');
  // } 
  //  addNew(movie: IMovies){
  //    return this.http.post(this.url+'/BooksAPI', movie)
  //  }
  //  getById(id: number) {
  //   return this.http.get(this.url+'/BooksAPI'+id)
  //  }
  //  editBook(movie: IMovies){
  //    return this.http.put(this.url+'/BooksAPI'+movie.Id,movie);
  //  }
  //  deleteBook(id: number) {
  //    return this.http.delete(this.url+'/BooksAPI'+id);
  //  }
  bookCollection!: AngularFirestoreCollection<IBooks>;
  bookDoc!: AngularFirestoreDocument;
  BookList!: Observable<IBooks[]>;
  constructor(public afs: AngularFirestore){ 
    this.bookCollection= this.afs.collection<IBooks>('Books');
  }
  addNew(book:any) {
    //console.log("from book service");
    //console.log(book);
    return this.bookCollection.add(book).catch(err=>{
      console.log(err);
    });
  }
  getAll() {
   // return this.afs.collection<IMovies>('Movies').valueChanges();
   return this.bookCollection.snapshotChanges().pipe(
     map(actions => actions.map(a =>{
       const data = a.payload.doc.data() as IBooks;
       data.Id= a.payload.doc.id;
       console.log(data);
       return data; 
     }))) 
  }
  getById(id: string) {
    this.bookDoc=this.afs.doc(`Books/${id}`);
    return this.bookDoc.valueChanges();
  }
  editBook(id: string,book: IBooks) {
    this.bookDoc=this.afs.doc(`Books/${id}`);
    this.bookDoc.update(book);
  }
  deleteBook(id: any){
this.bookDoc=this.afs.doc(`Books/${id}`);
return this.bookDoc.delete()
  }
}
