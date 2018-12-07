import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../providers/form.service';

import { ControlConfig } from '../models/ControlConfig';
import { AbstractControl } from '../models/AbstractControl';


@Component({
  selector: 'label',
  template: `
      {{_controlConfig?.props.label || ''}}
  `,
  styles: [`
      :host {
          display: flex;
          align-items: center;
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.6rem;
          font-weight: 700;
          position: relative
      }
  `]
})
export class LabelComponent implements OnInit, OnDestroy {
  @Input() name: string;
  _controlConfig: ControlConfig;
  protected _control: AbstractControl;

  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this._controlConfig = this._formSvs.getFormGroup().get(this.name)._controlConfig;

  }

  ngOnDestroy(): void {
  }
}
