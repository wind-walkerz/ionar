import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './containers/upload.component';
import { ClickComponent } from './components/upload-zone/click/click.component';
import { DropComponent } from './components/upload-zone/drop/drop.component';
import { FileComponent } from './components/file/file.component';


@NgModule({
  declarations: [
    UploadComponent,
    ClickComponent,
    DropComponent,
    FileComponent
  ],
  imports: [CommonModule],
  exports: [UploadComponent],
  entryComponents: [UploadComponent]
})
export class UploadModule {
}
