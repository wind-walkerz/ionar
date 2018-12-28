/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


import { NgControl } from './NgControl';
import { FormGroup } from '@ionar/form';

/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */

export abstract class ControlContainer  {
  /**
   * @description
   * The parent form for the control.
   *
   * @internal
   */
  _parent: ControlContainer | null = null;

  /**
   * @description
   * The name for the control
   */
  name: string | null = null;

  /**
   * @description
   * The top-level FormGroup for this group if present, otherwise null.
   */
  get root(): FormGroup | null {
    return this._parent ? this._parent.root : null;
  }

  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path(): string[] {

    return [this.name, 'controls'];
  }

}
