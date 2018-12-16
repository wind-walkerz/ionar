import { NgModule } from '@angular/core';
import { CarouselModule } from './carousel/carousel.module';


@NgModule({
  imports: [
    CarouselModule
  ],
  exports: [
    CarouselModule
  ]
})
export class PackagesModule {
}
