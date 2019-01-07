/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ControlContainer } from './ControlContainer';

import { FormControl } from '@ionar/form';


/**
 * @description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * @publicApi
 */


export abstract class IoControl extends ControlContainer {

  /**
   * @description
   * Tracks the `FormControl` instance bound to the directive.
   */
  public get control(): FormControl {

    return <FormControl>this.root.get(this.path);
  };


  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path(): string[] {

    return this.parent ? [...this.parent.path, this.name] : [];
  }
}
