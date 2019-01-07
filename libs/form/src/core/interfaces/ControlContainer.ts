/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


import { FormGroup } from '../models/FormGroup';
import { AfterViewInit, ChangeDetectorRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { trim } from 'lodash';

/**
 * @description
 * A base class for directives that contain multiple registered instances of `IoControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */

export abstract class ControlContainer implements OnInit, OnChanges, AfterViewInit {
  /**
   * @description
   * The parent form for the control.
   *
   * @internal
   */
  private _parent: ControlContainer | null = null;

  get parent(): ControlContainer | null {
    return this._parent;
  }

  @Input('parent') set parent(value: ControlContainer) {
    if (value instanceof ControlContainer) this._parent = value;

  }

  /**
   * @description
   * Tracks the name of the Control bound to the components. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   */

  private _name: string | null = null;

  get name(): string | null {
    return this._name;
  }


  @Input() set name(name: string) {
    this._name = trim(name);
  };


  /**
   * @description
   * The top-level FormGroup for this group if present, otherwise null.
   */
  get root(): FormGroup | null {
    return this.parent ? this.parent.root : null;
  }

  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path(): string[] {

    return this.parent ? [...this.parent.path, this.name, 'controls'] : [this.name, 'controls'];
  }


  constructor(public cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit(): void {
  }

}
