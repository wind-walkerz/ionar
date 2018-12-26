import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, Logger } from '../../../core/services';
import { StorageService } from './storage.service';
import { Subject } from 'rxjs';


const log = new Logger('AuthService');

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnDestroy {
  private _userId: string = null;

  public authenticationChange$ = new Subject();

  constructor(
    private stoSvs: StorageService,
    private apiSvs: ApiService,
    private router: Router
  ) {

  }


  ngOnDestroy(): void {
  }

  get token() {
    return this.stoSvs.getToken();
  }

  set token(token: any) {
    this.stoSvs.saveToken(token);
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

      this.token = res.data.access_token.toLowerCase();

      this.router.navigate(['/dashboard']);

      this.authenticationChange$.next(this.isAuthenticated());

    });
  };

  logout = () => {
    return this.apiSvs.get('/auth/logout').subscribe(res => {

      this.stoSvs.destroyToken();
      this.router.navigate(['/auth']);
      this.authenticationChange$.next(this.isAuthenticated());
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