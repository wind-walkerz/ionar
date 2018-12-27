import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import { FormService } from './providers/form.service';

import { FormGroup } from './models/FormGroup';
import { FormControl } from './models/FormControl';

import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FieldTemplateDirective } from './directives/field-template.directive';
import { AbstractControl } from './models/AbstractControl';


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
                  <ng-container *ngFor="let name of controls ">

                      <form-control
                              [name]="name"
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

export class FormComponent implements AfterViewChecked, OnDestroy {

  @Input() formGroup: FormGroup;

  @Input() mediaType: String;
  @Output() submit = new EventEmitter();

  @ViewChild('contentVc', { read: ElementRef }) protected _contentVcRef;

  @ContentChildren(FieldTemplateDirective) _fieldTemplateDirList;

  controls: String[] = [];

  default_template: Boolean;

  viewInitialized: Boolean = false;

  protected _subscription: Subscription;

  constructor(protected _formSvs: FormService, protected cd: ChangeDetectorRef) {
  }

  ngAfterViewChecked(): void {

    if (this.formGroup) {

      this.parseContext();
      this.viewInitialized = true;
      this.cd.detectChanges();
      if (!this.default_template) {
        this.default_template = this._contentVcRef.nativeElement.parentElement.children.length === 0;
      }
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
  }


  parseContext = () => {
    this._formSvs.initialize(this.formGroup);

    this.controls = this._formSvs.mergeControls(this.formGroup.controls);

    if (this._subscription) this._subscription.unsubscribe();

    this._subscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this), distinctUntilChanged()).subscribe((data: { value: any, instant: boolean }) => {

      if (this.formGroup.valid || data.instant) {

        this.submit.emit(this._formSvs.convertToMediaType(data.value, this.mediaType));
      }


    });
  };

}
