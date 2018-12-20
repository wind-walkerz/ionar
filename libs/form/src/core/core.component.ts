import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren, ElementRef,
  EventEmitter,
  Injectable,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges, ViewChild
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
      <ng-container>
          <ng-template #contentVc>
              <ng-content></ng-content>
          </ng-template>

          <ng-container *ngIf="viewInitialized">

              <ng-container *ngIf="!default_template">
                  <ng-container [ngTemplateOutlet]="contentVc"></ng-container>
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

      </ng-container>



  `,
  styles: [`

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormService]
})

@Injectable()
export class FormComponent implements AfterViewChecked, OnDestroy {

  @Input() formGroup: FormGroup;

  @Input() mediaType: String;
  @Output() submit = new EventEmitter();

  @ViewChild('contentVc', { read: ElementRef }) private _contentVcRef;

  controlRoster: string[];

  controls: FormControl[];

  default_template: Boolean;

  viewInitialized: Boolean = false;

  private _subscription: Subscription;

  constructor(private _formSvs: FormService, private cd: ChangeDetectorRef) {
  }

  ngAfterViewChecked(): void {

    if (this.formGroup) {

      this.parseContext();
      this.viewInitialized = true;
      this.cd.detectChanges();
      this.default_template = this._contentVcRef.nativeElement.parentElement.children.length === 0;
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
  }


  parseContext = () => {
    this._formSvs.initialize(this.formGroup);
    this.controlRoster = _.keys(this.formGroup.controls);

    this.controls = _.values(this.formGroup.controls);

    if (this._subscription) this._subscription.unsubscribe();

    this._subscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this), distinctUntilChanged()).subscribe((data: { value: any, instant: boolean }) => {
      if (this.formGroup.valid || data.instant) {
        this.submit.emit(this._formSvs.convertToMediaType(data.value, this.mediaType));
      }


    });
  };

}
