import {
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  OnChanges,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[square]'
})
export class SquareDirective implements AfterViewChecked {

  @HostListener('window:resize')
  onResize() {
    this.matchHeight(this._elRef.nativeElement);
  }

  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer2
  ) {
  }


  ngAfterViewChecked(): void {
    this.matchHeight(this._elRef.nativeElement);
  }


  matchHeight = (parent: HTMLElement) => {
    if (!parent) return;

    setTimeout(() => {
      this._renderer.setStyle(this._elRef.nativeElement, 'height', `${this._elRef.nativeElement.offsetWidth}px`);
    }, 0);
  };

}
