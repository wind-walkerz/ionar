import { FormGroup } from '../models/FormGroup';
import { AbstractControl } from '../models/AbstractControl';

export class IonarFormBuilder {


  group = (controlsConfig: { [key: string]: AbstractControl }): FormGroup => {

    return new FormGroup(controlsConfig);
  };
}


