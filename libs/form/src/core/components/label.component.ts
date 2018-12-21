import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { ControlConfig } from '../models/ControlConfig';
import { FormGroup } from '../models/FormGroup';
import { untilDestroyed } from '@ionar/utility';
import _ from 'lodash';


@Component({
  selector: 'form-label',
  template: `
      {{label}}
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
  @Input() formGroup: FormGroup;
  _controlConfig: ControlConfig;
  _control: FormControl;

  label: any;

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

    this._control = this.formGroup.get(this.name);

    this._controlConfig = <ControlConfig>this._control.configuration;

    this.label = this._controlConfig.label || _.startCase(this.name);

    this.cd.markForCheck();
  };
}
