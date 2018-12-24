import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'io-input',
  templateUrl: `./input.component.html`,
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.disabled]': 'disabled',
    '[class.readonly]': 'readonly'
  }
})

export class InputComponent implements OnInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///


  @Input() type = '';
  @Input() name = '';
  @Input() placeholder = '';
  @Input() value: any = null;


  @Input() invalid: Boolean = false;
  @Input() disabled: Boolean = false;
  @Input() range = [];
  @Input() readonly: Boolean = false;

  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() enter = new EventEmitter();

  @Input() template: TemplateRef<any>;

  @HostBinding('class.focus') host_focus: Boolean = false;
  @HostBinding('class.invalid') host_invalid: Boolean = false;


  templateContext;

  constructor(private cd: ChangeDetectorRef) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit(): void {

    this.templateContext = {
      props: {
        value: this.value,
        type: this.type,
        name: this.name,
        placeholder: this.placeholder,
        invalid: this.invalid,
        disabled: this.disabled,
        range: this.range,
        readonly: this.readonly
      },
      events: {
        change: this.change,
        blur: this.blur,
        enter: this.enter,
        keydown: this.onKeyDown,
        keypress: this.onKeyPress,
        paste: this.onPaste
      }
    };

    this.host_invalid = this.invalid;

    this.cd.markForCheck();
  }

  ngOnChanges(): void {
    this.host_invalid = this.invalid;
    this.cd.markForCheck();
  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onFocus = () => {
    this.host_focus = true;
  };

  onBlur = () => {
    this.blur.emit();
    this.host_focus = false;
    this.cd.markForCheck();
  };

  onChange = _.debounce(e => {
    e.stopPropagation();
    console.log(e.target.value);
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
