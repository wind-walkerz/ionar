import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'tab-content',
  template: `
      <ng-template #content>
          <ng-content></ng-content>
      </ng-template>
    
    <ng-container #vcRef>
        
    </ng-container>
  `
})
export class TabContentComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() template: TemplateRef<any>;
  @ViewChild('content', { read: TemplateRef }) _templateRef: TemplateRef<any>;
  @ViewChild('vcRef', {read: ViewContainerRef}) private _vcRef: ViewContainerRef

  constructor() {
  }

  ngOnInit() {
    this.createView();
  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes): void {
    this.createView();
  }


  createView = () => {

    if (this.template) {
      this._vcRef.clear();
      this._vcRef.createEmbeddedView(this.template);
    }
  };

}