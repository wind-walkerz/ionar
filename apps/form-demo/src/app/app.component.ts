import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, IonarFormBuilder } from '@ionar/form';
import { HttpClient } from '@angular/common/http';
import Joi from 'joi-browser';
import { isFormArray, isFormControl, isFormGroup } from '../../../../libs/form/src/core/utils/helpers';
import _ from 'lodash';

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


    const object = {
      string: true,
      email: true
    };

    const testObject = {
      email: 'm'
    }
    let lo = Joi;

    // const base = new Function('', "lo['string']()['email']()")
    // console.log(base());
    // console.log(Joi.string().email() === base['email']());

    const recursive = (fn: Function, name) => {
      return fn[name]();
    };


    _.forOwn(object, (value, key) => {
      lo = recursive(lo, key);
    });

    const schema = Joi.object().keys({
      email: Joi.string().email()
      // email: lo
    })

    console.log(Joi.validate(testObject, schema));

    this.formGroup = this._fb.group({
      email: {
        component: 'input',
        props: {
          label: 'sdlkfjslk',
          title: 'upload'
        },
        validators: {
          // required: true
        },
        options: {
          // hidden: true,
          // hideLabel: true
        }

      },
      username: this._fb.array([
        {
          component: 'input'
        },
        {
          component: 'input'
        }
      ]),
      password: this._fb.group({
        pass_1: {
          component: 'input'
        },
        pass_2: {
          component: 'input'
        },
        pass_3: this._fb.group({
          grand_pass_1: {
            component: 'input'
          },
          grand_pass_2: {
            component: 'input'
          }
        })
      })
    });


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
}




