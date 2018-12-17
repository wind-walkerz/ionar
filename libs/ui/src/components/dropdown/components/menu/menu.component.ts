import {
  Component,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() visible: Boolean = true;
  @Input() template: TemplateRef<any>;

  @ViewChild('tpl') tplRef: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  constructor(public elRef: ElementRef) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
