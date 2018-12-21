import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ControlConfig, FormGroup, IonarFormBuilder } from '@ionar/form';
import { AuthService } from '../auth/providers/auth.service';
import { ProfileService } from './profile.service';
import { Form } from '@angular/forms';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  //////////////////         Form  Groups

  profileFormGroup: FormGroup;

  changePassFormGroup: FormGroup;

  private _profileFormConfigs: ControlConfig[] = [];

  private _changePassFormConfigs: ControlConfig[] = [
    {
      type: 'input',
      name: 'current_password',
      props: {
        type: 'password',
        label: 'Current Password'
      },
      validators: {
        required: true
      }
    },
    {
      type: 'input',
      name: 'password',
      props: {
        type: 'password',
        label: 'New Password'
      },
      validators: {
        required: true,
        stringLength: {
          min: 6
        }
      }
    },
    {
      type: 'input',
      name: 'confirm_password',
      props: {
        type: 'password',
        label: 'Confirm Password'
      },
      validators: {
        required: true,
        equalTo: 'password'
      }
    }
  ];

  ////////////////           Variables

  profile;


  show_avatar_preview: Boolean = false;
  avatar_preview: any;

  show_hint: Boolean = false;
  show_payment_modal: Boolean = false;

  MONTHS = [
    {
      value: 1,
      label: 'January'
    },
    {
      value: 2,
      label: 'February'
    },
    {
      value: 3,
      label: 'March'
    },
    {
      value: 4,
      label: 'April'
    },
    {
      value: 5,
      label: 'May'
    },
    {
      value: 6,
      label: 'June'
    },
    {
      value: 7,
      label: 'July'
    },
    {
      value: 8,
      label: 'August'
    },
    {
      value: 9,
      label: 'September'
    },
    {
      value: 10,
      label: 'October'
    },
    {
      value: 11,
      label: 'November'
    },
    {
      value: 12,
      label: 'December'
    }
  ];

  YEARS = function() {

    const currentYear = new Date().getFullYear(), years = [];
    let startYear = 1800;

    while (startYear <= currentYear) {
      years.push({
        value: startYear,
        label: startYear
      });
      startYear++;
    }


    return years.reverse();
  }();

  constructor(
    private authSvs: AuthService,
    private _profileSvs: ProfileService,
    private cd: ChangeDetectorRef,
    private _fb: IonarFormBuilder
  ) {
  }

  ngOnInit() {
    this._profileSvs.getUserProfile().subscribe((res: any) => {
      this.profile = res.data;

      this._profileFormConfigs = [
        {
          type: 'input',
          name: 'email',
          label: 'Email',
          value: res.data.email,
          validators: {
            required: true,
            email: true
          }

        },
        {
          type: 'input',
          name: 'name',
          label: 'Name',
          value: `${res.data.first_name} ${res.data.last_name}`
        },
        {
          type: 'input',
          name: 'phone',
          label: 'Mobile',
          value: res.data.contact_number,
          props: {

            type: 'phone'
          }
        }
      ];

      this.profileFormGroup = this._fb.group(this._profileFormConfigs);


      if (res.data.profile_picture) {
        this.show_avatar_preview = true;
        this.avatar_preview = res.data.profile_picture;
      }
    });


    this.changePassFormGroup = this._fb.group(this._changePassFormConfigs);


  }


  cancelAvatarPreview = () => {
    this.avatar_preview = null;
    this.show_avatar_preview = false;
  };


  onSubmit = formValue => {
    this._profileSvs.updateUserProfile(formValue).subscribe(res => {

    });
  };

  onUploadedAvatar = file => {


    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.avatar_preview = reader.result;

      // need to run CD since file load runs outside of zone

      this.show_avatar_preview = true;
      this.cd.markForCheck();

    };
  };
};
