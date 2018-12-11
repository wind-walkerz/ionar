import { Component, OnInit, OnDestroy, Input, ElementRef, Renderer2 } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() data: any = null;


  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer2
  ) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {
    const coordinate = _.split(this.data.coordinate, ',');
    const latitude = coordinate[0];
    const longitude = coordinate[1];

    this._renderer.setStyle(this._elRef.nativeElement, 'top', `${longitude}px`);
    this._renderer.setStyle(this._elRef.nativeElement, 'left', `${latitude}px`);
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
