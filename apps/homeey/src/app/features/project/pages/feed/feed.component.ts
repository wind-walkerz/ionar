import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import moment from 'moment';
import { ControlConfig, FormGroup, IonarFormBuilder } from '@ionar/form';
import { ProjectService } from '../../providers/project.service';


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
    private _projSvs: ProjectService,
    private cd: ChangeDetectorRef,
    private _fb: IonarFormBuilder
  ) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {
    this.getChatFeed();
  }

  ngAfterViewInit(): void {
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
        name: 'profile_picture',
        props: {
          template: this._uploadTplRef,
          hideFeedback: true,
          hideLabel: true,
          submitOnChange: true
        }
      },
      {
        type: 'input',
        name: 'user_id',
        value: 1,
        props: {
          hidden: true
        }
      },
      {
        type: 'input',
        name: 'project_id',
        value: this._projSvs.project_id,
        props: {
          hidden: true
        }
      }
    ];

    this.formGroup = this._fb.group(this._formConfigs, {
      nullExclusion: true
    });

    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///


  onSendMsg = formValue => {
    this._projSvs.sendChatMessage(formValue).subscribe(res => {
      this.formGroup.reset();
      this.getChatFeed();
    });
  };

  getChatFeed = () => {
    this._projSvs.getChatFeed().subscribe(res => {
      this.chat_feed = res.data;
    });
  };

}
