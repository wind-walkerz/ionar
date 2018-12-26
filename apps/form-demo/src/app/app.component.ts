import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, IonarFormBuilder } from '@ionar/form';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;

  _formConfigs;


  constructor(
    private _fb: IonarFormBuilder,
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this._formConfigs = {
      email: new FormControl({
        type: 'input',
        value: '023984092',
        props: {
          placeholder: 'Write your comment...'
        },
        validators: {
          required: true
        }
      }),
      array: new FormGroup({
        username: new FormControl({
          type: 'input'
        })
      })
    };

    this.formGroup = this._fb.group(this._formConfigs, {});

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
    this.formGroup.configuration = {
      readonly: !this.formGroup.configuration.readonly
    };
  };
}




