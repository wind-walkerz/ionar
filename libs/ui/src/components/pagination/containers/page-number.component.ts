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

  @Input() number: number;
  @Input() currentPage: number;

  @Output() change = new EventEmitter();

  @HostListener('click')
  onClick = e => {
    this.change.emit(this.number);
  };

  @HostListener('mousedown')
  onMouseDown = e => {
    this._focusStyle = true;
  };

  @HostListener('mouseup')
  onMouseUp = e => {
    setTimeout(() => {
      this._focusStyle = false;
    }, 300);
  };


  @HostBinding('class.active') private _activeStyle: boolean = false;
  @HostBinding('class.focus') private _focusStyle: boolean = false;

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this._activeStyle = this.number === this.currentPage;
  }

}
