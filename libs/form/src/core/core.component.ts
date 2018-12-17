import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Injectable,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import { FormService } from './providers/form.service';
import _ from 'lodash';

import { FormGroup } from './models/FormGroup';
import { FormControl } from './models/FormControl';
import { ControlComponent } from './components/control.component';
import { untilDestroyed } from '@ionar/utility';

@Component({
  selector: 'io-form',
  template: `

      <ng-container *ngIf="default_template; else custom">
          <ng-container *ngIf="control_name_list">
              <ng-container *ngFor="let control of control_name_list; let i = index">
                  <form-control
                          [name]="control">
                  </form-control>
              </ng-container>
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
export class FormComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {

  @Input('formGroup') private _formGr: FormGroup;

  @Input() mediaType: String;

  @Output() submit = new EventEmitter();

  @ContentChildren(ControlComponent) private _controlContentChildren: QueryList<ControlComponent>;
  @ViewChildren(ControlComponent) private _controlViewChildren: QueryList<ControlComponent>;


  control_name_list: string[];

  controls: FormControl[];

  default_template: Boolean;

  constructor(private _formSvs: FormService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

  }


  ngAfterContentInit(): void {
    this.default_template = !(this._controlContentChildren && this._controlContentChildren.length > 0);
  }

  ngAfterContentChecked(): void {

  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

    if (this._formGr) {
      this.parseContext();
      // this._formGr.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
      //   if (this._formGr.valid) {
      //     this.submit.emit(this._formSvs.convertToMediaType(data, this.mediaType));
      //   }
      // });
    }

  }


  ngOnChanges(changes: SimpleChanges): void {
    if (!changes._formGr.previousValue && changes._formGr.currentValue) {
      this.parseContext();
      this._formGr.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
        if (this._formGr.valid) {
          this.submit.emit(this._formSvs.convertToMediaType(data, this.mediaType));
        }

      });
    }

  }

  ngOnDestroy(): void {
  }


  parseContext = () => {
    this._formSvs.initialize(this._formGr);
    this.control_name_list = _.keys(this._formGr.controls);

    this.controls = _.values(this._formGr.controls);


    if (this._controlContentChildren) {

      _.each(this._controlContentChildren.toArray(), c => {
        c._formGr = this._formGr;
        c.ngOnChanges();
      });
    }
    if (this._controlViewChildren) {
      _.each(this._controlViewChildren.toArray(), c => {
        c._formGr = this._formGr;
        c.ngOnChanges();
      });
    }

    this.cd.detectChanges();
  };

}
