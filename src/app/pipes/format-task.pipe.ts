import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTask',
  standalone: true
})
export class FormatTaskPipe implements PipeTransform {
  transform(value: string, maxLen: number = 26): string {
    if (!value) return '';

    // simple “nice look” formatting
    const cleaned = value.trim();

    // truncate if too long
    if (cleaned.length > maxLen) {
      return cleaned.slice(0, maxLen).trimEnd() + '…';
    }

    return cleaned;
  }
}