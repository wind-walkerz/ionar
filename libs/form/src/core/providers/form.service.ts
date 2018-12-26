import { AfterViewInit, Injectable, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { AbstractControl } from '../models/AbstractControl';
import { FormControl } from '../models/FormControl';
import { Observable, Subject } from 'rxjs';
import _ from 'lodash';


@Injectable()

export class FormService implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  private formGroup: FormGroup;

  $initialize = new Subject();


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
    this.$initialize.next(formGroup);
  };

  mergeControls = (controls: { [name: string]: any }) => {
    let result = [];

    _.forOwn(controls, (value: AbstractControl, name: string) => {
      if (value instanceof FormControl) result.push(name);

      if (value instanceof FormGroup) result = result.concat(this.mergeControls(value.controls));


    });

    return result;
  };


  getControl = (name): AbstractControl => this.formGroup.get(name);

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


