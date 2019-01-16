import {
  ChangeDetectorRef, ContentChild, ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild, ViewContainerRef
} from '@angular/core';

export interface ComponentContext {
  defaultContent: TemplateRef<any>,
  $implicit: Object
}

export abstract class IoAbstractUI implements OnInit, OnChanges, OnDestroy {


  @Input() template: TemplateRef<any> = null;

  viewInit: Boolean = false;
  private _contextData: Object;

  get context(): ComponentContext {
    return {
      defaultContent: this._defaultTemplate,
      $implicit: this._contextData
    };
  }

  @ViewChild('container', { read: ViewContainerRef }) protected _container: ViewContainerRef;
  @ViewChild('default_template', { read: TemplateRef }) protected _defaultTemplate: TemplateRef<any>;
  @ViewChild('content_template', { read: TemplateRef }) protected _contentTemplate: TemplateRef<any>;


  constructor(
    protected cd: ChangeDetectorRef,
    protected _elRef: ElementRef
  ) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.parseTemplate();
    this.cd.markForCheck();
  }

  ngOnDestroy(): void {
  }


  setContext = (properties: { [key: string]: any }, events?: { [key: string]: Function }) => {
    this._contextData = {
      ...this._contextData,
      ...properties,
      ...events
    };
    this.cd.markForCheck();
  };


  parseTemplate = () => {

    if (!this.template) {
      this.template = this._contentTemplate;

      // if (this._defaultContentComp) {
      //
      //   this._defaultContentComp.template = {
      //     template: this._defaultTemplate,
      //     context: this.context
      //   };
      // }

      // if (isEmptyTemplate(this._elRef) || !this._contentTemplate) {

      this.template = this._defaultTemplate;
      // this.cd.detectChanges();
      // }

      this.viewInit = true;
      this.cd.detectChanges();
    }

    this.viewInit = true;
    this.cd.detectChanges();
  };

}
