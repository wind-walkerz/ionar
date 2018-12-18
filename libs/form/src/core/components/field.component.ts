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
  SimpleChanges
} from '@angular/core';

import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { FormGroup } from '../models/FormGroup';
import { untilDestroyed } from '@ionar/utility';


@Component({
  selector: 'form-field',
  template: `
      <ng-container *ngIf="_control">
          <ng-container
                  dynamic_field
                  [controlConfig]="_control.configuration"
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
export class FieldComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name: string;
  _control: FormControl;
  @Input() formGroup: FormGroup;

  invalid: Boolean = false;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.parseContext();
    this._control.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
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
    this._control = this.formGroup.get(this.name);
    this.invalid = this._control.invalid && (this._control.dirty || this._control.touched || this.formGroup.submitted);
    this.cd.detectChanges();

  };

}
