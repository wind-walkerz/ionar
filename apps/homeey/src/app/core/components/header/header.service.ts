import { Injectable, OnDestroy } from '@angular/core';
import { ApiService, Logger } from '../../services';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';


const log = new Logger('HeaderService');

@Injectable()
export class HeaderService {
  constructor(private api: ApiService) {
  }

  getProjectList = (): Observable<any> => {
    return this.api.get(`/homeey/get-project-list`);
  };

}