import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  show_avatar_preview: Boolean = false;
  avatar_preview: any;

  constructor(private cd: ChangeDetectorRef) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {

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


}
