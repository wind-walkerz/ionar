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

    return this.api.get(`/homeey/get-item-concept`, params)
  };

  sendChatMessage = (data: FormData) => {
    return this.api.post(`/homeey/create-message`, data)
  };


  ngOnDestroy(): void {
  }


}