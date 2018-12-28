import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter, forwardRef,
  Input, OnChanges,
  OnDestroy, OnInit,
  Output, SimpleChanges,
  ViewChild, ViewContainerRef
} from '@angular/core';
import { FormService } from './providers/form.service';

import { FormGroup } from './models/FormGroup';
import { FormControl } from './models/FormControl';

import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { distinctUntilChanged } from 'rxjs/operators';
import { FieldTemplateDirective } from './directives/field-template.directive';

import { ControlContainer } from './interfaces/ControlContainer';
import { ReactiveErrors } from './utils/reactive_errors';

import { isFormArray, isFormGroup, isFormControl } from './utils/helpers';


export const formProvider: any = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormComponent)
};

@Component({
  selector: 'io-form',
  template: `

        <ng-content></ng-content>

      <ng-container>

          <!--<ng-container #contentVc>-->
          <!--<ng-content></ng-content>-->
          <!--</ng-container>-->

          <!--<ng-container *ngIf="!default_template">-->
          <!--<ng-content></ng-content>-->
          <!--</ng-container>-->

          <!--<ng-container *ngIf="default_template">-->
          <!--<ng-container *ngFor="let item of form.controls | keyvalue">-->
          <!--<ng-container *ngTemplateOutlet="abstractControl;context: {data:item}"></ng-container>-->
          <!--</ng-container>-->
          <!--</ng-container>-->


          <!--<ng-template #formGroup let-data="data">-->
          <!--<form-group [name]="data.key">-->
          <!--<ng-container *ngFor="let item of data.value.controls | keyvalue">-->
          <!--<ng-container *ngTemplateOutlet="abstractControl;context: {data:item}"></ng-container>-->
          <!--</ng-container>-->
          <!--</form-group>-->
          <!--</ng-template>-->

          <!--<ng-template #formArray let-data="data">-->
          <!--<form-array [name]="data.key">-->
          <!--<ng-container *ngFor="let item of data.value.controls; let i = index">-->
          <!--<ng-container-->
          <!--*ngTemplateOutlet="abstractControl;context: {data:{key: i, value: item}}"></ng-container>-->
          <!--</ng-container>-->
          <!--</form-array>-->
          <!--</ng-template>-->

          <!--<ng-template #abstractControl let-data="data">-->
          <!--<ng-container *ngIf="isFormControl(data.value)">-->
          <!--<form-control [name]="data.key"></form-control>-->
          <!--</ng-container>-->

          <!--<ng-container *ngIf="isFormArray(data.value)">-->

          <!--<ng-container *ngTemplateOutlet="formArray;context: {data: data}">-->

          <!--</ng-container>-->

          <!--</ng-container>-->

          <!--<ng-container *ngIf="isFormGroup(data.value)">-->

          <!--<ng-container *ngTemplateOutlet="formGroup;context: {data: data}">-->

          <!--</ng-container>-->

          <!--</ng-container>-->

          <!--</ng-template>-->

      </ng-container>



  `,
  styles: [`

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [FormService]
})

export class FormComponent extends ControlContainer implements OnInit, OnChanges, OnDestroy {

  /**
   * @description
   * Tracks the `FormGroup` bound to this component.
   */
  @Input('formGroup') form: FormGroup = null;

  @Input() mediaType: String;

  /**
   * @description
   * Emits an event when the form submission has been triggered.
   */
  @Output() submit = new EventEmitter();

  @ViewChild('contentVc', { read: ViewContainerRef }) protected _contentVcRef: ViewContainerRef;

  @ContentChildren(FieldTemplateDirective) _fieldTemplateDirList;

  controlNames: String[] = [];

  default_template: Boolean;

  isFormControl = isFormControl;
  isFormGroup = isFormGroup;
  isFormArray = isFormArray;

  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef
  ) {
    super();
  }


  ngOnInit(): void {

    this._checkFormPresent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._checkFormPresent();

    if (!changes.form.previousValue && changes.form.currentValue) {

      console.log(this.form);

      this.form.ngSubmit
        .pipe(untilDestroyed(this), distinctUntilChanged())
        .subscribe((data: { value: any, instant: boolean }) => {

          if (this.form.valid || data.instant) {

            this.submit.emit(this._formSvs.convertToMediaType(data.value, this.mediaType));
          }

        });


      // this.default_template = !this._contentVcRef.element.nativeElement.nextElementSibling;

      this.controlNames = this._formSvs.mergeControls(this.form.controls);

      // this._contentVcRef.clear();
    }
  }

  ngOnDestroy(): void {
  }

  /**
   * @description
   * Returns the `FormGroup` bound to whole module.
   */
  get root(): FormGroup {
    return this.form;
  }


  /**
   * @description
   * Returns an array representing the path to this group. Because this component
   * always lives at the top level of a form, it always an empty array.
   */
  get path(): string[] {
    return [];
  }

  private _checkFormPresent() {
    if (!this.form) {
      ReactiveErrors.missingFormException();
    }
  }

}
