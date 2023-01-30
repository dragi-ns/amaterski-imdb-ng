import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: [],
})
export class MovieAddComponent {
  constructor(private movieService: MovieService, private router: Router) {}

  addMovie(movie: Movie): void {
    this.movieService.addMovie(movie).subscribe((movie) => {
      // TODO: Show the success toast with a link to the movie view
      // TODO: Also handle the case when the movie isn't added successfully
      // For now just console.log the movie
      // and redirect the user to the homepage
      console.log(movie);
      this.router.navigate(['']);
    });
  }
}
