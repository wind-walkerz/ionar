import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import moment from 'moment';
import { FormGroup, FormGroupState, IonarFormBuilder } from '@ionar/form';
import { ProjectService } from '../../providers/project.service';


@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit, OnDestroy {

  protected _moment = moment;

  @ViewChild('upload', { read: TemplateRef }) private _uploadTplRef: TemplateRef<any>;

  formGroup: FormGroup;

  _formConfigs: FormGroupState;


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


    this._formConfigs = {
      text: {
        component: 'textarea',
        props: {
          placeholder: 'Write your comment...'
        },
        validators: {
          required: true
        },
        options: {
          hideFeedback: true,
          hideLabel: true
        }
      },
      picture: {
        component: 'upload',

        options: {
          hideFeedback: true,
          hideLabel: true,
          submitOnChange: true
        }
      },
      user_id: {
        component: 'input',
        props: {
          value: 1
        },
        options: {
          hidden: true
        }
      },
      project_id: {
        component: 'input',
        props: {
          value: this._projSvs.project_id
        },

        options: {
          hidden: true
        }
      }
    };

    this.formGroup = this._fb.group(this._formConfigs, {
      nullExclusion: true
    });
  }


  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///


  onSendMsg = formValue => {
    this._projSvs.sendChatMessage(formValue).subscribe(res => {
      this.formGroup.clear();
      this.getChatFeed();
    });
  };

  getChatFeed = () => {
    this._projSvs.getChatFeed().subscribe(res => {
      this.chat_feed = res.data;
    });
  };

}
