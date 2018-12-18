import {
  Component,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  ViewChild,
  ElementRef,
  Input, ContentChild
} from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  template: `
      <ng-content></ng-content>`,
  styles: [`
      :host {
          display: flex;
          flex-shrink: 0;
      }
  `]
})
export class MenuComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() visible: Boolean = true;
  @Input() template: TemplateRef<any>;

  @ViewChild('tpl') tplRef: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  // @ContentChild()
  constructor(public elRef: ElementRef) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
