import { Component, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css'],
})
export class ToastsComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(content: string | TemplateRef<any>) {
    return content instanceof TemplateRef;
  }
}
