import { Component, OnInit } from '@angular/core';
import { Logger } from '../../../../core/services';
import { AuthService } from '../../providers/auth.service';
import { FormGroup, IonarFormBuilder } from '@ionar/form';

import { slideInUp } from '@ionar/animations';
import Joi from '@ionar/joi';


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
        schema: Joi.string().email().required()

      },
      password: {
        component: 'input',
        props: {
          type: 'password',
          label: 'Password'
        },
        schema: Joi.string().required().min(6)
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
