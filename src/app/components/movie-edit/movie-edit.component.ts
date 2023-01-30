import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: [],
})
export class MovieEditComponent implements OnInit {
  movie?: Movie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe((movie) => (this.movie = movie));
  }

  editMovie(movie: Movie) {
    this.movieService
      .editMovie({ ...movie, id: this.movie?.id })
      .subscribe((movie) => {
        // TODO: Show the success toast
        // TODO: Also handle the case when the movie isn't updated successfully
        // For now just console.log the movie
        // and redirect the user to the movie view page
        console.log(movie);
        this.router.navigate([`/movie/${movie.id}`]);
      });
  }
}
