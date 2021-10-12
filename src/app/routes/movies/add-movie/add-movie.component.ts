import { MoviesService } from '../../../shared/services/movies/movies.service';
import { IMovies } from '../../../shared/models/movie.Interface';
import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movieForm!: FormGroup;
  movie!: any;
  upMovie!: IMovies;
   id!: any ;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _moviesservice: MoviesService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    //  const id=  this.route.snapshot.params.id;
    this.id = this.route.snapshot.params.id;
    // console.log(id);
    
      this.initForm();
 
  }
 
  initForm() {
    this.movieForm = this.fb.group({
      id: ['', {}],
      title: ['', {}],
      category: ['', {}],
      Type: ['', {}],
      mainActor: ['', {}],
      description: ['', {}],

    });
  }

  submitForm(form: any) {
    // console.log(form.title);
    this.upMovie = {
      Id: form.id,
      Title: form.title,
      Category: form.category,
      type: form.Type,
      Main_Actor: form.mainActor,
      Description: form.description,

    }
    // console.log(this.upMovie.Id);
    const id = this.route.snapshot.params.id;
    //console.log (id);
    if (id == null)
      this.newMovie(this.upMovie);

  }
  newMovie(form: any) {
    {

      // this.movies.addNew(mov);
      this._moviesservice.addNew(form).then(res => {
         //console.log("SUCCESS");
        //reset the  form
        this.snackbar.open("Movie Saved", "success", { duration: 5000, panelClass: ['green-snackbar'] });
        this.initForm();
      }
       
      ).catch(err=>{
        console.log(err);
      })
    }
  }


}



