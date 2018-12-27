import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormService } from '../providers/form.service';

import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { FormControl } from '../models/FormControl';
import { FormGroup } from '../models/FormGroup';
import { ControlComponent } from './control.component';
import { Subscription } from 'rxjs';
import { AbstractControl } from '../models/AbstractControl';


@Component({
  selector: 'form-feedback',
  template: `
      <ng-container *ngIf="show_feedback">
          <ng-container *ngIf="invalid">
              <ng-container *ngFor="let err of error_list">
                  <div class="feedback">{{err}}</div>
              </ng-container>

          </ng-container>
      </ng-container>
  `,
  //language=SCSS
  styles: [`
      :host {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
          color: #f5222d;
          font-size: 1.2rem;
          margin-top: 0.5rem;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent implements OnInit, OnChanges, AfterViewChecked, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  _control: AbstractControl;
  formGroup: FormGroup;

  invalid: Boolean = false;
  error_list: string[] | null;
  show_feedback: Boolean = true;


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

  }

  ngAfterViewChecked(): void {
    if (this._parent.formGroup && this._control) {
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


  generate_feedback = (validator, value) => {

    // const feedback = this._control.validateOptions.feedback

    const feedback = {};

    // console.log(_.values(this._control.options.validators))


    // _.mapValues(this._control.options.validators, (value: any) => {
    //   feedback[validator] = _.isString(value) ? value : value.message || null;
    // });


    if (!validator) return null;

    switch (validator) {
      case 'required':
        if (this._parent.name === 'confirm_password') {
          return feedback['required'] || `You need to confirm password`;
        }
        return feedback['required'] || `${_.startCase(this._parent.name)}  is required`;
      case 'agreement':
        return feedback['agreement'] || `You must agree to the terms and conditions before continuing!`;
      case 'email' :
        return feedback['email'] || `Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'`;
      case 'email_existed':
        return feedback['email_existed'] || `${_.startCase(this._parent.name)} is existed! Please use another one`;

      case 'stringLength' :

        return value.minLength ? `${_.startCase(this._parent.name)} cannot be shorter than ${value.minLength}` : `${_.startCase(this._parent.name)} cannot be longer than ${value.maxLength}`;

      case 'equalTo' :

        return `Confirm password is not equal to password`;

      default:
        return value;
    }


  };

  ngOnChanges(changes): void {

  }


  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  parseContext = () => {
    this._control = this.formGroup.get(this._parent.name);
    this.invalid = this._control.invalid && (this._control.dirty || this._control.touched || this.formGroup.submitted);
    this.error_list = _.map(this._control.errors, (value, key) => this.generate_feedback(key, value));
    this.cd.detectChanges();
  };

}
