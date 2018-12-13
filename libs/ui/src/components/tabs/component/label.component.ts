import {
  AfterViewInit,
  Component,
  ContentChild,
  HostBinding, HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewChild, ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'tab-label',
  template: `
      <ng-template #tpl>
          <ng-content></ng-content>
      </ng-template>

      <ng-container *ngIf="text">
          {{text}}
      </ng-container>
      <ng-container #vcRef></ng-container>
  `
})
export class TabLabelComponent implements OnInit, AfterViewInit {

  @Input() text: any;
  @Input() template: TemplateRef<any>;

  @ViewChild('tpl', { read: TemplateRef }) _templateRef: TemplateRef<any>;
  @ViewChild('vcRef', { read: ViewContainerRef }) private _vcRef: ViewContainerRef;

  constructor() {
  }

  ngOnInit() {

    if (this.template) {
      this._vcRef.clear();
      this._vcRef.createEmbeddedView(this.template);
    }

  }

  ngAfterViewInit(): void {

  }
}