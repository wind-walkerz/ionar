import { AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';
import { LabelDirective } from './directives/label.directive';
import { ContentDirective } from './directives/content.directive';

@Component({
  selector: 'tab',
  template: `

  `
})
export class TabComponent implements OnInit, AfterViewInit {
  @ContentChild(LabelDirective) label: LabelDirective;
  @ContentChild(ContentDirective) content: ContentDirective;

  active: Boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }
}