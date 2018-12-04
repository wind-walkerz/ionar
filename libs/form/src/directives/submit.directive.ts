import { Directive, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IonarFormService } from '../providers/form.service';


@Directive({
  selector: '[submit]'
})
export class SubmitDirective implements OnInit, OnDestroy, OnChanges {

  @HostListener('click')
  onClick = () => {
    // this._formSvs._submit();
  };

  constructor(private _formSvs: IonarFormService) {
  }

  ngOnInit(): void {

  }

  ngOnChanges() {

  }

  ngOnDestroy() {

  }


}
