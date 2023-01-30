import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieDeleteComponent } from './components/movie-delete/movie-delete.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/add', component: MovieAddComponent },
  { path: 'movie/:id', component: MovieViewComponent },
  { path: 'movie/:id/edit', component: MovieEditComponent },
  { path: 'movie/:id/delete', component: MovieDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
