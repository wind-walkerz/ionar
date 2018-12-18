import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ControlConfig, FormGroup, IonarFormBuilder } from '@ionar/form';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  formGroup: FormGroup;

  _formConfigs: ControlConfig[] = [];


  constructor(
    private _fb: IonarFormBuilder,
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this._formConfigs = [
      {
        type: 'input',
        name: 'email',
        props: {

          placeholder: 'Write your comment...'
        },
        validators: {
          required: true
        }
      }
    ];

    this.formGroup = this._fb.group(this._formConfigs);

  }


  onSubmit = form_data => {
    console.log(form_data);
  };

  ngAfterViewInit(): void {

    // this.cd.detectChanges();
  }
}




