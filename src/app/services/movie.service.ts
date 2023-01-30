import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getMovie(id: number): Observable<Movie> {
    const movieUrl: string = `${this.apiUrl}/${id}`;
    return this.http.get<Movie>(movieUrl).pipe(catchError(this.handleError));
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http
      .post<Movie>(this.apiUrl, movie, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // https://angular.io/guide/http#getting-error-details
  private handleError(error: HttpErrorResponse): Observable<never> {
    let userMsg: string;
    if (error.status === 0) {
      // A client-side or netowrk error occurred.
      userMsg = 'There was an error. Make sure that json-server is running.';
      console.error('An error occurred: ', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      userMsg = 'There was an error. Please try again later.';
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    // Return an observable with a user-facing error message.
    return throwError(() => new Error(userMsg));
  }
}
