import { FormGroup } from '../models/FormGroup';
import { ControlConfig, FormConfigs } from '../models/ControlConfig';
export declare class IonarFormBuilder {
    group: (formState: ControlConfig[], formConfigs?: FormConfigs) => FormGroup;
}
