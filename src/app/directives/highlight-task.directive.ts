import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightTask]'
})
export class HighlightTaskDirective {
  constructor(private el: ElementRef) {}

  @Input() set appHighlightTask(completed: boolean) {
    if (completed) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = 'gray';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = 'black';
    }
  }
}