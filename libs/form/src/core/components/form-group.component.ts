import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Host,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  SimpleChanges,
  SkipSelf,
  ViewContainerRef
} from '@angular/core';
import { ControlContainer } from '../interfaces/ControlContainer';


export const formGroupProvider: any = {
  provide: ControlContainer,
  useClass: forwardRef(() => FormGroupComponent)
};


@Component({
  selector: 'form-group',
  exportAs: 'form-group',
  template: `
      <ng-content></ng-content>
  `,

  styles: [`

  `],

  providers: [formGroupProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupComponent extends ControlContainer implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  /**
   * @description
   * Tracks the name of the `FormArray` bound to the components. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   */
  @Input() name: any = '';

  @HostBinding('attr.id')
  private get attribute(): string {
    return this.name;
  }

  // @ContentChildren(TemplateRef) private _template: QueryList<TemplateRef<any>>;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  constructor(
    @Optional() @Host() @SkipSelf()  parent: ControlContainer,
    // @Optional() @Host() @SkipSelf() rootParent: FormComponent
    private _vcRef: ViewContainerRef
  ) {
    super();
    // console.log(parent);
  }


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

  }

  ngOnDestroy(): void {
  }


}

