import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: [],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  errorMsg?: string;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (movies) => (this.movies = movies),
      error: (error) => (this.errorMsg = error.message),
    });
  }
}
