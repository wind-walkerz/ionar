import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    getToken = (): string => {
        return window.sessionStorage['token'];
    };

    saveToken = (token: string) => {
        window.sessionStorage['token'] = token;
    };

    destroyToken = () => {
        window.sessionStorage.removeItem('token');
    };

}