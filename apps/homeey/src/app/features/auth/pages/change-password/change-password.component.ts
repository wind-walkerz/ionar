import {Component, OnInit} from '@angular/core';
import {Logger} from '../../../../core/services';
import {AuthService} from '../../providers/auth.service';
import {ActivatedRoute} from '@angular/router';
import _ from 'lodash';

const log = new Logger('ChangePasswordComponent');

@Component({
    selector: 'change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

    ///-----------------------------------------------  Variables   -----------------------------------------------///

    configs = [
        {
            type: 'input',
            input_type: 'password',
            name: 'current_password',
            label: 'Current Password',
            validators: ['required']
        },
        {
            type: 'input',
            input_type: 'password',
            name: 'password',
            label: 'New Password',
            validators: ['required']
        },
        {
            type: 'input',
            input_type: 'password',
            name: 'confirm_password',
            label: 'Confirm Password',
            validators: ['required', 'confirm_password']
        },
    ];

    _forgotConfig = [
        {
            type: 'input',
            input_type: 'password',
            name: 'password',
            label: 'New Password',
            validators: ['required']
        },
        {
            type: 'input',
            input_type: 'password',
            name: 'confirm_password',
            label: 'Confirm Password',
            validators: ['required', 'confirm_password']
        },
    ];

    _token: string;

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


    constructor(
        private authSvs: AuthService,
        private router: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this._token = this.router.snapshot.queryParamMap.get('token');
    }

    ///-----------------------------------------------  General Functions   -----------------------------------------------///


    onChangePassword = form_data => {
        this.authSvs.change_password(JSON.stringify(_.assign(form_data, {}, {slug: 'client'})));
    };


}
