import { Injectable, OnDestroy } from '@angular/core';
import { ApiService, Logger } from '../../core/services';
import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';


const log = new Logger('ProfileService');

@Injectable()

export class ProfileService implements OnDestroy {

  constructor(
    private _apiSvs: ApiService
  ) {
  }

  ngOnDestroy(): void {
  }

  getUserProfile = (): Observable<HttpEvent<any>> => {
    return this._apiSvs.get('/auth/profile');
  };

  updateUserProfile = (data): Observable<HttpEvent<any>> => {
    return this._apiSvs.post('/auth/post-profile', data);
  }
}