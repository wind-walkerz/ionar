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
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormService } from './providers/form.service';
import { FormGroup } from './models/FormGroup';
import { untilDestroyed } from '@ionar/utility';
import { distinctUntilChanged } from 'rxjs/operators';

import { ControlContainer } from './interfaces/ControlContainer';
import { ReactiveErrors } from './utils/reactive_errors';

import { isFormControl } from './utils/helpers';

import { ControlTemplateDirective } from './directives/control-template.directive';
import { isEmptyTemplate } from '@ionar/ui';

import _ from 'lodash';

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
              <ng-container *ngFor="let item of form.controls | keyvalue">
                  <ng-container *ngIf="isFormControl(item.value)">
                      <form-control [name]="item.key"></form-control>
                  </ng-container>
              </ng-container>
          </ng-container>

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

  @ContentChildren(ControlTemplateDirective) controlTemplateDirList: QueryList<ControlTemplateDirective>;

  @ContentChildren(ControlContainer) private _controlContainers: QueryList<ControlContainer>;


  controlNames: String[] = [];

  default_template: Boolean;

  isFormControl = isFormControl;

  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef,
    private _elRef: ElementRef
  ) {
    super();
  }


  ngOnInit(): void {

    this._checkFormPresent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._checkFormPresent();

    if (!changes.form.previousValue && changes.form.currentValue) {

      this.form.ngSubmit
        .pipe(untilDestroyed(this), distinctUntilChanged())
        .subscribe((data: { value: any, instant: boolean }) => {

          if (this.form.valid || data.instant) {

            this.submit.emit(this._formSvs.convertToMediaType(data.value, this.mediaType));
          }

        });


      this.controlNames = this._formSvs.mergeControls(this.form.controls);


    }
  }

  ngAfterViewInit(): void {
    this.default_template = isEmptyTemplate(this._elRef);
    console.log(this._controlContainers)
    _.each(this._controlContainers.toArray(), (container: ControlContainer) => {
          if(!(container instanceof FormComponent)) {
            container._parent = this
          }
    });

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
