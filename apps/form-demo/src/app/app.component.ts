import { Component } from '@angular/core';
import { FormControl, FormGroup, IonarFormBuilder, ValidationErrors } from '@ionar/form';
import { Observable, timer } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { untilDestroyed } from '@aurora-ngx/ui';
import { environment } from '../../../homeey/src/environments/environment';
import { catchError, debounce, map } from 'rxjs/operators';


@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected formGroup: FormGroup;

  constructor(
    private _fb: IonarFormBuilder,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this._fb.group([
      {
        name: 'username',
        type: 'input',
        props: {
          label: 'Username',
          value: ''
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
        validators: {},
        asyncValidator: {
          checkIfUserExists: this.validateUserExist
        }
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
        validators: {
          required: true,
          equalTo: 'password'
        }
      }
    ]);
  }


  validateUserExist = (c: FormControl): Observable<ValidationErrors | null> => {
    const params = new HttpParams().set('email', 'hieuht0812@gmail.com');
    return this.http.get('http://admin.homeey.acc-svrs.com/api/v1/auth/check-email-exists', { params }).pipe(
      map(res => {
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



