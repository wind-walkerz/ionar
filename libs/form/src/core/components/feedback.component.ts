import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormService } from '../providers/form.service';

import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { FormControl } from '../models/FormControl';
import { FormGroup } from '../models/FormGroup';
import { ValidatorType } from '../models/Validator';

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
export class FeedbackComponent implements OnInit, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() name: string;

  _control: FormControl;
  @Input() formGroup: FormGroup;

  invalid: Boolean = false;
  error_list: string[] | null;
  show_feedback: Boolean = true;

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


  generate_feedback = (validator, value) => {

    // const feedback = this._control.validateOptions.feedback

    const feedback = {};

    // console.log(_.values(this._control.configuration.validators))


    // _.mapValues(this._control.configuration.validators, (value: any) => {
    //   feedback[validator] = _.isString(value) ? value : value.message || null;
    // });


    if (!validator) return null;

    switch (validator) {
      case 'required':
        if (this.name === 'confirm_password') {
          return feedback['required'] || `You need to confirm password`;
        }
        return feedback['required'] || `${_.startCase(this.name)}  is required`;
      case 'agreement':
        return feedback['agreement'] || `You must agree to the terms and conditions before continuing!`;
      case 'email' :
        return feedback['email'] || `Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'`;
      case 'email_existed':
        return feedback['email_existed'] || `${_.startCase(this.name)} is existed! Please use another one`;

      case 'stringLength' :

        return value.minLength ? `${_.startCase(this.name)} cannot be shorter than ${value.minLength}` : `${_.startCase(this.name)} cannot be longer than ${value.maxLength}`;

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
    // this.formGroup = this._formSvs.getFormGroup();

    this._control = this.formGroup.get(this.name);
    this.invalid = this._control.invalid && (this._control.dirty || this._control.touched || this.formGroup.submitted);
    this.error_list = _.map(this._control.errors, (value, key) => this.generate_feedback(key, value));
    this.cd.detectChanges();
  };

}
