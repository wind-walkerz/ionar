import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupState, IonarFormBuilder } from '@ionar/form';
import { AuthService } from '../auth/providers/auth.service';
import { ProfileService } from './profile.service';
import Joi from '@ionar/joi';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  //////////////////         Form  Groups

  profileFormGroup: FormGroup;

  changePassFormGroup: FormGroup;

  private _profileFormConfigs: FormGroupState;

  private _changePassFormConfigs: FormGroupState = {
    current_password: {
      component: 'input',

      props: {
        type: 'password',
        label: 'Current Password'
      },
      schema: Joi.string().required()
    },
    password: {
      component: 'input',
      props: {
        type: 'password',
        label: 'New Password'
      },
      schema: Joi.string().min(6).required()
    },
    confirm_password: {
      component: 'input',
      props: {
        type: 'password',
        label: 'Confirm Password'
      },
      schema: Joi.string().required()
    }
  };

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

      this._profileFormConfigs = {
        email: {
          component: 'input',
          props: {
            label: 'Email',
            value: res.data.email
          },
          schema: Joi.string().email(),
          options: {
            disabled: true,
            excluded: true
          }
        },
        first_name: {
          component: 'input',
          props: {
            label: 'First Name',
            value: `${res.data.first_name}`
          }
        },
        last_name: {
          component: 'input',
          props: {
            label: 'Last Name',
            value: `${res.data.last_name}`
          }

        },
        contact_number: {
          component: 'input',
          props: {
            label: 'Mobile',
            value: res.data.contact_number,
            type: 'phone'
          }
        },
        Design_Style: {
          component: 'input',
          props: {
            value: 1
          },
          options: {
            hidden: true
          }
        }
      };


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


  onUpdateProfile = formValue => {
    this._profileSvs.updateUserProfile(formValue).subscribe(res => {

    });
  };

  onUploadedAvatar = file => {

    const formData = new FormData();

    formData.append('profile_picture', file);

    formData.append('Design_Style', '1');

    this._profileSvs.updateUserProfile(formData).subscribe((res: any) => {

      if (res.status_code === 200) {
        this.show_avatar_preview = true;
        this.avatar_preview = res.data.profile_picture;
      }
    });

  };
};
