import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import _ from 'lodash';
import { IoFormFieldUI } from '../../interfaces/IoFormFieldUI';


@Component({
  selector: 'io-input',
  templateUrl: `./input.component.html`,
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputComponent extends IoFormFieldUI implements OnInit, OnChanges {

  ///-----------------------------------------------  Variables   -----------------------------------------------///


  @Input() type = 'text';
  @Input() name = '';
  @Input() placeholder = '';
  @Input() value: any = '';

  @Input() range = [];


  constructor(
    cd: ChangeDetectorRef,
    _elRef: ElementRef
  ) {
    super(cd, _elRef);
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit(): void {
    super.ngOnInit();

    this.setContext(
      {
        type: this.type,
        name: this.name,
        value: this.value,
        placeholder: this.placeholder
      },
      {
        input: this.onChange,
        blur: this.onBlur,
        focus: this.onFocus,
        keydown: this.onKeyDown,
        paste: this.onPaste,
        keypress: this.onKeyPress
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onFocus = () => {
    // this.focused = true;
  };

  onBlur = () => {
    this.blur.emit();
    this.focused = false;
    this.cd.markForCheck();
  };

  onChange = _.debounce(e => {
    e.stopPropagation();

    let value = e.target.value;
    const min = parseInt(this.range[0], 10);
    const max = parseInt(this.range[1], 10);
    if (this.range && this.type === 'number' && !(min <= value && value <= max)) {
      value = e.target.value = this.range[1];
    }

    this.change.emit(value);

  }, 500);

  //  Keyboard & Clipboard Event  //

  onKeyPress = (e: KeyboardEvent) => {
    if (e.keyCode === 13) this.enter.emit();
  };

  onKeyDown = (e: KeyboardEvent) => {
    return (this.type === 'number')
      ? this.onNumberKeyDown(e)
      : (this.type === 'phone')
        ? this.onPhoneKeyDown(e)
        : null;
  };

  onPaste = (e: ClipboardEvent) => {
    return (this.type === 'number')
      ? this.onNumberPaste(e)
      : (this.type === 'phone')
        ? this.onPhonePaste(e)
        : null;
  };


  // Ensure that it is a number from [0-9] no decimal_point

  onPhoneKeyDown = (e: KeyboardEvent) => {
    // Allow
    if (
      e.keyCode === 8 ||      // backspace
      e.keyCode === 9 ||          // Tab
      e.keyCode === 13 ||       // enter
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||      //  Ctrl + A
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||       //  Ctrl + C
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||        //  Ctrl + X
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||        //  Ctrl + V
      (e.keyCode >= 35 && e.keyCode <= 39)                             // home, end, left, right
    ) {
      return;
    }


    // Reject if not a number or numpad
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&       // not number
      (e.keyCode < 96 || e.keyCode > 105)                                     // not numpad
    ) {
      e.preventDefault();
    }

  };

  // Ensure that pasted value is a number or string of number
  onPhonePaste = (e: ClipboardEvent) => {
    if (!/^\d+$/.test(e.clipboardData.getData('Text'))) {
      e.preventDefault();
    }
  };


  // Ensure that it is a  number: integer || decimal
  onNumberKeyDown = (e: KeyboardEvent) => {
    // Allow
    if (
      e.keyCode === 8 ||      // backspace
      e.keyCode === 9 ||          // Tab
      e.keyCode === 13 ||       // enter
      e.keyCode === 188 ||    // comma(",")
      e.keyCode === 110 ||        //   numpad decimal point
      e.keyCode === 190 ||        // period(".")
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||      //  Ctrl + A
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||       //  Ctrl + C
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||        //  Ctrl + X
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||        //  Ctrl + V
      (e.keyCode >= 35 && e.keyCode <= 39)                             // home, end, left, right
    ) {
      return;
    }


    // Reject if not a number or numpad
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&       // not number
      (e.keyCode < 96 || e.keyCode > 105)                                     // not numpad
    ) {
      e.preventDefault();
    }

  };

  // Ensure that pasted value is a string of number: integer || decimal
  onNumberPaste = (e: ClipboardEvent) => {
    if (!/^\d.+$/.test(e.clipboardData.getData('Text'))) {
      e.preventDefault();
    }
  };


}
