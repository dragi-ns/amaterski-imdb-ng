import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

import { UrlImageValidatorService } from 'src/app/services/url-image-validator.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent {
  @Input() movie?: Movie;
  @Output() submitted = new EventEmitter<Movie>();

  movieForm = this.formBuilder.group({
    title: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(64)],
    ],
    year: [
      '',
      [
        Validators.required,
        Validators.min(1800),
        Validators.max(new Date().getFullYear() + 1),
      ],
    ],
    duration: [0, [Validators.required, Validators.min(1)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(512),
      ],
    ],
    director: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(64)],
    ],
    logo: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        ),
      ],
      [this.urlImageValidator.validate.bind(this.urlImageValidator)],
    ],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private urlImageValidator: UrlImageValidatorService,
    private location: Location
  ) {}

  get title() {
    return this.movieForm.get('title');
  }

  get year() {
    return this.movieForm.get('year');
  }

  get duration() {
    return this.movieForm.get('duration');
  }

  get rating() {
    return this.movieForm.get('rating');
  }

  get description() {
    return this.movieForm.get('description');
  }

  get director() {
    return this.movieForm.get('director');
  }

  get logo() {
    return this.movieForm.get('logo');
  }

  onSubmit() {
    const newMovie: Movie = this.movieForm.value as Movie;
    this.submitted.emit(newMovie);
  }

  goBack() {
    this.location.back();
  }
}
