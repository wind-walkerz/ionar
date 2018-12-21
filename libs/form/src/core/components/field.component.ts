import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, TemplateRef
} from '@angular/core';

import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { FormGroup } from '../models/FormGroup';
import { untilDestroyed } from '@ionar/utility';
import { ControlConfig } from '../models/ControlConfig';


@Component({
  selector: 'form-field',
  template: `
      <ng-container *ngIf="control&&controlConfig">
          <ng-container
                  dynamic_field
                  [controlConfig]="controlConfig"

                  [events]="{
                            change: onChanged,
                            blur: onTouched,
                            enter: onEntered
                    }"
                  [template]="template"

                  [value]="control.value"
                  [options]="controlConfig.options"
                  [invalid]="invalid"
                  [readonly]="formGroup.readonly"
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
export class FieldComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name: string;
  control: FormControl;
  controlConfig: ControlConfig;
  @Input() formGroup: FormGroup;
  @Input() template: TemplateRef<any>;

  invalid: Boolean = false;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.parseContext();

    this.formGroup.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
      this.parseContext();
    });

    this.formGroup.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
      this.parseContext();
    });
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    // this.cd.detach();
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onChanged = e => {
    this._formSvs.getControl(this.name).setValue(e);
  };

  onTouched = () => {
    this._formSvs.getControl(this.name).markAsTouched();
  };

  onEntered = () => {
    // this.formSvs._onEntered()
    // if (this.name === 'password') this.focus = true;
  };

  parseContext = () => {
    this.control = this.formGroup.get(this.name);

    this.controlConfig = <ControlConfig>this.control.configuration;

    this.invalid = this.control.invalid && (this.control.dirty || this.control.touched || this.formGroup.submitted);
    this.cd.detectChanges();

  };

}
