import { Injectable, OnDestroy } from '@angular/core';
import { ApiService, Logger } from '../../../core/services';
import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';


const log = new Logger('ProfileService');

@Injectable()

export class ProfileService implements OnDestroy {

  private _userProfile: any;

  get user_profile() {
    return this._userProfile;
  }

  set user_profile(profile: any) {
    this._userProfile = profile;
  }

  constructor(
    private _apiSvs: ApiService
  ) {
  }

  ngOnDestroy(): void {
  }

  _getUserProfile = (): Observable<HttpEvent<any>> => {
    return this._apiSvs.get('/auth/profile');
  };
}