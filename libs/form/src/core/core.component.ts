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
          grid-template-columns: 30% 70%;
          grid-template-rows: 5fr 5fr;
          margin-bottom: 1rem;
          height: auto;
          min-height: 6rem;
          visibility: visible;
          z-index: 99999999;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@Injectable()
export class FormComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() formGroup: FormGroup;

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

    this._formSvs.group(this.formGroup);

    this.control_name_list = _.keys(this.formGroup.controls);


    //
    // this.formGrDir.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
    //     if (data instanceof Event) {
    //         data.stopPropagation();
    //     } else if (this.form.valid) {
    //         this.submit.emit(data);
    //     }
    // })
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

  }

  ngOnDestroy(): void {
  }

}
