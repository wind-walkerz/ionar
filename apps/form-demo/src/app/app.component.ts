import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, IonarFormBuilder } from '@ionar/form';
import { HttpClient } from '@angular/common/http';

import { isFormArray, isFormControl, isFormGroup } from '../../../../libs/form/src/core/utils/helpers';


@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;
  isFormControl = isFormControl;
  isFormGroup = isFormGroup;
  isFormArray = isFormArray;

  constructor(
    private _fb: IonarFormBuilder,
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {


    this.formGroup = this._fb.group({
      email: {
        component: 'textarea',
        props: {
          label: 'sdlkfjslk',
          title: 'upload'
        },
        validators: {
          required: true
        },
        options: {
          // hidden: true,
          // hideLabel: true
        }

      }
      // username: this._fb.array([
      //   {
      //     components: 'input',
      //     props: {
      //       placeholder: 'Write your comment...',
      //       value: '1'
      //     }
      //   },
      //   {
      //     components: 'input',
      //     props: {
      //       placeholder: 'Write your comment...',
      //       value: '2'
      //     }
      //   }
      // ]),
      // password: this._fb.group({
      //   pass_1: {
      //     components: 'input'
      //   },
      //   pass_2: {
      //     components: 'input'
      //   }
      // })
    });


  }


  onSubmit = form_data => {
    console.log(form_data);
  };

  onReset = () => {
    this.formGroup.reset({
      email: 'sdfkljsadklf'
    });

  };

  onClear = () => {
    this.formGroup.clear();

  };

  onLog = () => {
    console.log(this.formGroup);
  };

  toggleReadMode = () => {
    this.formGroup.updateOptions({
      readonly: !this.formGroup.options.readonly
    });
  };
}




