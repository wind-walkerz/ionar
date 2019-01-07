import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  OnInit, Optional, SkipSelf, TemplateRef
} from '@angular/core';

import { FormControlComponent } from '../form-control.component';


@Component({
  selector: 'form-field',
  template: `
      <ng-container *ngIf="_parent.control">
          <ng-container
                  dynamic_field
                  [name]="_parent.name"
                  [control]="_parent.control"
                  [root]="_parent.root"
                  [events]="{
                    change: onChanged,
                    blur: onTouched,
                    enter: onEntered
              }"
                  [template]="template"
          >
          </ng-container>
      </ng-container>

  `,

  styles: [`
      :host {
          display: flex;
          width: 100%;
          height: 100%;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit, AfterViewInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  /**
   * @description
   * The parent  for the components
   *
   * @internal
   */
  _parent: FormControlComponent | null = null;

  get template(): TemplateRef<any> {
    console.log(this._parent.controlTemplateDir)
    return this._parent.controlTemplateDir && this._parent.controlTemplateDir.templateRef;
  };

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  constructor(
    private cd: ChangeDetectorRef,
    @Optional() @Host() @SkipSelf()  parent: FormControlComponent
  ) {

    this._parent = parent;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onChanged = e => {
    this._parent.control.setValue(e);
  };

  onTouched = () => {
    this._parent.control.markAsTouched();
  };

  onEntered = () => {
    // this.formSvs._onEntered()
    // if (this.name === 'password') this.focus = true;
  };


}
