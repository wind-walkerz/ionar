import {
  ChangeDetectorRef, ElementRef, EventEmitter, HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';


import { IoAbstractUI } from '../../../../ui/src/interfaces';


export abstract class IoFormFieldUI extends IoAbstractUI implements OnInit, OnChanges, OnDestroy {

  @Input() invalid: Boolean = false;
  @Input() disabled: Boolean = false;
  @Input() focused: Boolean = false;
  @Input() readonly: Boolean = false;

  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() enter = new EventEmitter();

  @HostBinding('class.focus')
  protected get _isFocused() {
    return this.focused;
  }

  @HostBinding('class.invalid')
  protected get _isInvalid() {
    return this.invalid;
  }

  @HostBinding('class.disabled')
  protected get _isDisabled() {
    return this.disabled;
  }

  @HostBinding('class.readonly')
  protected get _isReadonly() {
    return this.readonly;
  }

}
