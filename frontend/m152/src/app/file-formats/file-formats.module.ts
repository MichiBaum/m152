import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileFormatsComponent } from './file-formats.component';
import {CardModule, CarouselModule, CodeHighlighterModule, GalleriaModule, RatingModule} from 'primeng';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    FileFormatsComponent
  ],
    imports: [
        CommonModule,
        CardModule,
        CodeHighlighterModule,
        TranslateModule,
        FormsModule,
        CarouselModule
    ]
})
export class FileFormatsModule { }
