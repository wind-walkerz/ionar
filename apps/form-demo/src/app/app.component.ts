import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { ControlConfig, FormControl, FormGroup, IonarFormBuilder, ValidationErrors } from '@ionar/form';
import { Observable, timer } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { untilDestroyed } from '@aurora-ngx/ui';
import { environment } from '../../../homeey/src/environments/environment';
import { catchError, debounce, map, switchMap } from 'rxjs/operators';


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

  }


  onSubmit = form_data => {
    console.log(form_data);
  };

  ngAfterViewInit(): void {
    this._formConfigs = [
      {
        type: 'input',
        name: 'email',
        props: {
          // label: '134',
          placeholder: 'Write your comment...'
        },
        validators: {
          required: true
        }
      }
    ];

    this.formGroup = this._fb.group(this._formConfigs);

    this.cd.detectChanges();
  }
}




