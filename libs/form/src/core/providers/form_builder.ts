import { FormGroup } from '../models/FormGroup';
import { ControlConfig } from '../models/ControlConfig';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IonarFormBuilder {


  group = (formState: ControlConfig[], formConfigs?: any): FormGroup => {

    return new FormGroup(formState, formConfigs);
  };
}


