import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  OnChanges,
  OnDestroy,
  OnInit, Optional, SimpleChanges, SkipSelf
} from '@angular/core';

import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { FormControl } from '../../models/FormControl';
import { FormControlComponent } from '../form-control.component';


@Component({
  selector: 'form-feedback',
  template: `

      <ng-container *ngIf="invalid">
          <ng-container *ngFor="let err of error_list">
              <div class="feedback">{{err}}</div>
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

  /**
   * @description
   * The parent  for the components
   *
   * @internal
   */
  _parent: FormControlComponent | null = null;

  private get _control(): FormControl {
    return this._parent.control;
  };

  public get invalid(): Boolean {
    return this._control.invalid && (this._control.dirty || this._control.touched || this._parent.root.submitted);
  };

  public get error_list(): string[] | null {
    return _.map(this._control.errors, (value, key) => this.generate_feedback(key, value));
  };


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private cd: ChangeDetectorRef,
    @Optional() @Host() @SkipSelf()  parent: FormControlComponent
  ) {
    this._parent = parent;
  }

  ngOnInit() {

    this._parent.root.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
      this.cd.markForCheck();
    });

    this._parent.root.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
      this.cd.markForCheck();
    });
  }


  generate_feedback = (validator, value) => {

    const feedback = {};

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

  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///


}
