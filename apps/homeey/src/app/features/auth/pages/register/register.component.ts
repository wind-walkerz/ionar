import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { ApiService, Logger } from '../../../../core/services';
import { finalize, map } from 'rxjs/operators';

import { FormControl, FormGroup, IonarFormBuilder, JoiError } from '@ionar/form';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { untilDestroyed } from '@ionar/utility';
import { IonarLoadingService } from '@ionar/ui';
import Joi from '@ionar/joi';

const log = new Logger('RegisterComponent');

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;

  constructor(
    private _apiSvs: ApiService,
    private authSvs: AuthService,
    private _fb: IonarFormBuilder,
    private _loading: IonarLoadingService
  ) {

  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      username: {
        component: 'input',
        props: {
          label: 'Username'
        },
        schema: Joi.string().min(10).max(15).required()
      },
      email: {
        component: 'input',
        props: {
          label: 'Email',
          value: ''
        },
        schema: Joi.string().email().required(),
        asyncValidator: [this.validateUserExist]
      },
      password: {

        component: 'input',

        props: {
          label: 'Password',
          value: '',
          type: 'password'
        },
        schema: Joi.string().min(6).required()
      },
      confirm_password: {

        component: 'input',

        props: {
          label: 'Confirm Password',
          value: '',

          type: 'password'
        },
        schema: Joi.string().required(),
        options:  {
          excluded: true
        }
      },
      slug: {
        component: 'input',

        props: {
          value: 'client'

        },
        options: {
          hidden: true
        }
      }
    });
  }

  ngOnDestroy(): void {

  }

  onRegister = formValue => {
    this._loading.enabled();
    console.log(formValue);
    this.authSvs.register(formValue);
  };


  validateUserExist = (c: FormControl): Observable<JoiError | null> => {
    const params = new HttpParams().set('email', c.value);
    this._loading.disabled();
    return this._apiSvs.get('/auth/check-email-exists', params).pipe(
      untilDestroyed(this),
      map((res: any) => {
        console.log(res);
        // if (res.data.status_code === 401) {
        //   return {
        //     'checkIfUserExists': res.data.message
        //   };
        // }
        return null;
      }),
      finalize(() => {

      })
    );


  };
}
