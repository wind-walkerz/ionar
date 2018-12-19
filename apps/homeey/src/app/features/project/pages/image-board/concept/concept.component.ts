import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import moment from 'moment';
import _ from 'lodash';
import { ProjectService } from '../../../providers/project.service';

@Component({
  selector: 'concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  _moment = moment;

  selectedMarker: any = null;

  conversation_list = [];

  constructor(public location: Location, private _projSvs: ProjectService) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this._projSvs.getImageConcept().subscribe(res => {
      this.conversation_list = res;
      console.log(res);
    });
  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

  onSelectedMarker = id => {
    this.selectedMarker = _.find(this.conversation_list, ['id', id]);
    console.log(this.selectedMarker);
  };
}
