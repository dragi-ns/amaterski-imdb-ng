import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ToastService } from 'src/app/services/toast.service';

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
    private movieService: MovieService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe((movie) => (this.movie = movie));
  }

  editMovie(movie: Movie) {
    this.movieService.editMovie({ ...movie, id: this.movie?.id }).subscribe({
      next: () => {
        this.toastService.show('Movie successfully updated!', {
          classname: 'bg-success text-light',
        });
      },
      error: () => {
        this.toastService.show(
          'There was an error while updating movie; please try again later!',
          {
            classname: 'bg-danger text-light',
          }
        );
      },
      complete: () => {
        this.router.navigate([`/movie/${this.movie?.id}`]);
      },
    });
  }
}
