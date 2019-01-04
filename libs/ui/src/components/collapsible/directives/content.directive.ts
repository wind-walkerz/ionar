import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, Directive,
  Host,
  HostBinding,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  SkipSelf, TemplateRef, ViewContainerRef
} from '@angular/core';
import { CollapsibleDirective } from './collapsible.directive';
import { untilDestroyed } from '@ionar/utility';
import { el } from '@angular/platform-browser/testing/src/browser_util';


@Directive({
  selector: '[collapseContent]'
})
export class ContentDirective implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  set collapsed(collapsed: Boolean) {
    if (collapsed) {
      this._vcRef.clear();
    } else {
      this._vcRef.createEmbeddedView(this._templateRef);
    }
  }

  private _parent: CollapsibleDirective;


  constructor(
    @Optional() @Host() @SkipSelf() parent: CollapsibleDirective,
    private cd: ChangeDetectorRef,
    private _vcRef: ViewContainerRef,
    private _templateRef: TemplateRef<any>
  ) {
    this._parent = parent;
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {
    this._vcRef.clear();
    this._parent.change$.pipe(untilDestroyed(this)).subscribe((collapsed: Boolean) => {
      this.collapsed = collapsed;
    });

  }

  ngOnDestroy(): void {
  }


}
