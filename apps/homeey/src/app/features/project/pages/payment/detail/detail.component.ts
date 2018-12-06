import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  constructor(protected location: Location) {}

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {}

  ngOnDestroy(): void {}

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///
}
