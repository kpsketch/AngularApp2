import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightTask]',
  standalone: true
})
export class HighlightTaskDirective {
  // true = highlight (favorites)
  @Input('appHighlightTask') isHighlighted: boolean = false;

  @HostBinding('style.background') get bg() {
    return this.isHighlighted ? '#fff3c4' : 'transparent';
  }

  @HostBinding('style.border') get border() {
    return this.isHighlighted ? '1px solid #f2c94c' : '1px solid #ddd';
  }

  @HostBinding('style.borderRadius') radius = '10px';
  @HostBinding('style.padding') padding = '8px 10px';
}