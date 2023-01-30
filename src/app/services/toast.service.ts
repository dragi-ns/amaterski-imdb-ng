import { Injectable, TemplateRef } from '@angular/core';
import { Toast } from '../interfaces/toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: Toast[] = [];

  show(
    textOrTemplate: string | TemplateRef<any>,
    options: { classname?: string; delay?: number } = {}
  ) {
    this.toasts.push({ textOrTemplate, ...options });
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((currentToast) => currentToast !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
