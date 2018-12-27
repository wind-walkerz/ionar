import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, TemplateRef
} from '@angular/core';

import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { FormGroup } from '../models/FormGroup';
import { ControlComponent } from './control.component';
import { Subscription } from 'rxjs';
import { untilDestroyed } from '@ionar/utility';

import { AbstractControl } from '../models/AbstractControl';


@Component({
  selector: 'form-field',
  template: `
      <ng-container *ngIf="control">
          <ng-container
                  dynamic_field
                  [control]="control"
                  [events]="{
                            change: onChanged,
                            blur: onTouched,
                            enter: onEntered
                    }"
                  [name]="name"
                  [invalid]="invalid"
                  [options]="control?.options"
          >
          </ng-container>
      </ng-container>
  `,
  // formGroup.readonly || control.options.readonly
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

  formGroup: FormGroup;
  control: AbstractControl;
  name: string;
  invalid: Boolean = false;
  template: TemplateRef<any>;

  private _statusSubscription: Subscription;
  private _submitSubscription: Subscription;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef,
    @Host() private _parent: ControlComponent
  ) {
  }

  ngOnInit() {
    // this.parseContext();
    //

  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {
    if (this._parent.formGroup) {
      this.formGroup = this._parent.formGroup;

      if (this._statusSubscription) this._statusSubscription.unsubscribe();
      if (this._submitSubscription) this._submitSubscription.unsubscribe();

      this._statusSubscription = this.formGroup.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
        this.parseContext();
      });

      this._submitSubscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
        this.parseContext();
      });

      this.parseContext();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    this.cd.detach();
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onChanged = e => {
    this._formSvs.getControl(this._parent.name).setValue(e);
  };

  onTouched = () => {
    this._formSvs.getControl(this._parent.name).markAsTouched();
  };

  onEntered = () => {
    // this.formSvs._onEntered()
    // if (this.name === 'password') this.focus = true;
  };

  parseContext = () => {
    this.name = this._parent.name;
    this.control = this.formGroup.get(this.name);

    if (this.control) {

      this.invalid = this.control.invalid && (this.control.dirty || this.control.touched || this.formGroup.submitted),
        this.template = this._parent.fieldTemplate;

    }
    this.cd.detectChanges();

  };

}
