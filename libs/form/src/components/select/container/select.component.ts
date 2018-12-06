import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import _ from 'lodash';


@Component({
  selector: 'io-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  show_menu: Boolean = false;
  selected_option: any = null;
  @Input() options: any = null;
  @Input() value = null;
  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Input() invalid: Boolean = false;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
    if (this.value) {
      this.selected_option = _.find(this.options, ['value', this.value.toString()]);
    }
  }

  ///-----------------------------------------------  General Functions   -----------------------------------------------///


  onToggleMenu = () => {
    this.show_menu = !this.show_menu;
  };


  onChange = option => {

    this.options = _.map(this.options, (item: { value: any, label: any, selected: Boolean }) => {
      item.selected = _.isEqual(item, option);
      this.selected_option = item;
      return item;
    });
    this.show_menu = false;

    this.change.emit(this.selected_option.value);

  };

  ///-----------------------------------------------  Host   -----------------------------------------------///

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.show_menu = false;
    }
  }


}
