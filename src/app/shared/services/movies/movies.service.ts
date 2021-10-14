
import { IMovies } from '../../models/movie.Interface';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // movieDetails!: IMovies;
  movieCollection!: AngularFirestoreCollection<IMovies>;
  movieDoc!: AngularFirestoreDocument;
  MovieList!: Observable<IMovies[]>;
  
  // readonly url = 'https://localhost:44378/api';
  // constructor(private http: HttpClient) { }

  // addNew(movie: IMovies) {
  //   //console.log(movie);
  //   return this.http.post(this.url + '/MoviesAPI', movie);
  // }

  // getAll() {
  //   return this.http.get(this.url + '/MoviesAPI');
  // }

  // // getById(id?: number): IMovies {
  // //  // console.log(id);
  // //    this.http.get(this.url+'/MoviesAPI/'+id).toPromise()
  // //   .then(res=> {
  // // this.movieDetails=res as IMovies;
  // // console.log(this.movieDetails);
  // // return this.movieDetails;
  // //   },
  // //   err=>{}
  // //   ) 
  // //   return this.movieDetails;
  // // // console.log(this.movieDetails);
  // // }

  // getById(id: number) {
  //   return this.http.get<IMovies>(this.url + '/MoviesAPI/' + id);
  // }

  // deleteMovie(id: number) {
  //   return this.http.delete(this.url + '/MoviesAPI/' + id);
  // }
  // editMovie(id: number, movie: IMovies) {
  //   console.log(movie);
  //   console.log(id);
  //   return this.http.put(this.url + '/MoviesAPI/' + id, movie);

  // }

  constructor(public afs: AngularFirestore){ 
    this.movieCollection= this.afs.collection<IMovies>('Movies');
  }
  addNew(movie:any) {
    //console.log("from movie service");
    //console.log(movie);
    return this.movieCollection.add(movie).catch(err=>{
      console.log(err);
    });
  }
  getAll() {
   // return this.afs.collection<IMovies>('Movies').valueChanges();
   return this.movieCollection.snapshotChanges().pipe(
     map(actions => actions.map(a =>{
       const data = a.payload.doc.data() as IMovies;
       data.Id= a.payload.doc.id;
       console.log(data);
       return data;
     }))) 
  }
  getById(id: string) {
    this.movieDoc=this.afs.doc(`Movies/${id}`);
    return this.movieDoc.valueChanges();
  }
  editMovie(id: string,movie: IMovies) {
    this.movieDoc=this.afs.doc(`Movies/${id}`);
    this.movieDoc.update(movie);
  }
  deleteMovie(id: any){
this.movieDoc=this.afs.doc(`Movies/${id}`);
return this.movieDoc.delete()
  }
}
