import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormService } from './providers/form.service';
import _ from 'lodash';

import { FormGroup } from './models/FormGroup';
import { untilDestroyed } from '@ionar/utility';

@Component({
  selector: 'ionar-form',
  template: `
      <ng-container>
          <ng-container *ngIf="default_template; else custom_tpl">
              <ng-container
                      *ngFor="let control of control_name_list"
              >
                  <control [name]="control"></control>
              </ng-container>
          </ng-container>

          <ng-template #custom_tpl>
              <ng-content></ng-content>
          </ng-template>
      </ng-container>

  `,
  styles: [`
      ::ng-deep control {
          display: grid;
          grid-template-areas: "label   field" ". feedback";
          grid-template-columns: 3fr 7fr;
          grid-template-rows: 1fr auto;
          margin-bottom: 1rem;
          height: auto;
          visibility: visible;
          z-index: 99999999;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@Injectable()
export class FormComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('formGroup') private _formGr: FormGroup;

  @Input() default_template: Boolean = false;
  @Input() media_type: String;
  @Input() show_feedback: Boolean = true;
  @Input() class;
  @Input() id;

  @Output() submit = new EventEmitter();

  control_name_list: string[] = [];

  constructor(private _formSvs: FormService) {
  }

  ngOnInit() {

    this._formSvs.group(this._formGr);

    this.control_name_list = _.keys(this._formGr.controls);


    //
    this._formGr.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {

      if (this._formGr.valid) {
        this.submit.emit(data);
      }
    });
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

  }

  ngOnDestroy(): void {
  }

}
