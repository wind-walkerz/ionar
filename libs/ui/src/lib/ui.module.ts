import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../components/button/button.module';

@NgModule({
  imports: [ButtonModule],
  exports: [ButtonModule]
})
export class UIModule {}
