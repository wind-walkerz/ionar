import {
  ChangeDetectionStrategy,
  Component,
  ElementRef, EventEmitter, HostListener,
  Input, OnChanges,
  OnDestroy,
  OnInit, Output, SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'dropdown-menu',
  template: `
      <ng-content></ng-content>`,
  styles: [`
      :host {
          display: flex;
          flex-shrink: 0;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() visible: Boolean = false;
  @Input() template: TemplateRef<any>;

  visibilityChange$ = new Subject();

  @ViewChild('tpl') tplRef: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  @Output() change = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick(e: Event) {

    if (e.target instanceof HTMLElement) this.change.emit();
  }


  constructor(public elRef: ElementRef) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.visibilityChange$.next(this.visible);
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
