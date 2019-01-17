import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonarLoadingService, IonarUI } from '@ionar/ui';
import { TestComponent } from './test/test.component';
import { ZeroComponent } from './zero/zero.component';


@NgModule({
  declarations: [AppComponent, TestComponent, ZeroComponent],
  imports: [BrowserModule, NxModule.forRoot(), IonarUI, BrowserAnimationsModule],
  providers: [IonarLoadingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
