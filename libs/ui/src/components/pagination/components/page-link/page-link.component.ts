import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  TemplateRef,
  ViewChild,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'page-link',
  templateUrl: './page-link.component.html',
  styleUrls: ['./page-link.component.scss'],
  host: {
    '[class.disabled]': 'disabled'
  }
})
export class PageLinkComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() directionLinks: 'prev' | 'next';
  @Input() boundaryLinks: 'first' | 'last';

  @Input() disabled: boolean = false;
  @Output() change = new EventEmitter();

  @Input() template: TemplateRef<any>;

  @ViewChild('tpl') tpl: TemplateRef<any>;

  @HostListener('click', ['$event'])
  onClick = e => {
    if (!this.disabled) {
      this.change.emit();
    }
  };

  constructor() {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
