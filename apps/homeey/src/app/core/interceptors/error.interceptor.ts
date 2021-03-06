import { ChangeDetectorRef, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../features/auth/providers/auth.service';
import { StorageService } from '../../features/auth/providers/storage.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IonarToastService } from '@ionar/ui';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authSvs: AuthService,
    private _storageSvs: StorageService,
    private _router: Router,
    private _toast: IonarToastService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((res: HttpResponse<any>) => {
        if (res.body) {
          if (res.body.status_code === 403) {
            this._toast.danger(res.body.message);
            this._storageSvs.destroyToken();
            this._router.navigate(['/auth']);

            return null;
          }
        }
        return res;
      }),
      catchError(err => throwError(err))
    );
  }
}