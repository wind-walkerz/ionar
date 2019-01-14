import {
  EventEmitter, HostBinding,
  Input, Output
} from '@angular/core';
import { IoAbstractUI } from '@ionar/ui';


export abstract class IoFormFieldUI extends IoAbstractUI {

  @Input() invalid: Boolean = false;
  @Input() disabled: Boolean = false;
  @Input() focused: Boolean = false;
  @Input() readonly: Boolean = false;

  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() enter = new EventEmitter();

  @HostBinding('class.focus')
  get _isFocused() {
    return this.focused;
  }

  @HostBinding('class.invalid')
  get _isInvalid() {
    return this.invalid;
  }

  @HostBinding('class.disabled')
  get _isDisabled() {
    return this.disabled;
  }

  @HostBinding('class.readonly')
  get _isReadonly() {
    return this.readonly;
  }

}
