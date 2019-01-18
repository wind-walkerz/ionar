import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, IonarFormBuilder, JoiError } from '@ionar/form';
import { HttpClient } from '@angular/common/http';
import Joi from '@ionar/joi';
import { isFormArray, isFormControl, isFormGroup } from '../../../../libs/form/src/core/utils/helpers';
import _ from 'lodash';

// import * as Joi from './main.js'

@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private _fb: IonarFormBuilder,
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {

    this.formGroup = this._fb.group({
      password: {
        component: 'input',
        props: {
          value: '123456'
        },
        schema: Joi.string().min(6).required()
      },
      confirm_password: {
        component: 'input',
        props: {
          value: '123456'
        },
        schema: Joi.valid(Joi.ref('password')).error(() => 'Password not match!')
      }
    }, {});


  }


  onSubmit = form_data => {
    console.log(form_data);
  };

  onReset = () => {
    this.formGroup.reset({
      email: 'sdfkljsadklf'
    });

  };

  onClear = () => {
    this.formGroup.clear();

  };

  onLog = () => {
    console.log(this.formGroup);
  };

  toggleReadMode = () => {
    this.formGroup.updateOptions({
      readonly: !this.formGroup.options.readonly
    });
  };


  appendServerError = () => {
    this.formGroup.setErrors(<JoiError>{
      type: 'string.notMatch',
      message: 'Password not match!',
      name: 'great_grand_child_1'
    });
  };

}




