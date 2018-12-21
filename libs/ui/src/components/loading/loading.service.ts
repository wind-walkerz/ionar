import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class IonarLoadingService {

  visibilityChange$ = new Subject();

  isDisabled: boolean = false;

  show = () => !this.isDisabled && this.visibilityChange$.next(true);

  hide = () => !this.isDisabled && this.visibilityChange$.next(false);

  disabled = () => this.isDisabled = true;

  enabled = () => this.isDisabled = false;
}