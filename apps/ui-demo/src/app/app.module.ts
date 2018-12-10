import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { IonarModule } from '@ionar/core';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), IonarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
