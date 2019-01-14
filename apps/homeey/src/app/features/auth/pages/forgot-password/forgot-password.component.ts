import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Logger } from '../../../../core/services';
import _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, IonarFormBuilder } from '@ionar/form';
import Joi from '@ionar/joi';

const log = new Logger('ForgotPasswordComponent');

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  forgotPassFormGroup: FormGroup;


  changePassFormGroup: FormGroup;


  _token: string;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  constructor(
    private authSvs: AuthService,
    private router: ActivatedRoute,
    private _fb: IonarFormBuilder
  ) {
  }

  ngOnInit() {
    this.forgotPassFormGroup = this._fb.group({
      email: {
        component: 'input',
        props: {
          label: 'Email'
        },
        schema: Joi.string().email().required()
      }
    });

    this.changePassFormGroup = this._fb.group({
      password: {
        component: 'input',
        props: {
          label: 'New Password',
          type: 'password'
        },
        schema: Joi.string().min(6).required()
      },
      confirm_password: {
        component: 'input',
        props: {
          label: 'Confirm Password',
          type: 'password'
        }
      }
    });

    this._token = this.router.snapshot.queryParamMap.get('token');
  }

  ///-----------------------------------------------  General Functions   -----------------------------------------------///


  onForgotPassword = form_data => {
    this.authSvs.reset_password(JSON.stringify(_.assign(form_data, {}, { slug: 'client' })));
  };

  onChangePassword = form_data => {
    this.authSvs.change_password(JSON.stringify(_.assign(form_data, {}, { slug: 'client' })));
  };

}
