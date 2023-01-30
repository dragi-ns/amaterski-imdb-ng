import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/add', component: MovieAddComponent },
  { path: 'movie/:id', component: MovieViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
