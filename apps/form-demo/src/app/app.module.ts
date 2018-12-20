import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { IonarModule } from 'ionar';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, NxModule.forRoot(), IonarModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
