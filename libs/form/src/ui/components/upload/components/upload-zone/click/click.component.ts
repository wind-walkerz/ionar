import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { el } from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss']
})
export class ClickComponent implements OnInit, AfterViewInit, OnChanges {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Output() change = new EventEmitter();

  @Input() template: TemplateRef<any>;
  @Input() multiple: Boolean = false;

  @ViewChild('vc', { read: ViewContainerRef }) private _vcRef: ViewContainerRef;
  @ViewChild('default_template', { read: TemplateRef }) private _defaultTplRef: TemplateRef<any>;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    

    if (this.template) {
      this._vcRef.createEmbeddedView(this.template);
    } else {
      this._vcRef.createEmbeddedView(this._defaultTplRef);
    }
  }

  ngOnChanges(changes): void {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
