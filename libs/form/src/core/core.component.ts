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
  SimpleChanges
} from '@angular/core';
import { FormService } from './providers/form.service';

import { FormGroup } from './models/FormGroup';
import { FormControl } from './models/FormControl';
import { ControlComponent } from './components/control.component';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'io-form',
  template: `
      <ng-container *ngIf="viewInitialized">

          <ng-container *ngIf="!default_template">
              <ng-content></ng-content>
          </ng-container>

          <ng-container *ngIf="default_template">
              <ng-container *ngFor="let name of controlRoster">
                  <form-control
                          [name]="name"
                          [formGroup]="formGroup"
                  >
                  </form-control>
              </ng-container>
          </ng-container>

      </ng-container>


  `,
  styles: [`

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormService]
})

@Injectable()
export class FormComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {

  @Input() formGroup: FormGroup;

  @Input() mediaType: String;
  @Output() submit = new EventEmitter();
  @ContentChildren(ControlComponent) _controlCompList: QueryList<ControlComponent>;

  controlRoster: string[];

  controls: FormControl[];

  default_template: Boolean;

  viewInitialized: Boolean = false;

  private _subscription: Subscription;

  constructor(private _formSvs: FormService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

  }


  ngAfterContentInit(): void {

  }

  ngAfterContentChecked(): void {

  }

  ngAfterViewInit(): void {


  }

  ngAfterViewChecked(): void {

    if (this.formGroup) {

      this.default_template = !(this._controlCompList && this._controlCompList.length > 0);
      this.parseContext();
      this.viewInitialized = true;
      this.cd.detectChanges();
    }
  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
  }


  parseContext = () => {
    this._formSvs.initialize(this.formGroup);
    this.controlRoster = _.keys(this.formGroup.controls);

    this.controls = _.values(this.formGroup.controls);

    if (this._subscription) this._subscription.unsubscribe();

    this._subscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this), distinctUntilChanged()).subscribe(data => {
      if (this.formGroup.valid) {
        this.submit.emit(this._formSvs.convertToMediaType(data, this.mediaType));
      }
    });

    if (this._controlCompList.length > 0) {
      _.each(this._controlCompList.toArray(), (c: ControlComponent) => {
        c.formGroup = this.formGroup;
      });
    }
  };

}
