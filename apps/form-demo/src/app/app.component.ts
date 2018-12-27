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
      control_array: this._fb.array([
        {
          component: 'input',
          props: {
            value: '1'
          }
        },
        {
          component: 'input',
          props: {
            value: '2'
        }
        }
      ]),

      group_array: this._fb.array([
        this._fb.group({
          group_array_child_1: {
            component: 'input',
            props: {
              value: '3'
            }
          },
          group_array_child_2: {
            component: 'input',
            props: {
              value: '4'
            }
          }
        })
      ]),

      nested_control_array_inside_group_array: this._fb.array([
        this._fb.group({
          group_array_child_3: {
            component: 'input',
            props: {
              value: '5'
            }
          },
          group_array_child_4: this._fb.array([
            {
              component: 'input',
              props: {
                value: '6'
              }
            },
            {
              component: 'input',
              props: {
                value: '7'
              }
            }
          ]),
          group_array_child_5: this._fb.group({
            nestedgroup_array_child_1: {
              component: 'input',
              props: {
                value: '8'
              }
            },
            nestedgroup_array_child_2: {
              component: 'input',
              props: {
                value: '9'
              }
            }
          })
        })
      ])

    });


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




