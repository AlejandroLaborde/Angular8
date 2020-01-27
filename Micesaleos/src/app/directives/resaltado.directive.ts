import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private elementRef : ElementRef) {
    console.log(this.elementRef);
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') 
  control(){
    this.elementRef.nativeElement.style.background=this.nuevoColor;
  }

  @HostListener('mouseleave') 
  salir(){
    this.elementRef.nativeElement.style.background=null;
  }

}
