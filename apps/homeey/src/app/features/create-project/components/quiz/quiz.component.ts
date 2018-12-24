import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import _ from 'lodash';


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, AfterViewInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  // @ViewChild('radio_select_img') radio_select_img: TemplateRef<any>;
  // user_infor_form_config: AuroraForm[] = [
  //     {
  //         type: 'input',
  //         name: 'name',
  //         label: 'Name'
  //     },
  //     {
  //         type: 'input',
  //         input_type: 'email',
  //         name: 'email',
  //         label: 'E-mail'
  //     },
  //     {
  //         type: 'input',
  //         input_type: 'number',
  //         name: 'mobile',
  //         label: 'Mobile'
  //     },
  //     {
  //         type: 'input',
  //         name: 'property_name',
  //         label: 'Property Name'
  //     },
  //     {
  //         type: 'input',
  //         name: 'city',
  //         label: 'City'
  //     },
  //     {
  //         type: 'input',
  //         name: 'post_code',
  //         label: 'Post code'
  //     }
  // ];
  // quiz_form_config: AuroraForm[];
  //
  // carousel_config = {
  //     'slide_0': this.user_infor_form_config
  // };
  //
  // form_config: AuroraForm[];

  index = 0;
  skip = [];


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

  }


  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }


///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onSubmit = form_data => {
  };

  // onSelectAnswer = e => {
  //     if (e.selected_option && e.selected_option.next_question_id) {
  //         const quiz_array = _.flatten(_.drop(_.values(this.carousel_config)));
  //         const from_index = _.findIndex(quiz_array, ['id', e.config.id]);
  //         const to_index = _.findIndex(quiz_array, ['id', e.selected_option.next_question_id]);
  //         const number_of_step = to_index - from_index - 1;
  //
  //         _.times(number_of_step, n => {
  //             this.skip.push(this.index + n + 1);
  //         });
  //     }
  //     else if (this.index < Math.min(...this.skip)) this.skip = [];
  //
  // };
  // prevSlide = () => {
  //     do {
  //         this.index -= 1;
  //     } while (this.skip.includes(this.index) && this.index !== 0);
  // };
  //
  // nextSlide = () => {
  //     let form_valid = true;
  //     _.each(this.carousel_config[`slide_${this.index}`], (form_control, i) => {
  //         this.formSvs._markAsDirty(form_control.name);
  //         form_valid = form_valid && this.formSvs._getControlValid(form_control.name);
  //     });
  //
  //     if (form_valid) {
  //         do {
  //             this.index += 1;
  //         } while (this.skip.includes(this.index) && this.index !== _.keys(this.carousel_config).length - 1);
  //     }
  // };
}