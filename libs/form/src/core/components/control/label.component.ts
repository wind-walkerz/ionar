import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  OnDestroy, Optional, SkipSelf
} from '@angular/core';

import { FormControl } from '../../models/FormControl';

import _ from 'lodash';

import { FormControlState } from '../../interfaces/Form';
import { FormControlComponent } from '../form-control.component';


@Component({
  selector: 'form-label',
  template: `
      {{ label}}
  `,
  styles: [`
      :host {
          display: flex;
          align-items: center;
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.6rem;
          font-weight: 700;
          position: relative
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnDestroy {
  /**
   * @description
   * The parent  for the components
   *
   * @internal
   */
  _parent: FormControlComponent | null = null;

  get label(): string {

    const props = (<FormControlState>this._control.state).props;

    return (props && props.label) ? props.label : _.startCase(this._parent.name);

  }

  private get _control(): FormControl {
    return this._parent.control;
  };


  constructor(
    private cd: ChangeDetectorRef,
    @Optional() @Host() @SkipSelf()  parent: FormControlComponent
  ) {
    this._parent = parent;
  }


  ngOnDestroy(): void {
    this.cd.detach();
  }
}
