import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  OnChanges,
  OnDestroy,
  OnInit, Optional,
  SimpleChanges, SkipSelf, TemplateRef
} from '@angular/core';

import { FormService } from '../../providers/form.service';
import { FormControlComponent } from '../form-control.component';


@Component({
  selector: 'form-field',
  template: `
      <ng-container
              dynamic_field
              [name]="_parent.name"
              [control]="_parent.control"
              [root]="_parent.root"
              [events]="{
                    change: onChanged,
                    blur: onTouched,
                    enter: onEntered
              }"


      >
      </ng-container>
  `,

  styles: [`
      :host {
          display: flex;
          width: 100%;
          height: 100%;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  /**
   * @description
   * The parent  for the component
   *
   * @internal
   */
  _parent: FormControlComponent | null = null;

  template: TemplateRef<any>;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  constructor(
    private cd: ChangeDetectorRef,
    @Optional() @Host() @SkipSelf()  parent: FormControlComponent
  ) {

    this._parent = parent;
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onChanged = e => {
    this._parent.control.setValue(e);
  };

  onTouched = () => {
    this._parent.control.markAsTouched();
  };

  onEntered = () => {
    // this.formSvs._onEntered()
    // if (this.name === 'password') this.focus = true;
  };


}
