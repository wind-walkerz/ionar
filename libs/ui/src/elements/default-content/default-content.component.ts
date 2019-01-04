import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewContainerRef,
  TemplateRef,
  ChangeDetectorRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { removeHost } from '../../utils';
import { ComponentContext } from '@ionar/ui';


@Component({
  selector: 'default-content',
  template: ``
})
export class DefaultContentComponent implements OnInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() context: ComponentContext;

  isHostRemoved: Boolean = false;

  set template(view: {
    template: TemplateRef<any>, context?: any
  }) {
    // console.log(view);
    this._vcRef.clear();
    this._vcRef.createEmbeddedView(view.template, view.context);
  }


  constructor(
    private _elRef: ElementRef,
    private _vcRef: ViewContainerRef,
    private cd: ChangeDetectorRef
  ) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit(): void {


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.context) {
      this.template = {
        template: this._vcRef['_view'].context.defaultContent,
        context: { $implicit: this.context }
      };


      if (!this.isHostRemoved) {
        removeHost(this._elRef);
      }
      this.isHostRemoved = true;
      this.cd.detectChanges();
      console.log(this.isHostRemoved)
    }

  }


  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
