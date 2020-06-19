import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileFormatsComponent } from './file-formats.component';
import {CardModule} from 'primeng';



@NgModule({
  declarations: [
    FileFormatsComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class FileFormatsModule { }
