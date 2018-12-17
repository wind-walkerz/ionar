import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../core/services';
import { HttpParams } from '@angular/common/http';
import { untilDestroyed } from '@ionar/utility';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageBoardService implements OnDestroy {
  constructor(private api: ApiService) {
  }

  getImageConcept = (item_id: any = 43): Observable<any> => {

    const params = new HttpParams().set('item_id', item_id);

    return this.api.get(`/homeey/get-item-concept`, params).pipe(
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

  sendChatMessage = (data: FormData) => {
    return this.api.post(`/homeey/create-message`, data).pipe(
      untilDestroyed(this),
      map(res => {
        if (res.status_code === 200) {
          return res.data;
        } else {

          console.log(res.message);
        }
      })
    );
  };


  ngOnDestroy(): void {
  }


}