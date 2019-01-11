import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  OnChanges,
  OnDestroy,
  OnInit, Optional, SimpleChanges, SkipSelf
} from '@angular/core';

import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { FormControl } from '../../models/FormControl';
import { FormControlComponent } from '../form-control.component';


@Component({
  selector: 'form-feedback',
  template: `

      <ng-container *ngIf="invalid">
          <ng-container *ngFor="let err of control.errors">
              <div class="feedback">{{err.message}}</div>
          </ng-container>

      </ng-container>

  `,
  //language=SCSS
  styles: [`
      :host {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
          color: #f5222d;
          font-size: 1.2rem;
          margin-top: 0.5rem;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent implements OnInit, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  /**
   * @description
   * The parent  for the components
   *
   * @internal
   */
  _parent: FormControlComponent | null = null;

  get control(): FormControl {
    return this._parent.control;
  };

  public get invalid(): Boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched || this._parent.root.submitted);
  };

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private cd: ChangeDetectorRef,
    @Optional() @Host() @SkipSelf()  parent: FormControlComponent
  ) {
    this._parent = parent;
  }

  ngOnInit() {

    this._parent.root.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
      this.cd.markForCheck();
    });

    this._parent.root.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
      this.cd.markForCheck();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///


}
