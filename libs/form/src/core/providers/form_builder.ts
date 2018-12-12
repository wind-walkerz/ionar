import { FormGroup } from '../models/FormGroup';
import { ControlConfig } from '../models/ControlConfig';

export class IonarFormBuilder {


  group = (formConfig: ControlConfig[], formOptions?: any): FormGroup => {

    return new FormGroup(formConfig);
  };
}


