import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { IonarLoadingService } from './loading.service';
import { untilDestroyed } from '@ionar/utility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'io-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LoadingComponent implements OnInit, AfterViewChecked, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  visible: Boolean = false;

  private _subscription: Subscription;

  constructor(private _loadingSvs: IonarLoadingService, private  cd: ChangeDetectorRef) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {

  }

  ngAfterViewChecked(): void {
    if (this._subscription) this._subscription.unsubscribe();

    this._subscription = this._loadingSvs.visibilityChange$.pipe(untilDestroyed(this)).subscribe((visible: Boolean) => {
      this.visible = visible;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
