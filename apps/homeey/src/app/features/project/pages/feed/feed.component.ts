import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import moment from 'moment';
import { FeedService } from './feed.service';
import { ControlConfig, FormGroup, IonarFormBuilder } from '@ionar/form';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit, AfterViewInit, OnDestroy {

  protected _moment = moment;

  @ViewChild('upload', { read: TemplateRef }) private _uploadTplRef: TemplateRef<any>;

  formGroup: FormGroup;

  _formConfigs: ControlConfig[] = [];


  ///-----------------------------------------------  Variables   -----------------------------------------------///

  chat_feed: any;

  constructor(
    private _feedSvs: FeedService,
    private cd: ChangeDetectorRef,
    private _fb: IonarFormBuilder
  ) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {
    this._feedSvs.getChatFeed().subscribe(res => {
      this.chat_feed = res;
    });
  }

  ngAfterViewInit(): void {
    this._formConfigs = [
      {
        type: 'textarea',
        name: 'text',
        props: {
          placeholder: 'Write your comment...',
          feedback: null
        },
        validators: {
          required: true
        }
      },
      {
        type: 'upload',
        name: 'profile_picture',
        props: {
          template: this._uploadTplRef,
          feedback: null
        }
      },
      {
        type: 'input',
        name: 'user_id',
        props: {
          value: 1
        },
        state: 'hidden'
      },
      {
        type: 'input',
        name: 'project_id',
        props: {
          value: 6
        },
        state: 'hidden'
      }
    ];

    this.formGroup = this._fb.group(this._formConfigs);

    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///


  onSendMsg = form_data => {
    this._feedSvs.sendChatMessage(form_data).subscribe(res => {
      this._feedSvs.getChatFeed().subscribe(res => {
        this.chat_feed = res;
      });
    });
  };

}
