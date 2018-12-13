import { Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '../models/FormGroup';

@Directive({
  selector: '[submitForm]'
})
export class SubmitDirective implements OnInit, OnDestroy, OnChanges {

  @Input('submitForm') private _formGr: FormGroup;
  @Input() disabled: Boolean = false;

  @HostListener('click', ['$event'])
  onClick = (e: MouseEvent) => {
    if (!this.disabled) {
      this._formGr.submit();
    }

  };

  constructor(private _elRef: ElementRef) {

  }


  ngOnInit(): void {
    // console.log(this._formGr)
  }

  ngOnChanges() {
    // console.log(this._formGr)
  }

  ngOnDestroy() {

  }


}
