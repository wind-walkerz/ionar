import { FormGroup } from '../models/FormGroup';
import { ControlConfig } from '../models/ControlConfig';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IonarFormBuilder {


  group = (formConfig: ControlConfig[], formOptions?: any): FormGroup => {

    return new FormGroup(formConfig, formOptions);
  };
}


