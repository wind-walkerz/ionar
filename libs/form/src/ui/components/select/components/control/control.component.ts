import { Component, ElementRef, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],

})
export class ControlComponent implements OnInit {
  @Input() show_menu = false;
  @Input() label = null;

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
    this.eRef.nativeElement.focus();
  }

  @HostBinding() tabindex = 0;

}
