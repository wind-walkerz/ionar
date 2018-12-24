import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonarToastService } from '../toast.service';
import { untilDestroyed } from '@ionar/utility';

@Component({
  selector: 'io-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  message_list;

  constructor(private _toast: IonarToastService) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this.message_list = this._toast.getMessages();

    this._toast.newMessage$.pipe(untilDestroyed(this)).subscribe(message_list => {
      this.message_list = message_list;
    });

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
