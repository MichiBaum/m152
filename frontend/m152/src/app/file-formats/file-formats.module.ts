import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileFormatsComponent } from './file-formats.component';
import {CardModule, CarouselModule, CodeHighlighterModule, GalleriaModule, RatingModule} from 'primeng';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {VideoFileFormatsComponent} from './video-file-formats/video-file-formats.component';
import {ImageFileFormatsComponent} from './image-file-formats/image-file-formats.component';
import {SoundFileFormatsComponent} from './sound-file-formats/sound-file-formats.component';



@NgModule({
  declarations: [
    FileFormatsComponent,
    VideoFileFormatsComponent,
    ImageFileFormatsComponent,
    SoundFileFormatsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CodeHighlighterModule,
    TranslateModule,
    FormsModule,
    CarouselModule
  ],
  exports: [
    FileFormatsComponent,
    VideoFileFormatsComponent,
    ImageFileFormatsComponent,
    SoundFileFormatsComponent
  ]
})
export class FileFormatsModule { }
