import { AfterViewChecked, AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IonarLoadingService } from '@ionar/ui';
import { IonarToastService } from '@ionar/ui';

@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title: Boolean = true;

  // @ViewChild('template') template: TemplateRef<any>

  constructor(private _loadingSvs: IonarLoadingService, private _toast: IonarToastService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this._toast.info('sdlkfjslk');
    this._loadingSvs.show();

    // setTimeout(() => {
    //   this._loadingSvs.hide()
    // }, 2000)
  }

  sendMessage = () => {
    this._toast.info('928374298');

  };

}
