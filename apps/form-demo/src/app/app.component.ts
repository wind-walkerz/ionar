import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ControlConfig, FormGroup, IonarFormBuilder } from '@ionar/form';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';


@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {

  formGroup: FormGroup;

  _formConfigs: ControlConfig[] = [];


  secondFormGroup: FormGroup


  constructor(
    private _fb: IonarFormBuilder,
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {


  }


  onSubmit = form_data => {
    console.log(form_data);
  };

  ngAfterViewInit(): void {
    this._formConfigs = [
      {
        type: 'input',
        name: 'email',
        value: '023984092',
        props: {
          placeholder: 'Write your comment...'
        },
        validators: {
          required: true
        }
      }
    ];

    this.formGroup = this._fb.group(this._formConfigs);

    this.secondFormGroup = this._fb.group(this._formConfigs)
    this.cd.detectChanges();
  }

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
    this.formGroup.readonly = !this.formGroup.readonly;
  };
}




