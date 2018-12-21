import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, Directive, Input,
  OnInit, TemplateRef, ViewContainerRef
} from '@angular/core';


@Directive({
  selector: '[fieldTemplate]'
})
export class FieldTemplateDirective implements OnInit, AfterViewInit {

  @Input() name: any = '';

  constructor(
    private _vcRef: ViewContainerRef,
    private _tplRef: TemplateRef<any>
  ) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this._vcRef.clear();
  }
}
