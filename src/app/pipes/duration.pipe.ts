import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remain = minutes % 60;
    if (hours === 0) {
      return `${remain}m`;
    }
    return `${hours}h ${remain}m`;
  }
}
