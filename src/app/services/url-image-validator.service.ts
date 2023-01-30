import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UrlImageValidatorService implements AsyncValidator {
  private debounceTimer?: ReturnType<typeof setTimeout>;

  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    clearTimeout(this.debounceTimer);
    return new Promise((resolve) => {
      this.debounceTimer = setTimeout(() => {
        return this.isValidImgUrl(control.value).then(resolve);
      }, 500);
    });
  }

  private isValidImgUrl(
    url: string,
    timeout: number = 5000
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      let timer: ReturnType<typeof setTimeout>;
      const img = new Image();

      img.onerror = img.onabort = () => {
        clearTimeout(timer);
        resolve({ isValidImage: false });
      };

      img.onload = () => {
        clearTimeout(timer);
        resolve(null);
      };

      timer = setTimeout(() => {
        // reset .src to invalid URL so it stops previous
        // loading, but doesn't trigger new load
        img.src = '//!!!!/test.jpg';
        resolve({ isValidImage: false });
      }, timeout);

      img.src = url;
    });
  }
}
