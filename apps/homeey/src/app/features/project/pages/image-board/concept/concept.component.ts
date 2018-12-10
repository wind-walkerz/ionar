import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  constructor(public location: Location) {}

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {}

  ngOnDestroy(): void {}

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///
}
