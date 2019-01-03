import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';
import { removeHost } from '../../utils';


@Component({
  selector: 'default-content',
  template: ``
})
export class DefaultContentComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  set template(view: {
    template: TemplateRef<any>, context?: any
  }) {
    this._vcRef.createEmbeddedView(view.template, view.context);
  }


  constructor(
    private _elRef: ElementRef,
    private _vcRef: ViewContainerRef
  ) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {
    if (this._vcRef['_view'].parent.parent) {
      this.template = {
        template: this._vcRef['_view'].context.defaultContent,
        context: { $implicit: this._vcRef['_view'].context.$implicit }
      };
    }

    removeHost(this._elRef);
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
