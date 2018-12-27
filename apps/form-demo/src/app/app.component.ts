import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, IonarFormBuilder } from '@ionar/form';
import { HttpClient } from '@angular/common/http';
import { FormArray } from '../../../../libs/form/src/core/models/FormArray';


@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;


  constructor(
    private _fb: IonarFormBuilder,
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {


    this.formGroup = this._fb.group({
      email: {
        component: 'input',
        props: {
          placeholder: 'Write your comment...',
          value: '023984092'
        },
        validators: {
          required: true
        },
        options: {
          hidden: false
        }

      },
      username: this._fb.array([
        {
          component: 'input',
          props: {
            placeholder: 'Write your comment...',
            value: '1'
          }
        },
        {
          component: 'input',
          props: {
            placeholder: 'Write your comment...',
            value: '2'
          }
        }
      ])
    });


    (<FormArray>this.formGroup.get('username')).push(this._fb.control({
      component: 'input',
      props: {
        placeholder: 'Write your comment...',
        value: '3'
      }
    }));

    (<FormArray>this.formGroup.get('username')).insert(1, this._fb.control({
      component: 'input',
      props: {
        placeholder: 'Write your comment...',
        value: '8'
      }
    }));

    (<FormArray>this.formGroup.get('username')).setControl(1, this._fb.control({
      component: 'input',
      props: {
        value: 1039
      }
    }));

    (<FormArray>this.formGroup.get('username')).removeAt(2);


    console.log(this.formGroup);
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




