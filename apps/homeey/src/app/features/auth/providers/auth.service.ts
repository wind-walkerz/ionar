import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { untilDestroyed } from '@aurora-ngx/ui';
import { ApiService, Logger } from '../../../core/services';
import { StorageService } from './storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfileService } from '../../profile/providers/profile.service';


const log = new Logger('AuthService');

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnDestroy {

  private _token: string = null;
  private _userId: string = null;

  constructor(
    private stoSvs: StorageService,
    private apiSvs: ApiService,
    private router: Router
  ) {
    this.token = this.stoSvs.getToken();
  }


  ngOnDestroy(): void {
  }

  get token() {
    return this._token;
  }

  set token(token: any) {
    this._token = token;
  }

  get user_id() {
    return this._userId;
  }

  set user_id(id: string) {
    this._userId = id;
  }


  isAuthenticated = (): Boolean => !!this.token;

  _getToken = (): string => this.token;


  login = (body: any) => {
    this.apiSvs.post('/auth/login', body).subscribe(res => {

      this.token = res.access_token.toLowerCase();

      this.stoSvs.saveToken(this.token);

      this.router.navigate(['/dashboard']);

    });
  };

  logout = () => {
    this.apiSvs.get('/auth/logout').subscribe(res => {
      this.token = null;
      this.stoSvs.destroyToken();
      this.router.navigate(['/auth']);
    });

  };

  register = (body: any) => {
    this.apiSvs.post('/auth/register', body).subscribe(res => {

    });
  };

  change_password = body => {
    this.apiSvs.post('/auth/change-password', body).subscribe(res => {

    });

  };

  reset_password = body => {
    this.apiSvs.post('/auth/reset-password', body).subscribe(res => {

    });

  };


}