import {Injectable, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {untilDestroyed} from '@aurora-ngx/ui';
import {ApiService, Logger} from '../../../core/services';
import {StorageService} from './storage.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpParams} from '@angular/common/http';


const log = new Logger('AuthService');

@Injectable({
    providedIn: 'root'
})

export class AuthService implements OnDestroy {

    private token: string = null;

    constructor(
        private stoSvs: StorageService,
        private apiSvs: ApiService,
        private router: Router,
        private spinner: NgxSpinnerService
    ) {
        this.token = this.stoSvs.getToken();
    }


    ngOnDestroy(): void {
    }


    isAuthenticated = (): Boolean => !!this.token;

    _getToken = (): string => this.token;


    login = (body: any) => {
        this.spinner.show();
        this.apiSvs.post('/auth/login', body).pipe(untilDestroyed(this)).subscribe(res => {

            if (res.status_code === 200) {

                this.token = res.data.access_token.toLowerCase();

                this.stoSvs.saveToken(res.data.access_token.toLowerCase());

                this.router.navigate(['/dashboard']);
                alert(res.message);

            } else {
                log.error(res.message);
                alert(res.message);
            }

            this.spinner.hide();
        });
    };

    logout = () => {
        this.spinner.show();
        this.apiSvs.get('/auth/logout').pipe(untilDestroyed(this)).subscribe(res => {
            if (res.status_code === 200) {
                this.token = null;
                this.stoSvs.destroyToken();
                this.router.navigate(['/auth']);
                alert(res.message);
            } else {
                log.error(res.message);
                alert(res.message);
            }

            this.spinner.hide();
        });

    };

    register = (body: any) => {
        this.spinner.show();
        this.apiSvs.post('/auth/register', body).pipe(untilDestroyed(this)).subscribe(res => {
            if (res.status_code === 200) {
                alert(res.message);
            } else {
                log.error(res.message);
                alert(res.message);
            }
            this.spinner.hide();
        });
    };

    change_password = body => {
        this.spinner.show();
        this.apiSvs.post('/auth/change-password', body).pipe(untilDestroyed(this)).subscribe(res => {
            if (res.status_code === 200) {
                alert(res.message);
            } else {
                log.error(res.message);
                alert(res.message);
            }
            this.spinner.hide();
        });

    };

    reset_password = body => {
        this.spinner.show();
        this.apiSvs.post('/auth/reset-password', body).pipe(untilDestroyed(this)).subscribe(res => {
            if (res.status_code === 200) {
                alert(res.message);
            } else {
                log.error(res.message);
                alert(res.message);
            }
            this.spinner.hide();
        });

    };


}