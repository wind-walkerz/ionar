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
export class ClickComponent implements OnInit, OnChanges {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Output() change = new EventEmitter();

  @Input() template: TemplateRef<any>;
  @Input() multiple: Boolean = false;
  @Input() title: any = ''


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }


  ngOnChanges(changes): void {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
