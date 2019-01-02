import {
  ChangeDetectorRef, ContentChild, ElementRef, EventEmitter, HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges,
  TemplateRef,
  ViewChild, ViewContainerRef
} from '@angular/core';
import _ from 'lodash';
import { isEmpty } from 'rxjs/operators';
import { isEmptyTemplate } from '../utils';
import { DefaultContentComponent } from '@ionar/ui';

export interface ComponentContext {
  defaultContent: TemplateRef<any>,
  $implicit: Object
}

export abstract class IoAbstractUiComponent implements OnInit, OnChanges, OnDestroy {


  @Input() template: TemplateRef<any> = null;

  public context: ComponentContext;


  @ViewChild('container', { read: ViewContainerRef }) protected _container: ViewContainerRef;
  @ViewChild('default_template', { read: TemplateRef }) protected _defaultTemplate: TemplateRef<any>;
  @ViewChild('content_template', { read: TemplateRef }) protected _contentTemplate: TemplateRef<any>;

  @ContentChild(DefaultContentComponent) protected _defaultContentComp: DefaultContentComponent;

  constructor(
    protected cd: ChangeDetectorRef,
    protected _elRef: ElementRef
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getComponentContext();

    if (!this.template) {
      this.template = this._contentTemplate;

      this._defaultContentComp.template = {
        template: this._defaultTemplate,
        context: this.context
      };

      this.cd.detectChanges();

      if (isEmptyTemplate(this._elRef)) {
        this.template = this._defaultTemplate;
        this.cd.detectChanges();
      }
    }
  }

  ngOnDestroy(): void {
  }


  setContext = (properties: { [key: string]: any }, events: { [key: string]: Function }) => {
    this.context['$implicit'] = {
      ...properties,
      ...events
    };
  };


  getComponentContext = () => {

    this.context = _.assign(this.context, {
      defaultContent: this._defaultTemplate
    }, {});
  };
}