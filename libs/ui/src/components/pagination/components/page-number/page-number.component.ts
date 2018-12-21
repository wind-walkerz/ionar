import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  HostListener, HostBinding
} from '@angular/core';
import _ from 'lodash';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'page-number',
  template: `
      {{number}}
  `,
  styleUrls: [`./page-number.component.scss`]
})
export class PageNumberComponent implements OnInit, OnChanges {

  @Input() number: number = 0;
  @Input() currentPage: number = 0;

  @Output() change = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick = e => {
    this.change.emit(this.number);
  };

  @HostListener('mousedown', ['$event'])
  onMouseDown = e => {
    this._focusStyle = true;
  };

  @HostListener('mouseup', ['$event'])
  onMouseUp = e => {
    setTimeout(() => {
      this._focusStyle = false;
    }, 300);
  };


  @HostBinding('class.active') _activeStyle: boolean = false;
  @HostBinding('class.focus') _focusStyle: boolean = false;

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this._activeStyle = this.number === this.currentPage;
  }

}
