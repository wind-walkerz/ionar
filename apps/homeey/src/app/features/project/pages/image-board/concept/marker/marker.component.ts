import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
  HostBinding, HostListener
} from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() data: any = null;

  @Output() selected = new EventEmitter()

  @HostListener('click')
  onClick() {
    this.selected.emit(this.data.id)
  }

  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer2
  ) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {
    const coordinate = _.split(this.data.marker, ',');
    const latitude = coordinate[0];
    const longitude = coordinate[1];

    this._renderer.setStyle(this._elRef.nativeElement, 'top', `${longitude}px`);
    this._renderer.setStyle(this._elRef.nativeElement, 'left', `${latitude}px`);
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
