import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { IonarFormModule } from '@ionar/form';
import { IonarUI } from '@ionar/ui';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, NxModule.forRoot(), IonarFormModule, IonarUI, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
