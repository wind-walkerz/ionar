import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from '../../providers/project.service';
import { ControlConfig, FormGroup, IonarFormBuilder } from '@ionar/form';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  formGroup: FormGroup;
  formState: ControlConfig[] = [];

  show_avatar_preview: Boolean = false;
  avatar_preview: any;

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
      this.formState = [
        {
          type: 'input',
          name: 'name',
          label: 'Project Name',
          value: res.name
        },
        {
          type: 'input',
          name: 'full_name',
          label: 'Client Name',
          value: res.full_name
        },
        {
          type: 'input',
          name: 'project_id',
          label: 'Project ID',
          value: this._projSvs.project_id,
          props: {
            disabled: true
          }
        },
        {
          type: 'input',
          name: 'email',
          label: 'E-mail',
          value: res.email,
          validators: {
            required: true,
            email: true
          }
        },
        {
          type: 'input',
          name: 'phone',
          props: {
            type: 'phone'
          },
          value: res.mobile
        },
        {
          type: 'input',
          name: 'property_name',
          value: res.property_name
        },
        {
          type: 'input',
          name: 'city',
          value: res.city
        },
        {
          type: 'input',
          name: 'postcode',
          value: res.post_code
        },
        {
          type: 'input',
          name: 'status',
          value: res.status,
          props: {
            disabled: true
          }
        }
      ];

      this.formGroup = this._fb.group(this.formState, {
        readonly: true
      });

      this.cd.markForCheck();
    });


  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///


  onUploaded = file_list => {

    if (file_list.length > 0) {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file_list[0]);
      reader.onload = () => {
        this.avatar_preview = reader.result;

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
        this.show_avatar_preview = true;
      };
    }
  };

  cancelAvatarPreview = () => {
    this.avatar_preview = null;
    this.show_avatar_preview = false;
  };


  toggleEditMode = () => {
    this.formGroup.readonly = !this.formGroup.readonly;
  };

  onUpdateProjectInfo = formValue => {
    this._projSvs.updateProjectInfo(formValue).subscribe(res => {

      if (res.status_code === 200) this.formGroup.readonly = true;
    });
  };

  onCancelUpdate = () => {
    this.formGroup.readonly = true;
    this.formGroup.reset();
  };

}
