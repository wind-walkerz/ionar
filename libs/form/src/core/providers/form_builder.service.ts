import { Injectable } from '@angular/core';
import { AbstractControlOptions, FormArrayState, FormControlState, FormGroupState } from '../interfaces/Form';
import { FormGroup } from '../models/FormGroup';
import { FormControl } from '../models/FormControl';
import { FormArray } from '../models/FormArray';
import { AbstractControl } from '../models/AbstractControl';
import _ from 'lodash';


@Injectable({
  providedIn: 'root'
})

export class IonarFormBuilder {

  /**
   * @description
   * Construct a new `FormGroup` instance.
   *
   * @param state A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options options options object for the `FormGroup`. The object can
   * have two shapes:
   *
   * 1) `AbstractControlOptions` object (preferred), which consists of:
   * * `validators`: A synchronous validator function, or an array of validator functions
   * * `asyncValidators`: A single async validator or array of async validator functions
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
   * submit')
   *
   * 2) Legacy options object, which consists of:
   * * `validator`: A synchronous validator function, or an array of validator functions
   * * `asyncValidator`: A single async validator or array of async validator functions
   *
   */
  group = (state: FormGroupState, options?: AbstractControlOptions | null): FormGroup => {
    const controls = <FormGroupState>this._reduceControls(state);
    return new FormGroup(controls, options);
  };

  /**
   * @description
   * Construct a new `FormControl` with the given state, validators and options.
   *
   * @param state A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options options options object for the `FormGroup`. The object can
   * have two shapes:
   *
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
   *   linenums="false" region="disabled-control">
   * </code-example>
   */
  control(state: FormControlState): FormControl {
    return new FormControl(state);
  }

  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options.
   *
   * @param controlsConfig An array of child controls or control configs. Each
   * child control is given an index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   */
  array = (
    state: FormArrayState | FormControlState[], options?: AbstractControlOptions | null
  ): FormArray => {

    const controls = <FormArrayState>this._reduceControls(state);
    return new FormArray(controls, options);
  };

  /** @internal */
  _reduceControls(controlsConfig: FormGroupState | FormArrayState | FormControlState[]): FormGroupState | FormArrayState {
    let controls: FormGroupState | FormArrayState;

    if (_.isPlainObject(controlsConfig)) {
      controls = {};
      _.forOwn(controlsConfig, (c: AbstractControl | FormControlState, name: string) => {
        (<FormGroupState>controls)[name] = this._createControl(c);
      });
    } else {
      controls = [];
      _.each(controlsConfig, (c: AbstractControl | FormControlState) => {
        (<FormArrayState>controls).push(<AbstractControl>this._createControl(c));
      });
    }
    return controls;
  }

  /** @internal */
  _createControl(controlConfig: any): AbstractControl {
    if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
      controlConfig instanceof FormArray) {
      return controlConfig;

    } else {

      return this.control(controlConfig);
    }
  }

}


