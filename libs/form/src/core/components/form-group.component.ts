import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ContentChildren, ElementRef,
  forwardRef,
  Host,
  HostBinding,
  OnDestroy,
  OnInit,
  Optional, QueryList,
  SkipSelf, TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { ControlContainer } from '../interfaces/ControlContainer';
import { isEmptyTemplate } from '@ionar/ui';
import { FormComponent } from '../core.component';

import { IoControl } from '../interfaces/IoControl';


export const formGroupProvider: any = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupComponent)
};


@Component({
  selector: 'form-group',
  exportAs: 'form-group',
  template: `
      <ng-container *ngIf="isDefaultTemplate">
          <ng-container
                  *ngFor="let item of root.get(path) | keyvalue"
                  [ngTemplateOutlet]="controlTemplate"
                  [ngTemplateOutletContext]="{$implicit: item, parent: this}"
          ></ng-container>
      </ng-container>
      <ng-container *ngIf="!isDefaultTemplate">
          <ng-content></ng-content>
      </ng-container>
  `,

  styles: [`

  `],

  providers: [formGroupProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupComponent extends ControlContainer implements OnInit, AfterViewInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  isDefaultTemplate: Boolean;

  get controlTemplate(): TemplateRef<any> {
    return (<FormComponent>this.parent).controlTemplate;
  }

  @HostBinding('attr.id')
  private get attribute(): string {
    return this.name;
  }


  @ContentChildren(ControlContainer) private _controlContainerList: QueryList<ControlContainer>;

  @ContentChildren(IoControl) private _ioControlList: QueryList<IoControl>;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  constructor(
    @Optional() @Host() @SkipSelf()  parent: ControlContainer,
    private _vcRef: ViewContainerRef,
    private _elRef: ElementRef,
    cd: ChangeDetectorRef
  ) {
    super(cd);
    this.parent = parent;
  }


  ngOnInit() {
    super.ngOnInit();
  }


  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.isDefaultTemplate = isEmptyTemplate(this._elRef);

    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
  }


}

