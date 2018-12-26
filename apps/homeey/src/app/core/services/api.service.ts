import { Injectable, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { el } from '@angular/platform-browser/testing/src/browser_util';
import { untilDestroyed } from '@ionar/utility';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Logger } from './logger.service';
import { IonarLoadingService, IonarToastService } from '@ionar/ui';

const log = new Logger('ApiService');

@Injectable({
  providedIn: 'root'
})

export class ApiService implements OnDestroy {
  constructor(
    private http: HttpClient,
    private _loading: IonarLoadingService,
    private _toast: IonarToastService
  ) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  httpWrapper = (event: Observable<any>): Observable<any> => {
    this._loading.show();
    return event.pipe(
      untilDestroyed(this),
      map((res: { [key: string]: any }) => {
        if (res.status_code === 200) {
          this._toast.success(res.message);
          return res;
        } else {
          log.error(res.message);
        }
      }),
      catchError(this.formatErrors),
      finalize(() => {
        this._loading.hide();
      })
    );
  };

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpWrapper(this.http.get(`${environment.api_url}${path}`, { params: params }));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.httpWrapper(this.http.put(`${environment.api_url}${path}`, body));
  }

  post(path: string, body: any): Observable<any> {
    return this.httpWrapper(this.http.post(`${environment.api_url}${path}`, body));
  }

  delete(path): Observable<any> {
    return this.httpWrapper(this.http.delete(`${environment.api_url}${path}`));
  }

  ngOnDestroy(): void {
  }
}