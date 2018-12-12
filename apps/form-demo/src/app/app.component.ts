import { Component } from '@angular/core';
import { FormControl, FormGroup, IonarFormBuilder } from '@ionar/form';

@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected formGroup: FormGroup;

  constructor(private _fb: IonarFormBuilder) {
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
          email: true,
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
          required: true
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
}
