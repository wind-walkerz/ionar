import {
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  Host,
  HostListener,
  OnInit,
  Optional,
  Output,
  SkipSelf, TemplateRef
} from '@angular/core';
import { CollapsibleDirective } from './collapsible.directive';


@Directive({
  selector: '[collapseToggle]'
})
export class ToggleDirective implements OnInit {

  private _parent: CollapsibleDirective;

  @HostListener('click', ['$event'])
  onClick($event) {
    this._parent.change$.next(!this._parent.collapsed);
  }

  constructor(
    @Optional() @Host() @SkipSelf() parent: CollapsibleDirective,
    private cd: ChangeDetectorRef,
  ) {
    this._parent = parent;
  }

  ngOnInit(): void {
    this._parent.customToggler = true;
  }
}
