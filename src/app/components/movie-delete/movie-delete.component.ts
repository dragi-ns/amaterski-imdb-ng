import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: [],
})
export class MovieDeleteComponent implements OnInit {
  movie?: Movie;
  reason?: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe({
      next: (movie) => (this.movie = movie),
      // Redirect the user to the homepage (Movies)
      // if the movie doesn't exist
      error: (_) => this.router.navigate(['']),
    });
  }

  onSubmit() {
    // For now just console.log the reason
    console.log(this.reason);
    this.movieService.deleteMovie(this.movie?.id!).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  goBack() {
    this.location.back();
  }
}
