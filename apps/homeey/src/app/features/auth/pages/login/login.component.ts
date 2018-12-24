import {Component, OnInit} from '@angular/core';
import {Logger} from '../../../../core/services';
import {AuthService} from '../../providers/auth.service';
import _ from 'lodash';
import {ControlConfig, FormGroup, IonarFormBuilder} from '@ionar/form';

import {slideInLeft, slideInUp} from '@ionar/animations';


const log = new Logger('LoginComponent');


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [slideInUp]
})
export class LoginComponent implements OnInit {

    formGroup: FormGroup;

    private _formConfigs: ControlConfig[] = [
        {
            type: 'input',
            name: 'email',
            label: 'Email',
            validators: {
                required: true,
                email: true
            }

        },
        {
            type: 'input',
            name: 'password',
            label: 'Password',
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
            type: 'input',
            name: 'slug',
            value: 'client',
            props: {
                hidden: true
            }
        }
    ];

    constructor(
        private authSvs: AuthService,
        private _fb: IonarFormBuilder
    ) {
    }

    ngOnInit() {
        this.formGroup = this._fb.group(this._formConfigs);
    }


    onLogin = form_data => {
        this.authSvs.login(form_data);
    };


}
