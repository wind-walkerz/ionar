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

import { FormGroup } from '../models/FormGroup';
import _ from 'lodash';
import { ControlComponent } from './control.component';

import { AbstractControl } from '../models/AbstractControl';


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
  control: AbstractControl;

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


    this.label = this.control.state.label || _.startCase(this._parent.name);

    this.cd.detectChanges();
  };
}
