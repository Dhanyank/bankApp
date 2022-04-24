import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighight]'
})
export class HighightDirective {

  constructor(private el:ElementRef) { 
    //console.log(el);
    el.nativeElement.style.backgroundColor="blue"
  }

}
