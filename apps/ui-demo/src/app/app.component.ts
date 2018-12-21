import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { IonarLoadingService } from '@ionar/ui';

@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title: Boolean = true;

  constructor(private _loadingSvs: IonarLoadingService) {

  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this._loadingSvs.show();

    // setTimeout(() => {
    //   this._loadingSvs.hide()
    // }, 2000)
  }

}
