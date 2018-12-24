import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { ControlConfig } from '../models/ControlConfig';
import { FormGroup } from '../models/FormGroup';
import _ from 'lodash';
import { ControlComponent } from './control.component';


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
export class LabelComponent implements OnInit, AfterViewChecked, OnDestroy {
  formGroup: FormGroup;
  controlConfig: ControlConfig;
  control: FormControl;

  label: any;

  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef,
    @Host() private _parent: ControlComponent
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewChecked(): void {
    if (this._parent.formGroup) {
      this.formGroup = this._parent.formGroup;

      this.parseContext();
    }
  }

  ngOnDestroy(): void {
    this.cd.detach();
  }

  parseContext = () => {

    this.control = this.formGroup.get(this._parent.name);

    this.controlConfig = <ControlConfig>this.control.configuration;

    this.label = this.controlConfig.label || _.startCase(this._parent.name);

    this.cd.detectChanges();
  };
}
