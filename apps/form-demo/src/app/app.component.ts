import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, IonarFormBuilder } from '@ionar/form';
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


    const object = {
      string: true,
      email: true
    };

    const testObject = {
      email: 'm',
      username: 'm',
      password: []
    };
    // let lo = Joi;
    //
    // const base = new Function('', "lo['string']()['email']()")
    // console.log(base());
    // console.log(Joi.string().email() === base['email']());
    //
    // const recursive = (fn: Function, name) => {
    //   return fn[name]();
    // };
    //
    //
    // _.forOwn(object, (value, key) => {
    //   lo = recursive(lo, key);
    // });

    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      username: Joi.string().email(),
      password: Joi.object().keys({
        pass_1: Joi.string().email().required(),
        pass_2: Joi.string().email().required(),
        pass_3: Joi.object().keys({
          grand_pass_1: Joi.string().email().required(),
          grand_pass_2: Joi.string().email().required()
        })
      })
    });

    // console.log(schema);

    // _.each(schema['_inner'].children, child => {
    //   // const index = _.findIndex(schema['_inner'], ['key', 'email']);
    //   // if (index > 0) {
    //   if (child.key === 'email') {
    //     // child.schema = Joi.string();
    //   }
    //   // schema['_inner'].children.splice(index, 1, Joi.string());
    //   // testObject1['_tests'].splice(index, 1, test);
    //   // }
    //
    // });

    // console.log(schema);
    //
    //
    // console.log(Joi.string().email().min(10));
    //
    // // console.log(Joi.validate('2342', Joi.string().email(), { abortEarly: false }));
    //
    // console.log(Joi.string().min(20));
    //
    // // console.log(Joi.validate('2342', Joi.string().min(20), { abortEarly: false }));
    //
    //
    // const testObject1 = Joi.string().email().min(10);
    //
    // const testObject2 = Joi.string().min(30);
    //
    //
    // console.log(testObject1);
    //
    // // test['_tests'] = _.concat(test['_tests'], (Joi.string().min(20))['_tests']);
    //
    // console.log(Joi.validate('sdfs', testObject1, { abortEarly: false }));

    this.formGroup = this._fb.group({
      email: {
        component: 'input',
        props: {
          label: 'sdlkfjslk',
          title: 'upload'
        },
        schema: Joi.string().email().required(),

        options: {
          // hidden: true,
          // hideLabel: true
        }

      },
      // username: this._fb.array([
      //   {
      //     component: 'input'
      //   },
      //   {
      //     component: 'input'
      //   }
      // ]),
      password: this._fb.group({
        pass_1: {
          component: 'input',
          schema: Joi.string().email().required()
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
    }, {
      // schema: schema
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




