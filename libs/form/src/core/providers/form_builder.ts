import { FormGroup } from '../models/FormGroup';

import { Injectable } from '@angular/core';
import { AbstractControlConfig, AbstractControlState, FormGroupState } from '../interfaces/Form';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root'
})

export class IonarFormBuilder {

  group = (state: FormGroupState, config?: AbstractControlConfig): FormGroup => {
    return new FormGroup(state, config);
  };
}


