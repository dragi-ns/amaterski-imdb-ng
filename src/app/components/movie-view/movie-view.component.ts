import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css'],
})
export class MovieViewComponent implements OnInit {
  movie?: Movie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe({
      next: (movie) => (this.movie = movie),
      // Redirect the user to the homepage (Movies)
      // if the movie doesn't exist
      error: (_) => this.router.navigate(['']),
    });
  }
}
