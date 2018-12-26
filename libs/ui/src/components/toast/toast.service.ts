import { Injectable, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import _ from 'lodash';
import uuid from 'uuid/v1';

@Injectable({
  providedIn: 'root'
})
export class IonarToastService {
  private _messageList = [];

  public newMessage$ = new Subject();

  private _duration = 2000;

  getMessages() {
    return this._messageList;
  }

  sendMessage(message, duration) {

    this._messageList = this._messageList.concat(message);
    this.newMessage$.next(this._messageList);
    setTimeout(() => this.deleteMessage(message.id), duration);
  }

  deleteMessage(id) {
    this._messageList = _.reject(this._messageList, ['id', id]);
    this.newMessage$.next(this._messageList);
  }

  info = (message, duration: number = this._duration) => this.sendMessage({
    id: uuid(),
    text: message,
    type: 'info'
  }, duration);

  success = (message, duration: number = this._duration) => this.sendMessage({
    id: uuid(),
    text: message,
    type: 'success'
  }, duration);

  danger = (message, duration: number = this._duration) => this.sendMessage({
    id: uuid(),
    text: message,
    type: 'danger'
  }, duration);
}
