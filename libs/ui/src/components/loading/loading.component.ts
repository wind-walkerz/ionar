import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { IonarLoadingService } from './loading.service';
import { untilDestroyed } from '@ionar/utility';

@Component({
  selector: 'io-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  visible: Boolean = true;

  constructor(private _loadingSvs: IonarLoadingService, private  cd: ChangeDetectorRef) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this._loadingSvs.visibilityChange$.pipe(untilDestroyed(this)).subscribe((visible: Boolean) => {
      this.visible = visible;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
