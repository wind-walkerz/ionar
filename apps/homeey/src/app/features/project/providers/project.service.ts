import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()

export class ProjectService implements OnInit {
  private _projectId: number;

  get project_id(): number {
    return this._projectId;
  }

  set project_id(id: number) {
    this._projectId = id;
  }

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {

  }

  /********************************************************************************************************************
   -------------------------------------------------------------------------                 Chat Feed                 ------------------------------------------------------------------------------------
   *******************************************************************************************************************/

  getChatFeed = (): Observable<any> => {

    const params = new HttpParams().set('project_id', this.project_id.toString());

    return this.api.get(`/homeey/get-message`, params);
  };

  sendChatMessage = (data: FormData): Observable<any> => {
    return this.api.post(`/homeey/create-message`, data);
  };

  /********************************************************************************************************************
   --------------------------------------------------------------------                                Info                                -----------------------------------------------------------------------------
   *******************************************************************************************************************/

  getProjectInfo = () => {
    const params = new HttpParams().set('project_id', this.project_id.toString());

    return this.api.get(`/homeey/get-project-info`, params).pipe(map(res => res.item.attributes));

    ;
  };

  /********************************************************************************************************************
   --------------------------------------------------------------------                                Image Board                                -----------------------------------------------------------------------------
   *******************************************************************************************************************/

  getAlbumList = (): Observable<any> => {
    const params = new HttpParams().set('project_id', this.project_id.toString());

    return this.api.get(`/homeey/project/get-list-album`, params);

  };

  getAlbumImageCollection = (folder_id: number = 1, limit: number = 1): Observable<any> => {
    const params = new HttpParams()
      .set('folder_id', folder_id.toString())
      .set('limit', limit.toString());

    return this.api.get(`/homeey/project/get-list-image-board`, params);
  };

  postNewImage = (folder_id: number, image: File, name: any): Observable<any> => {

    const formData = new FormData();

    formData.append('folder_id', folder_id.toString());
    formData.append('image', image, image.name);
    formData.append('name', name);


    return this.api.post(`/homeey/project/new-image-board`, formData);
  };

  getImageConcept = (item_id: any = 43): Observable<any> => {

    const params = new HttpParams().set('item_id', item_id);

    return this.api.get(`/homeey/get-item-concept`, params);
  };

  createNewAlbum = (data): Observable<any> => {
    return this.api.post(`/homeey/project/new-album`, data);
  };


}