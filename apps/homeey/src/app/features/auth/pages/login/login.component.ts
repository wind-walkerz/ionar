import { Component, OnInit } from '@angular/core';
import { Logger } from '../../../../core/services';
import { AuthService } from '../../providers/auth.service';
import _ from 'lodash';


const log = new Logger('LoginComponent');


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  configs = [
    {
      type: 'input',
      name: 'email',
      label: 'Email',
      validators: ['required', 'email']
    },
    {
      type: 'input',
      input_type: 'password',
      name: 'password',
      label: 'Password',
      validators: ['required']
    }
  ];

  constructor(private authSvs: AuthService) {
  }

  ngOnInit() {
  }


  onLogin = form_data => {
    this.authSvs.login(JSON.stringify(_.assign(form_data, {}, { slug: 'client' })));
  };


}
