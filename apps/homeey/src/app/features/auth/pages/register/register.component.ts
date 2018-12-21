import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { ApiService, Logger } from '../../../../core/services';
import { AbstractControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, finalize, map, switchMap, takeWhile, tap } from 'rxjs/operators';
import _ from 'lodash';
import { ControlConfig, FormControl, FormGroup, IonarFormBuilder, ValidationErrors } from '@ionar/form';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { untilDestroyed } from '@ionar/utility';
import { IonarLoadingService } from '@ionar/ui';


const log = new Logger('RegisterComponent');

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;

  private _formConfigs: ControlConfig[] = [];


  constructor(
    private _apiSvs: ApiService,
    private authSvs: AuthService,
    private _fb: IonarFormBuilder,
    private _loading: IonarLoadingService
  ) {

  }

  ngOnInit() {


    this._formConfigs = [
      {
        name: 'username',
        type: 'input',
        label: 'Username',
        validators: {
          required: true,
          stringLength: {
            min: 10,
            max: 15
          }
        }
      },
      {
        name: 'email',
        type: 'input',
        label: 'Email',
        value: '',
        validators: {
          required: true,
          email: true
        },
        asyncValidator: [this.validateUserExist]
      },
      {
        name: 'password',
        type: 'input',
        label: 'Password',
        value: '',
        props: {
          type: 'password'
        },
        validators: {
          required: true,
          stringLength: {
            min: 6
          }
        }
      },
      {
        name: 'confirm_password',
        type: 'input',
        label: 'Confirm Password',
        value: '',
        props: {
          exclude: true,
          type: 'password'
        },

        validators: {
          required: true,
          equalTo: 'password'
        }
      },
      {
        name: 'slug',
        type: 'input',
        value: 'client',
        props: {
          hidden: true
        }
      }
    ];

    this.formGroup = this._fb.group(this._formConfigs);
  }

  ngOnDestroy(): void {

  }

  onRegister = formValue => {
    this._loading.enabled();
    console.log(formValue);
    this.authSvs.register(formValue);
  };


  validateUserExist = (c: FormControl): Observable<ValidationErrors | null> => {
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
