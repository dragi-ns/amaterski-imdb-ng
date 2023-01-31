import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: [],
})
export class MovieAddComponent {
  @ViewChild('successTemplate', { static: true })
  successTemplate?: TemplateRef<any>;
  addedMovie?: Movie;

  constructor(
    private movieService: MovieService,
    private toastService: ToastService
  ) {}

  addMovie(movie: Movie): void {
    this.movieService.addMovie(movie).subscribe({
      next: (movie) => {
        this.addedMovie = movie;
        this.toastService.show(this.successTemplate!, {
          classname: 'bg-success text-light',
        });
      },
      error: () => {
        this.toastService.show(
          'There was an error while adding the movie; please try again later!',
          {
            classname: 'bg-danger text-light',
          }
        );
      },
    });
  }
}
