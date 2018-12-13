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
  selector: 'io-form',
  template: `
      <ng-container>
          <ng-container
                  *ngFor="let control of control_name_list"
          >
              <form-control [name]="control"></form-control>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormService],
})

@Injectable()
export class FormComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('formGroup') private _formGr: FormGroup;

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
      console.log(this._formGr);
      this.submit.emit(data);
    });
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

  }

  ngOnDestroy(): void {
  }

}
