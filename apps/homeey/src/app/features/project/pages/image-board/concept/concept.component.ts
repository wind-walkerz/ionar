import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import moment from 'moment';
import _ from 'lodash';
import { ProjectService } from '../../../providers/project.service';
import { $e } from 'codelyzer/angular/styles/chars';

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

  @ViewChild('myBounds', { read: ElementRef }) private _boundaryRef;

  onDrop = (e, conversation) => {
    console.log(e);

    const latitude = _.split(conversation.marker, ',')[0];
    const longitude = _.split(conversation.marker, ',')[1];

    this.onUpdateMarkerCoordinate();
  };


  constructor(public location: Location, private _projSvs: ProjectService) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this._projSvs.getImageConcept().subscribe(res => {
      this.conversation_list = _.map(res.data, (conv: any) => {
        const background = {
          width: this._boundaryRef.clientWidth,
          height: this._boundaryRef.clientHeight
        };

        const coordinate = {
          latitude: _.split(conv.marker, ',')[0],
          longitude: _.split(conv.marker, ',')[1]
        };

        const marker = {
          x: (parseFloat(coordinate.latitude) * background.width) / 100,
          y: (parseFloat(coordinate.longitude) * background.height) / 100
        };

        conv.marker = marker;
        return conv;
      });


    });
  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

  onSelectedMarker = id => {
    this.selectedMarker = _.find(this.conversation_list, ['id', id]);

  };

  onUpdateMarkerCoordinate = () => {
    this._projSvs.updateMarkerCoordinate().subscribe(res => {

    });
  };
}
