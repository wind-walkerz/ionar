import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import moment from 'moment';
import { ImageBoardService } from '../image-board.service';
import _ from 'lodash';

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

  constructor(public location: Location, private _imgBoardSvs: ImageBoardService) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this._imgBoardSvs.getImageConcept().subscribe(res => {
      this.conversation_list = res;
      console.log(res);
    });
  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

  onSelectedMarker = id => {
    this.selectedMarker = _.find(this.conversation_list, ['id', id]);
    console.log(this.selectedMarker)
  };
}
