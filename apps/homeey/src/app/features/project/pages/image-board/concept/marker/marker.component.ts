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
  exportAs: 'marker',
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
    public elRef: ElementRef,
    private _renderer: Renderer2
  ) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

    this._renderer.setStyle(this.elRef.nativeElement, 'top', `${this.data.marker.y}px`);
    this._renderer.setStyle(this.elRef.nativeElement, 'left', `${this.data.marker.x}px`);
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
