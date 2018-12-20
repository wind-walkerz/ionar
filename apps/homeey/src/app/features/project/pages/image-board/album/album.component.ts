import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from '../../../providers/project.service';
import _ from 'lodash';
import { FormGroup, IonarFormBuilder } from '@ionar/form';


@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  albums = [];

  isCreateAlbum: Boolean = false;

  private _baseLimitRegister: number = 11;

  formGroup: FormGroup;

  constructor(
    private cd: ChangeDetectorRef,
    private _projSvs: ProjectService,
    private _fb: IonarFormBuilder
  ) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {

    this.formGroup = this._fb.group([{
      type: 'input',
      name: 'name',
      props: {
        hideLabel: true
      },
      validators: {
        required: 'Please insert album name!'
      }
    },
      {
        type: 'input',
        name: 'project_id',
        value: this._projSvs.project_id,
        props: {
          hidden: true
        }
      }]);

    this.getAlbumList();
  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

  toggleShowAll = album => {
    this.albums[_.findIndex(this.albums, album)] = this.getAlbumData(album, !album.isShowAll);

  };

  getAlbumList = () => {
    this._projSvs.getAlbumList().subscribe(res => {

      this.albums = _.map(res.data, (album: any) => this.getAlbumData(album));

      this.cd.markForCheck();
    });
  };

  getAlbumData = (album, isShowAll: Boolean = false) => {
    album.isShowAll = isShowAll;

    const limit = isShowAll ? 0 : this._baseLimitRegister;

    this._projSvs.getAlbumImageCollection(album.id, limit).subscribe(res => {
      album.image_collection = res.data;

      this.cd.markForCheck();
    });

    return album;
  };

  addNewImage = (album, file_list) => {

    this._projSvs.postNewImage(album.id, file_list[0], file_list[0].name).subscribe(res => {
      this.albums[_.findIndex(this.albums, album)] = this.getAlbumData(album, album.isShowAll);
    });
  };

  createNewAlbum = formValue => {
    this._projSvs.createNewAlbum(formValue).subscribe(res => {
      this.formGroup.clear();
      this.getAlbumList();
    });
  };

}
