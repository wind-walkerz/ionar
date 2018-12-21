import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Output,
  EventEmitter,
  HostBinding,
  ContentChild, AfterViewInit, TemplateRef, ViewChild
} from '@angular/core';
import { CollapseToggleDirective } from '../directives/collapse-toggle.directive';
import { untilDestroyed } from '@ionar/utility';

@Component({
  selector: 'collapse-header',
  exportAs: 'collapse-header',
  template: `    
          <ng-content></ng-content>
  `
})
export class HeaderComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Output() toggle = new EventEmitter();


  @HostListener('click', ['$event'])
  onClick($event) {
    if (!this._toggleDir) {
      this.toggle.emit();
      this.collapsed = !this.collapsed;
    }
  }

  @HostBinding('class.collapsed') collapsed: Boolean = false;

  @ContentChild(CollapseToggleDirective) private _toggleDir: CollapseToggleDirective;
  constructor() {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    if (this._toggleDir) {
      this._toggleDir.toggle.pipe(untilDestroyed(this)).subscribe(() => {
        this.toggle.emit();
        this.collapsed = !this.collapsed;
      });
    }

  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///
}
