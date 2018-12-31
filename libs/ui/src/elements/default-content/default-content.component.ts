import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'default-content',
  templateUrl: './default-content.component.html'
})
export class DefaultContentComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  constructor( private _elRef: ElementRef) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {
    console.log(this._elRef)
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
