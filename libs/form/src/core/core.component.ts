import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormService } from './providers/form.service';
import { FormGroup } from './models/FormGroup';
import { untilDestroyed } from '@ionar/utility';
import { distinctUntilChanged } from 'rxjs/operators';

import { ControlContainer } from './interfaces/ControlContainer';
import { ReactiveErrors } from './utils/reactive_errors';

import { isFormArray, isFormControl, isFormGroup } from './utils/helpers';

import { IonarTemplateDirective, isEmptyTemplate } from '@ionar/ui';
import { JoiSchema } from './interfaces/Validator';


export const formProvider: any = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormComponent)
};

@Component({
  selector: 'io-form',
  template: `
      <ng-container>

          <ng-container *ngIf="!default_template">
              <ng-content></ng-content>
          </ng-container>


          <ng-container *ngIf="default_template">
              <ng-container
                      *ngFor="let item of form.controls | keyvalue"
                      [ngTemplateOutlet]="controlTemplate"
                      [ngTemplateOutletContext]="{$implicit: item, parent: this}"
              ></ng-container>
          </ng-container>

          <ng-template #controlTemplate let-data let-parent="parent">
              <ng-container *ngIf="isFormControl(data.value)">
                  <form-control [parent]="parent" [name]="data.key"></form-control>
              </ng-container>

              <ng-container *ngIf="isFormArray(data.value)">
                  <form-array
                          [name]="data.key"
                          [parent]="parent"
                  >

                  </form-array>
              </ng-container>

              <ng-container *ngIf="isFormGroup(data.value)">
                  <form-group
                          [name]="data.key"
                          [parent]="parent"
                  >
                  </form-group>
              </ng-container>
          </ng-template>

      </ng-container>
  `,
  styles: [`

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormService, formProvider]
})

export class FormComponent extends ControlContainer implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  /**
   * @description
   * Tracks the `FormGroup` bound to this components.
   */
  @Input('formGroup') form: FormGroup = null;

  @Input() mediaType: String;

  /**
   * @description
   * Emits an event when the form submission has been triggered.
   */
  @Output() submit = new EventEmitter();

  @ViewChild('contentVc', { read: ViewContainerRef }) private _contentVcRef: ViewContainerRef;

  @ViewChild('controlTemplate') controlTemplate: TemplateRef<any>;

  @ContentChildren(IonarTemplateDirective) ioTemplateDirList: QueryList<IonarTemplateDirective>;

  // @ContentChildren(ControlContainer) private _controlContainerList: QueryList<ControlContainer>;
  //
  // @ContentChildren(IoControl) private _ioControlList: QueryList<IoControl>;

  default_template: Boolean;

  isFormControl = isFormControl;
  isFormGroup = isFormGroup;
  isFormArray = isFormArray;

  constructor(
    private _formSvs: FormService,
    private _elRef: ElementRef,
    cd: ChangeDetectorRef
  ) {
    super(cd);
  }


  ngOnInit(): void {
    super.ngOnInit();
    this._checkFormPresent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    this._checkFormPresent();

    if (!changes.form.previousValue && changes.form.currentValue) {

      this.form.ngSubmit
        .pipe(untilDestroyed(this), distinctUntilChanged())
        .subscribe((data: { value: any, instant: boolean }) => {

          if (this.form.valid || data.instant) {

            this.submit.emit(this._formSvs.convertToMediaType(data.value, this.mediaType));
          }

        });

    }
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.default_template = isEmptyTemplate(this._elRef);

    this.cd.detectChanges();
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
   * Returns an array representing the path to this group. Because this components
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
