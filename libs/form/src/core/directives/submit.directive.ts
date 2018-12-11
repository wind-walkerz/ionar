import { Directive, HostListener, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '../models/FormGroup';

@Directive({
  selector: '[submit]'
})
export class SubmitDirective implements OnInit, OnDestroy, OnChanges {

  @Input('submit') private _formGr: FormGroup;

  @HostListener('click')
  onClick = () => {
    this._formGr.submit();
  };


  ngOnInit(): void {

  }

  ngOnChanges() {

  }

  ngOnDestroy() {

  }


}
