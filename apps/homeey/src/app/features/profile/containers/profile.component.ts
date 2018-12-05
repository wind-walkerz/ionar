import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/providers/auth.service';
import { ProfileService } from '../providers/profile.service';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  show_avatar_preview: Boolean = false;
  avatar_preview: any;

  show_hint: Boolean = false;
  show_payment_modal: Boolean = false;

  config = [];

  update_password_config = [];

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
    private profileSvs: ProfileService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {

    this.config = [
      {
        type: 'input',
        input_type: 'email',
        name: 'email',
        label: 'Email',
        validators: ['required']
      },
      {
        type: 'input',
        name: 'name',
        label: 'Name',
        validators: ['required']
      },
      {
        type: 'input',
        input_type: 'number',
        name: 'phone',
        label: 'Mobile>',
        validators: ['required']
      }
    ];

    this.update_password_config = [
      {
        type: 'input',
        input_type: 'password',
        name: 'current_password',
        label: 'Current Password',
        validators: ['required']
      },
      {
        type: 'input',
        input_type: 'password',
        name: 'password',
        label: 'New Password',
        validators: ['required']
      },
      {
        type: 'input',
        input_type: 'password',
        name: 'confirm_password',
        label: 'Confirm Password',
        validators: ['required']
      }
    ];

    this.profileSvs._getUserProfile();
  }


  onUploaded = file_list => {
    console.log(file_list);

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


};
