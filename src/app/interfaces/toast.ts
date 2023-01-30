import { TemplateRef } from '@angular/core';

export interface Toast {
  textOrTemplate: string | TemplateRef<any>;
  classname?: string;
  delay?: number;
}
