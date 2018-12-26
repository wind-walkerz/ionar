import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { IonarToastService } from '../toast.service';
import { untilDestroyed } from '@ionar/utility';

@Component({
  selector: 'io-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  message_list = [];

  @HostBinding('class.show') get _showToastContainer() {
    return this.message_list.length > 0;
  };

  constructor(private _toast: IonarToastService) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this.message_list = this._toast.getMessages();

    this._toast.newMessage$.pipe(untilDestroyed(this)).subscribe((message_list: any) => {
      this.message_list = message_list;
      this.ngOnChanges(null);
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.message_list.length > 0) {

    }
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

  deleteMessage = index => {
    this._toast.deleteMessage(index);
  };

}
