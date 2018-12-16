import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';

import { SlideDirective } from './slide.directive';
import { SlideComponent } from './slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarouselComponent, SlideDirective, SlideComponent
  ],
  exports: [
    CarouselComponent, SlideDirective
  ],
  entryComponents: [SlideComponent]
})
export class CarouselModule {
}
