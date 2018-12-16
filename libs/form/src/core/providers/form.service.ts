import { AfterViewInit, Injectable, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { AbstractControl } from '../models/AbstractControl';
import { ValidationConfigs } from '../models/Validator';
import { Observable, Subject } from 'rxjs';
import _ from 'lodash';


@Injectable()

export class FormService implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  private formGroup: FormGroup;


  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }


  initialize = (formGroup: FormGroup) => {
    this.formGroup = formGroup;
  };


  getFormGroup = (): FormGroup => this.formGroup;
  getControl = (name): AbstractControl => this.formGroup.get(name);

  convertToFormData = data => {
    const form = new FormData();

    _.each(data, (value, key) => {
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


