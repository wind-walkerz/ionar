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

  sendChatMessage = (data: FormData) => {
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

}