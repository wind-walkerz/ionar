import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  Host,
  HostBinding,
  Optional,
  QueryList,
  SkipSelf,
  TemplateRef
} from '@angular/core';

import { ControlContainer } from '../interfaces/ControlContainer';
import { FormComponent } from '../core.component';
import { isEmptyTemplate } from '@ionar/ui';


export const formArrayProvider: any = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayComponent)
};

@Component({
  selector: 'form-array',
  exportAs: 'form-array',
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
  providers: [formArrayProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormArrayComponent extends ControlContainer implements AfterViewInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  isDefaultTemplate: Boolean;

  get controlTemplate(): TemplateRef<any> {
    return (<FormComponent>this.parent).controlTemplate;
  }

  @HostBinding('attr.id')
  private get attribute(): string {
    return this.name;
  }

  @ContentChildren(ControlContainer) private _controlContainers: QueryList<ControlContainer>;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    @Optional() @Host() @SkipSelf()  parent: ControlContainer,
    private _elRef: ElementRef,
    cd: ChangeDetectorRef
  ) {
    super(cd);

    this.parent = parent;
  }


  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.isDefaultTemplate = isEmptyTemplate(this._elRef);

    this.cd.detectChanges();
  }

}


