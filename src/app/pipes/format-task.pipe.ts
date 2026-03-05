import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTask'
})
export class FormatTaskPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.length > 20 ? value.substring(0, 20) + '...' : value;
  }
}