import {
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener, Input,
  OnChanges,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[scroll-down]'
})
export class ScrollDownDirective implements OnInit, AfterViewChecked {

  @Input() active: any


  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer2
  ) {
  }

ngOnInit(): void {
  this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight
}

ngAfterViewChecked(): void {
  this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight
}

}
