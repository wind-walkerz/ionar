import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { ControlConfig } from '../models/ControlConfig';
import { FormGroup } from '@ionar/form';
import { untilDestroyed } from '@ionar/utility';
import _ from 'lodash';


@Component({
  selector: 'form-label',
  template: `
      {{_controlConfig?.label || ''}}
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
  _formGr: FormGroup;
  _controlConfig: ControlConfig;
  _control: FormControl;

  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.parseContext();
  }

  ngOnDestroy(): void {
  }

  parseContext = () => {
    this._formGr = this._formSvs.getFormGroup();

    this._control = this._formGr.get(this.name);

    this._controlConfig = this._control.configuration;

    this.cd.markForCheck();
  };
}
