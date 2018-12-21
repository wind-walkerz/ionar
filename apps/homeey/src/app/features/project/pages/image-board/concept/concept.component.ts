import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import moment from 'moment';
import _ from 'lodash';
import { ProjectService } from '../../../providers/project.service';
import { $e } from 'codelyzer/angular/styles/chars';
import { ActivatedRoute } from '@angular/router';
import { ControlConfig, FormGroup, IonarFormBuilder } from '@ionar/form';

@Component({
  selector: 'concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit, AfterViewInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  _moment = moment;

  selectedMarker: any = null;

  conversation_list = [];

  count = 0;

  item_id: string;

  formGroup: FormGroup;

  _formConfigs: ControlConfig[] = [];

  @ViewChild('myBounds', { read: ElementRef }) private _boundaryRef;

  onDrag = () => {
    this.count += 1;
  };

  onDrop = (e, conversation) => {

    const background = {
      width: this._boundaryRef.nativeElement.clientWidth,
      height: this._boundaryRef.nativeElement.clientHeight
    };

    conversation.marker = {
      x: ((conversation.marker.x + e.x) / background.width) * 100,
      y: ((conversation.marker.y + e.y) / background.height) * 100
    };

    if (this.count > 2) {

      this.onUpdateMarkerCoordinate(conversation);
    }

    this.count = 0
  };


  constructor(
    public location: Location,
    private _projSvs: ProjectService,
    private _route: ActivatedRoute,
    private _fb: IonarFormBuilder
  ) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {

    this.item_id = this._route.snapshot.paramMap.get('id');

    this._formConfigs = [
      {
        type: 'textarea',
        name: 'text',
        props: {
          placeholder: 'Write your comment...',
          hideFeedback: true,
          hideLabel: true
        },
        validators: {
          required: true
        }
      },
      {
        type: 'upload',
        name: 'picture',
        props: {
          hideFeedback: true,
          hideLabel: true,
          submitOnChange: true
        }
      },
      {
        type: 'input',
        name: 'item_id',
        value: this.item_id,
        props: {
          hidden: true
        }
      },
      {
        type: 'input',
        name: 'marker',
        props: {
          hidden: true
        }
      }
    ];

    this.formGroup = this._fb.group(this._formConfigs, {
      nullExclusion: true
    });
  }

  ngAfterViewInit(): void {
    this.onGetConversationList();


  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

  onSelectedMarker = id => {
    this.selectedMarker = _.find(this.conversation_list, ['id', id]);


    this.formGroup.setValue({
      marker: `${this.selectedMarker.marker.x},${this.selectedMarker.marker.y}`
    });


  };

  onUpdateMarkerCoordinate = conversation => {

    const post_data = _.pick(conversation, ['id', 'item_id', 'status', 'marker']);

    post_data.marker = `${post_data.marker.x},${post_data.marker.y}`;

    const form_data = new FormData();

    _.forOwn(post_data, (value, key) => {
      form_data.append(key, value);
    });


    this._projSvs.updateMarkerCoordinate(form_data).subscribe(res => {

    });
  };

  onSendComment = formValue => {

    this._projSvs.createConversation(formValue).subscribe(res => {
      this.formGroup.clear();
      this.onGetConversationList()
    });
  };

  onCreateConversation = e => {
    const formData = new FormData();

    const background = {
      width: this._boundaryRef.nativeElement.clientWidth,
      height: this._boundaryRef.nativeElement.clientHeight
    };

    const marker = {
      x: (e.offsetX / background.width) * 100,
      y: (e.offsetY / background.height) * 100
    };

    formData.append('marker', `${marker.x},${marker.y}`);
    formData.append('item_id', this.item_id);

    this._projSvs.createConversation(formData).subscribe(res => {
      this.onGetConversationList();
    });
  };

  onGetConversationList = () => {
    this._projSvs.getImageConcept(this.item_id).subscribe(res => {
      this.conversation_list = _.map(res.data, (conv: any) => {
        const background = {
          width: this._boundaryRef.nativeElement.clientWidth,
          height: this._boundaryRef.nativeElement.clientHeight
        };

        const coordinate = {
          latitude: _.split(conv.marker, ',')[0],
          longitude: _.split(conv.marker, ',')[1]
        };

        conv.marker = {
          x: ((parseFloat(coordinate.latitude) * background.width) / 100),
          y: ((parseFloat(coordinate.longitude) * background.height) / 100)
        };
        return conv;
      });


    });
  };
}
