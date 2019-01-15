import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from '../../providers/project.service';
import { FormGroup, FormGroupState, IonarFormBuilder } from '@ionar/form';
import Joi from '@ionar/joi'


@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  formGroup: FormGroup;
  formState: FormGroupState;

  project_info;

  project_id: any;


  constructor(
    private cd: ChangeDetectorRef,
    private _projSvs: ProjectService,
    private _fb: IonarFormBuilder
  ) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this._projSvs.getProjectInfo().subscribe(res => {
      this.formState = {
        name: {
          component: 'input',
          props: {
            label: 'Project Name',
            value: res.name
          }
        },
        full_name: {
          component: 'input',
          props: {
            label: 'Client Name',
            value: res.full_name
          }
        },
        project_id: {
          component: 'input',
          props: {
            label: 'Project ID',
            value: this._projSvs.project_id
          },
          options: {
            disabled: true
          }
        },
        email: {
          component: 'input',
          props: {
            label: 'E-mail',
            value: res.email
          },
        schema: Joi.string().email().required()
        },
        phone: {
          component: 'input',
          props: {
            type: 'phone',
            value: res.mobile
          }
        },
        property_name: {
          component: 'input',
          props: {
            value: res.property_name
          }
        },
        city: {
          component: 'input',
          props: {
            value: res.city
          }
        },
        postcode: {
          component: 'input',
          props: {
            value: res.post_code
          }
        },
        status: {
          component: 'input',
          props: {
            value: res.status
          },
          options: {
            disabled: true
          }
        }
      };

      this.formGroup = this._fb.group(this.formState, {
        readonly: true
      });

      this.cd.markForCheck();
    });


  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///


  toggleEditMode = () => {
    this.formGroup.setOptions({
      readonly: !this.formGroup.options.readonly
    });
  };

  onUpdateProjectInfo = formValue => {
    this._projSvs.updateProjectInfo(formValue).subscribe(res => {

      if (res.status_code === 200) this.formGroup.setOptions({
        readonly: true
      });
    });
  };

  onCancelUpdate = () => {
    this.formGroup.reset();
  };

}
