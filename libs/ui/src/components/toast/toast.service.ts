import { Injectable, NgModule } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IonarToastService {
  private _messageList = ['skldfjlska', '1111', '2222'];

  public newMessage$ = new Subject();

  getMessages() {
    return this._messageList;
  }

  sendMessage(message) {

    this._messageList = this._messageList.concat(message);
    this.newMessage$.next(this._messageList);
  }
}
