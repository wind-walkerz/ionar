import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {Logger} from '../../../../core/services';
import _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import {ControlConfig, FormGroup, IonarFormBuilder} from '@ionar/form';



const log = new Logger('ForgotPasswordComponent');

@Component({
    selector: 'forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    ///-----------------------------------------------  Variables   -----------------------------------------------///

    forgotPassFormGroup: FormGroup
    private _forgotPassFormConfigs: ControlConfig[] = [
        {
            type: 'input',
            name: 'email',
            label: 'Email',
            validators: {
                required: true,
                email: true
            }

        }
    ];


    changePassFormGroup: FormGroup
    private _changePassFormConfigs: ControlConfig[] = [
        {
            type: 'input',
            name: 'password',
            props: {
                label: 'New Password',
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
            type: 'input',
            name: 'confirm_password',
            props: {
                label: 'Confirm Password',
                type: 'password'
            },
            validators: {
                required: true,
                equalTo: 'password'
            }
        }
    ];

    _token: string;

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


    constructor(
      private authSvs: AuthService,
      private router: ActivatedRoute,
      private _fb: IonarFormBuilder
    ) {
    }

    ngOnInit() {
        this.forgotPassFormGroup = this._fb.group(this._forgotPassFormConfigs)

        this.changePassFormGroup = this._fb.group(this._changePassFormConfigs)

        this._token = this.router.snapshot.queryParamMap.get('token');
    }

    ///-----------------------------------------------  General Functions   -----------------------------------------------///


    onForgotPassword = form_data => {
        this.authSvs.reset_password(JSON.stringify(_.assign(form_data, {}, {slug: 'client'})));
    };

    onChangePassword = form_data => {
        this.authSvs.change_password(JSON.stringify(_.assign(form_data, {}, {slug: 'client'})));
    };

}
