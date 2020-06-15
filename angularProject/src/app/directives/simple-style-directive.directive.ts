import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.appSimpleStyleDirective',
})
export class SimpleStyleDirectiveDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'hotpink';
  }
}
