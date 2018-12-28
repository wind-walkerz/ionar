import { AbstractControl } from '../models/AbstractControl';
import { FormControl } from '../models/FormControl';
import { FormGroup } from '../models/FormGroup';
import { FormArray } from '../models/FormArray';

export const isFormControl = (c: any) => {
  return c instanceof FormControl;
};

export const isFormGroup = (c: any) => {

  return c instanceof FormGroup;
};

export const isFormArray = (c: any) => {

  return c instanceof FormArray;
};