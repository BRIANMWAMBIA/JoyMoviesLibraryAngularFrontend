import { Router, Routes } from '@angular/router';
import { IMovies } from '../../../shared/models/movie.Interface';
import { MoviesService } from '../../../shared/services/movies/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  mlist: IMovies[] = [];
 isempty: boolean=false;
   
   movieDetails!: IMovies;
  
  constructor(private _moviesservice: MoviesService, private router: Router) { }

  ngOnInit(): void {
    // this.getMovies();
  }

//   getMovies() {
//     //this.movies.getAll()
//     this._moviesservice.getAll().subscribe(
//       res => {
//         this.mlist = res ;
//         // console.log(this.mlist);
//         if(this.mlist.length==0){
//           this.isempty=true;
//            console.log(this.mlist);
//         }
    
//       },
//       err => {

//       }
//     )
//   }
 deleteMovie(id: any) {
// this._moviesservice.deleteMovie(id).subscribe(
//   req=> {
//     this.getMovies();
// //console.log("Delted successfully")
// },
// err=>{

// }
// );
   }
  editMovie(id: any) {
    this.router.navigate(['/Create', id])
//     console.log(id)
// this.isedit=true;
  }
  getDetails(id: any) {
    
  this.router.navigate(['/MovieDetails',id]);
    // this.ismovieclicked=true;
   
  }
 
}
