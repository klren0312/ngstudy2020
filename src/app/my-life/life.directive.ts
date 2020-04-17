import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLife]'
})
export class LifeDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow'
  }

}
