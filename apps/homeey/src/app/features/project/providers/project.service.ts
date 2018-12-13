import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services';
import { HttpParams } from '@angular/common/http';
import { untilDestroyed } from '@ionar/utility';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectService implements OnDestroy {
  constructor(private api: ApiService) {
  }

  getChatFeed = (project_id: any = 6): Observable<any> => {

    const params = new HttpParams().set('project_id', project_id);

    return this.api.get(`/homeey/get-message`, params).pipe(
      untilDestroyed(this),
      map(res => {
        if (res.status_code === 200) {
          return res.data;
        } else {
          console.log(res.message);
        }

        return null;
      })
    );
  };

  ngOnDestroy(): void {
  }


}