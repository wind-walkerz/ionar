import {
  Component, Directive, Input, OnDestroy, OnInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { untilDestroyed } from '@ionar/utility';


@Directive({
  selector: '[ioCollapsible]'
})
export class CollapsibleDirective implements OnInit, OnDestroy {
  @Input() ioCollapsible;
  change$ = new Subject();

  collapsed: Boolean = false;

  customToggler: Boolean = false;

  ngOnInit(): void {
    this.change$.pipe(untilDestroyed(this)).subscribe((collapsed: Boolean) => {
      this.collapsed = collapsed;
    });
  }

  ngOnDestroy(): void {
  }
}

