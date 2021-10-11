import { ActivatedRoute } from '@angular/router';
import { IMovies } from '../../../shared/models/movie.Interface';
import { MoviesService } from '../../../shared/services/movies/movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    movie: any;
  constructor(
    private _moviesservice: MoviesService,
   private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    
    this.getDetails();
  }

  getDetails() {
 
    const id=  this.route.snapshot.params.id;
   this._moviesservice.getById(id).subscribe(res=>{
     this.movie=res;
  
   },
   err=>{
     console.log(err)
   }
   )
      //console.log(this.movie); 
  }

}
