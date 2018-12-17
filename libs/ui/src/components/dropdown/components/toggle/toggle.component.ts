import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
  TemplateRef, ViewContainerRef, ElementRef, ComponentRef, Input
} from '@angular/core';

import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'dropdown-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Output() change = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    this.change.emit();
  }

  @Input() template: TemplateRef<any>;

  @ViewChild('tpl') tplRef: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  constructor() {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
