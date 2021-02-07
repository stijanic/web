import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color = 'yellow';

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter')
  addHighlight() {
    this.element.nativeElement.style.backgroundColor = this.color ? this.color : 'yellow';
  }

  @HostListener('mouseleave')
  removeHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
