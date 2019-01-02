import {
  ComponentRef,
  Directive, ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import _ from 'lodash';
import { ValidatorFn } from '@ionar/form';


@Directive({
  selector: '[spread]'
})
export class SpreadDirective implements OnInit, OnChanges {

  @Input('spread') private _context: Object;

  constructor(
    private _vcRef: ViewContainerRef,
    private _renderer: Renderer2,
    private _elRef: ElementRef
  ) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this._vcRef['_data'].componentView) {
      _.forOwn(this._context, (value: any, key: string) => {
        if (!this._elRef.nativeElement[key])

          (value instanceof Function)
            ? this._renderer.listen(this._elRef.nativeElement, key, value)
            : this._renderer.setAttribute(this._elRef.nativeElement, key, value);

      });
    }

  }

}
