import { AfterViewInit, Directive, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[removeHostElement]'
})
export class RemoveHostElementDirective implements AfterViewInit {

  constructor(
    private _vcRef: ViewContainerRef
  ) {
  }

  ngAfterViewInit(): void {
    const nativeElement: HTMLElement = this._vcRef.element.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;


    if (parentElement) {

      // move all children out of the element
      while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
      }
      // remove the empty element(the host)
      parentElement.removeChild(nativeElement);
    }
  }

}
