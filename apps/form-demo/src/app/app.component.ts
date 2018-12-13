import { Component } from '@angular/core';
import { FormControl, FormGroup, IonarFormBuilder, ValidationErrors } from '@ionar/form';
import { Observable, timer } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { untilDestroyed } from '@aurora-ngx/ui';
import { environment } from '../../../homeey/src/environments/environment';
import { catchError, debounce, map, switchMap } from 'rxjs/operators';


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
      // {
      //   name: 'username',
      //   type: 'input',
      //   props: {
      //     label: 'Username'
      //   },
      //   validators: {
      //     required: true,
      //     stringLength: {
      //       min: 10,
      //       max: 15
      //     }
      //   }
      // },
      // {
      //   name: 'email',
      //   type: 'input',
      //   props: {
      //     label: 'Email',
      //     value: ''
      //   },
      //   validators: {
      //     required: true,
      //     email: true
      //   },
      //   asyncValidator: [this.validateUserExist]
      // },
      // {
      //   name: 'password',
      //   type: 'input',
      //   props: {
      //     label: 'Password',
      //     value: '',
      //     type: 'password'
      //   },
      //   validators: {
      //     required: true,
      //     stringLength: {
      //       min: 6
      //     }
      //   }
      // },
      // {
      //   name: 'confirm_password',
      //   type: 'input',
      //   props: {
      //     label: 'Confirm Password',
      //     value: '',
      //     type: 'password'
      //   },
      //   state: {
      //     exclude: true
      //   },
      //   validators: {
      //     required: true,
      //     equalTo: 'password'
      //   }
      // }
    ]);
  }




  onSubmit = form_data => {
    console.log(form_data);
  };
}




