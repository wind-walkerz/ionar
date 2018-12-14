import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ContentChildren,
  EventEmitter,
  Injectable,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Output, QueryList, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import { FormService } from './providers/form.service';
import _ from 'lodash';

import { FormGroup } from './models/FormGroup';
import { FormControl } from './models/FormControl';
import { untilDestroyed } from '@ionar/utility';
import { ControlComponent } from './components/control.component';

@Component({
  selector: 'io-form',
  template: `

      <ng-container *ngIf="default_template; else custom">
          <ng-container *ngFor="let control of control_name_list; let i = index">
              <form-control
                      [name]="control"
                      [className]="controls[i].configuration.props.className"
                      [id]="controls[i].configuration.props.id"
              ></form-control>
          </ng-container>
      </ng-container>

      <ng-template #custom>
          <ng-content></ng-content>
      </ng-template>

  `,
  styles: [`

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormService]
})

@Injectable()
export class FormComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input('formGroup') _formGr: FormGroup;

  @Input() mediaType: String;

  @Output() submit = new EventEmitter();

  @ContentChildren(ControlComponent) private _controlCompList: QueryList<ControlComponent>;


  control_name_list: string[] = [];

  controls: FormControl[];

  default_template: Boolean = true;

  constructor(private _formSvs: FormService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

    if (this._controlCompList && this._controlCompList.toArray().length > 0) {
      this.default_template = false;
      this.cd.detectChanges();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes._formGr.previousValue && changes._formGr.currentValue) {
      this.parseContext();
    }

  }


  ngOnDestroy(): void {
  }

  parseContext = () => {

    if (this._formGr) {
      this._formSvs.group(this._formGr);
      this.control_name_list = _.keys(this._formGr.controls);

      this.controls = _.values(this._formGr.controls);

      this._formGr.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {

        if (this._formGr.valid) {
          this.submit.emit(this._formSvs.convertToMediaType(data, this.mediaType));
        }


      });

      _.each(this._controlCompList.toArray(), c => {
        c._formGr = this._formGr;
        c.parseContext()
      });


      this.cd.detectChanges();
    }
  };

}

// [className]="controls[i].configuration.props.className"
//   [id]="controls[i].configuration.props.id"