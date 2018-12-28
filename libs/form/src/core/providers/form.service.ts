import { AfterViewInit, Injectable, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { AbstractControl } from '../models/AbstractControl';
import { FormControl } from '../models/FormControl';
import { Observable, Subject } from 'rxjs';
import _ from 'lodash';
import { FormArray } from '../models/FormArray';
import { FormArrayState, FormGroupState } from '@ionar/form';


@Injectable()

export class FormService implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }


  mergeControls = (controls: FormGroupState | FormArrayState, parent_name: string = null) => {
    let result = [];
    //


    if (_.isPlainObject(controls)) {
      _.forOwn(controls, (c: AbstractControl, name: string) => {
        const control_name = parent_name ? `${parent_name}[${name}]` : name;

        if (c instanceof FormControl) result.push(control_name);

        if (c instanceof FormGroup) result = result.concat(this.mergeControls(c.controls, control_name));

        if (c instanceof FormArray) result = result.concat(this.mergeControls(c.controls, control_name));
      });
    }

    if (_.isArray(controls)) {
      _.each(controls, (c: AbstractControl, index) => {

        if (c instanceof FormControl) result.push(`${parent_name}[${index}]`);

        if (c instanceof FormGroup) result = result.concat(this.mergeControls(c.controls, `${parent_name}[${index}]`));

        if (c instanceof FormArray) result = result.concat(this.mergeControls(c.controls, `${parent_name}[${index}]`));
      });
    }

    return result;
  };


  convertToFormData = data => {
    const form = new FormData();

    _.forOwn(data, (value, key) => {
      if (_.isArray(value)) {
        _.each(value, file => form.append(`${key}[]`, file, file.name));
      } else form.append(key, value);

    });

    return form;
  };

  convertToMediaType = (value, media_type) => {

    if (media_type) {
      switch (media_type.toLowerCase()) {
        case 'json':
          return JSON.stringify(value);
        case 'form-data':
          return this.convertToFormData(value);
        default:
          return value;
      }
    }
    return value;
  };

}


