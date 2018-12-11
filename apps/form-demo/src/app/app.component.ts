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
    this.formGroup = this._fb.group({
      username: new FormControl({
        type: 'input',
        props: {
          label: 'Email',
          value: ''
        },
        validators: {
          required: true,
          email: true
        }
      }),
      email: new FormControl({
        type: 'input',
        props: {
          label: 'Username',
          value: ''
        },
        validators: {
          required: true
        }
      }),
      password: new FormControl({
        type: 'input',
        props: {
          label: 'Password',
          value: '',
          type: 'password'
        },
        validators: {
          required: true
        }
      }),
      confirm_password: new FormControl({
        type: 'input',
        props: {
          label: 'Password',
          value: '',
          type: 'password'
        },
        validators: {
          required: true
        }
      })
    });

    // this.formGroup.validate({
    //   icons: {
    //     valid: ``,
    //     invalid: ``,
    //     validating: ``
    //   }
    // });


    // this._formSvs.validateOptions({
    //   icons: {
    //     error: 'l'
    //   },
    //   feedback: {
    //     error: 'sd'
    //   }
    // });
  }
}
