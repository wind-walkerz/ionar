import { Directive, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';


@Directive({
  selector: '[submit_form]'
})
export class SubmitDirective implements OnInit, OnDestroy, OnChanges {

  @HostListener('click')
  onClick = () => {
    // this.formSvs._submit();
  };

  // constructor(private formSvs:) {
  // }

  ngOnInit(): void {

  }

  ngOnChanges() {

  }

  ngOnDestroy() {

  }


}
