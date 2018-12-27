import { Component, OnInit } from '@angular/core';
import { Logger } from '../../../../core/services';
import { AuthService } from '../../providers/auth.service';
import _ from 'lodash';
import { FormGroup, IonarFormBuilder } from '@ionar/form';

import { slideInLeft, slideInUp } from '@ionar/animations';


const log = new Logger('LoginComponent');


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [slideInUp]
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private authSvs: AuthService,
    private _fb: IonarFormBuilder
  ) {
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      email: {
        component: 'input',
        props: { label: 'Email' },
        validators: {
          required: true,
          email: true
        }

      },
      password: {
        component: 'input',
        props: {
          type: 'password',
          label: 'Password'
        },
        validators: {
          required: true,
          stringLength: {
            min: 6
          }
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


  onLogin = form_data => {
    this.authSvs.login(form_data);
  };


}
