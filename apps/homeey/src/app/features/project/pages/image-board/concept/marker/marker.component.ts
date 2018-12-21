import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
  HostBinding, HostListener, OnChanges, SimpleChanges
} from '@angular/core';
import _ from 'lodash';
import { ControlConfig, FormGroup, IonarFormBuilder } from '@ionar/form';
import { ProjectService } from '../../../../providers/project.service';

@Component({
  selector: 'marker',
  exportAs: 'marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  private showCommentThread: boolean = false;
  commentData;
  formGroup: FormGroup;

  _formConfigs: ControlConfig[] = [];

  @Input() data: any = null;
  @Input() item_id: string;
  @Input() isSelected;
  @Output() change = new EventEmitter();

  constructor(
    public elRef: ElementRef,
    private _renderer: Renderer2,
    private _fb: IonarFormBuilder,
    private _projSvs: ProjectService
  ) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

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
        value: `${this.data.marker.x},${this.data.marker.y}`,
        props: {
          hidden: true
        }
      }
    ];

    this.formGroup = this._fb.group(this._formConfigs, {
      nullExclusion: true
    });

    this._renderer.setStyle(this.elRef.nativeElement, 'top', `${this.data.marker.y}px`);
    this._renderer.setStyle(this.elRef.nativeElement, 'left', `${this.data.marker.x}px`);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///
  onSendComment = formValue => {
console.log(formValue)
    // this._projSvs.createConversation(formValue).subscribe(res => {
    //   this.formGroup.clear();
    // });
  };

  toggleCommentThread = () => {
    this.change.emit(this.data.id);
    this.showCommentThread = !this.showCommentThread;
    if (this.data.concepts.data.length < 2) {

      this.commentData = this.data.concepts.data[0];

    }
  };

}
