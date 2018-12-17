import { Component, OnInit } from '@angular/core';
import { Logger } from '../../../../core/services';
import { AuthService } from '../../providers/auth.service';
import _ from 'lodash';
import { FormGroup, IonarFormBuilder } from '@ionar/form';
import { ControlConfig } from '../../../../../../../../libs/form/src/core/models/ControlConfig';


const log = new Logger('LoginComponent');


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
    this.authSvs.login(JSON.stringify(_.assign(form_data, {}, { slug: 'client' })));
  };


}
