import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

import { FormService } from '../providers/form.service';

import { ControlConfig } from '../models/ControlConfig';
import { AbstractControl } from '../models/AbstractControl';
import { FormGroup } from '@ionar/form';
import { untilDestroyed } from '@ionar/utility';


@Component({
  selector: 'field',
  template: `
      <ng-container *ngIf="_control">
          <ng-container
                  dynamic_field
                  [controlConfig]="_control._controlConfig"
                  [events]="{
                            change: onChanged,
                            blur: onTouched,
                            enter: onEntered
                    }"

                  [invalid]="invalid"
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
export class FieldComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name: string;
  _control: AbstractControl;
  _formGr: FormGroup;

  invalid: Boolean = false;

  // @Input() name
  //
  //
  // submitted: Boolean = false;
  // config: AuroraForm;
  // viewInit = new Subject();


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.parseContext();

    this._formGr.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
      this.parseContext();
    });
  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    this.cd.detach();
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onChanged = e => {
    this._formSvs.getControl(this.name).setValue(e);

    console.log(this._formSvs.getControl(this.name));
  };

  onTouched = () => {
    this._formSvs.getControl(this.name).markAsTouched();
    this._control = this._formSvs.getControl(this.name);

  };

  onEntered = () => {
    // this.formSvs._onEntered()
    // if (this.name === 'password') this.focus = true;
  };

  parseContext = () => {
    this._formGr = this._formSvs.getFormGroup();
    this._control = this._formGr.get(this.name);
    this.invalid = this._control.invalid && (this._control.dirty || this._control.touched || this._formGr.submitted);
    this.cd.markForCheck()
  };
}
