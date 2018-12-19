import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IonarLoadingService {

  visibilityChange$ = new Subject();

  show = () => {
    this.visibilityChange$.next(true);
  };

  hide = () => {
    this.visibilityChange$.next(false);
  };
}