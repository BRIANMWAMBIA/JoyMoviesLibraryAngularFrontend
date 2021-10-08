
import { AddMovieComponent } from './routes/movies/add-movie/add-movie.component';
import { HomeComponent } from './routes/home/home.component';
// import { CoverComponent } from './routes/cover/cover.component';

import { MovieDetailsComponent } from './routes/movies/movie-details/movie-details.component';
import { MovieListComponent } from './routes/movies/movie-list/movie-list.component';
 
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./routes/auth/auth.module').then(m => m.AuthModule)},
  {path: 'books', loadChildren: () => import('./books.module').then(m=>m.BooksModule), canActivate: [AngularFireAuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'Create',component: AddMovieComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'Create/:id',component: AddMovieComponent,canActivate: [AngularFireAuthGuard] },

  { path: 'Movies', component: MovieListComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'MovieDetails/:id', component: MovieDetailsComponent, canActivate: [AngularFireAuthGuard] },
 
// {path: 'Cover', component: CoverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
