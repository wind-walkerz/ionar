/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ControlContainer } from './ControlContainer';
import { FormGroup } from '../models/FormGroup';
import { IoAbstractUI } from '../../../../ui/src/interfaces';


function unimplemented(): any {
  throw new Error('unimplemented');
}

/**
 * @description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * @publicApi
 */


export abstract class IoControl extends IoAbstractUI {
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

    return this._parent ? [...this._parent.path, this.name.toString()] : [];
  }
}
