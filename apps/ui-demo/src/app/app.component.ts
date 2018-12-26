import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { IonarLoadingService } from '@ionar/ui';
import { IonarToastService } from '../../../../libs/ui/src/components/toast/toast.service';

@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title: Boolean = true;

  constructor(private _loadingSvs: IonarLoadingService, private _toast: IonarToastService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this._loadingSvs.show();

    // setTimeout(() => {
    //   this._loadingSvs.hide()
    // }, 2000)
  }

  sendMessage = () => {
    this._toast.info('928374298');

  };

}
