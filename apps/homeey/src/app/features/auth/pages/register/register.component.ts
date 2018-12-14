import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { ApiService, Logger } from '../../../../core/services';
import { AbstractControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap, takeWhile, tap } from 'rxjs/operators';
import _ from 'lodash';
import { ControlConfig, FormControl, FormGroup, IonarFormBuilder, ValidationErrors } from '@ionar/form';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { untilDestroyed } from '@ionar/utility';


const log = new Logger('RegisterComponent');

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  private _formConfigs: ControlConfig[] = [];


  constructor(
    private _apiSvs: ApiService,
    private authSvs: AuthService,
    private _fb: IonarFormBuilder
  ) {

  }

  ngOnInit() {

    this._formConfigs = [
      {
        name: 'username',
        type: 'input',
        props: {
          label: 'Username'
        },
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
        props: {
          label: 'Email',
          value: ''
        },
        validators: {
          required: true,
          email: true
        },
        asyncValidator: [this.validateUserExist]
      },
      {
        name: 'password',
        type: 'input',
        props: {
          label: 'Password',
          value: '',
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
        props: {
          label: 'Confirm Password',
          value: '',
          type: 'password'
        },
        state: 'exclude',
        validators: {
          required: true,
          equalTo: 'password'
        }
      }
    ];

    this.formGroup = this._fb.group(this._formConfigs);
  }

  onRegister = form_data => {
    this.authSvs.register(JSON.stringify(_.assign(form_data, {}, { slug: 'client' })));
  };

  validateUserExist = (c: FormControl): Observable<ValidationErrors | null> => {
    const params = new HttpParams().set('email', c.value);
    return this._apiSvs.get('/auth/check-email-exists', params).pipe(
      untilDestroyed(this),
      map((res: { status_code: any, message: any }) => {
        if (res.status_code === 401) {
          return {
            'checkIfUserExists': res.message
          };
        }
        return null;
      })
    )
      ;

  };
}
