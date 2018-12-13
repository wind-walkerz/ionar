import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { ControlConfig } from '../models/ControlConfig';


@Component({
  selector: 'form-label',
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
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnInit, OnDestroy {
  @Input() name: string;
  _controlConfig: ControlConfig;
  _control: FormControl;

  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this._control = this._formSvs.getFormGroup().get(this.name);

    this._controlConfig = this._control.configuration;

  }

  ngOnDestroy(): void {
  }
}
