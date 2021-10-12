import { MatSnackBar } from '@angular/material/snack-bar';
import { IMovies } from 'src/app/shared/models/movie.Interface';
import { MoviesService } from './../../../shared/services/movies/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movieForm!: FormGroup;
  movie!: IMovies;
  id!: string;
  constructor(
    private _moviesservice: MoviesService,
    private fb: FormBuilder,
   private route: ActivatedRoute,
   private snackbar: MatSnackBar,
   private router: Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.populateForm();
  }
  populateForm(){
    this._moviesservice.getById(this.id).subscribe(res=>{
      this.movie=res  as IMovies;
          //console.log(this.movie);
          this.movieForm = this.fb.group({
            id: [this.movie.Id, {}],
            title: [this.movie.Title, {}],
            category: [this.movie.Category, {}],
            Type: [this.movie.type, {}],
            mainActor: [this.movie.Main_Actor, {}],
            description: [this.movie.Description, {}],
          });
        })
      
    }
  submitForm(form: any) {
    this.movie = {
      Id: form.id,
      Title: form.title,
      Category: form.category,
      type: form.Type,
      Main_Actor: form.mainActor,
      Description: form.description,
    }
    this.editMovie(this.id,this.movie);
  }
  editMovie(id: string, form: IMovies) {
    this._moviesservice.editMovie(id,form);
    this.snackbar.open("Updated Successfully", "Success",{duration: 5000});
    this.router.navigate(['/Movies']);
     
    
    //console.log(form,id);
  }
}