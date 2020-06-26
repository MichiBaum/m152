import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import {TranslateModule} from '@ngx-translate/core';
import {CardModule, CodeHighlighterModule} from 'primeng';



@NgModule({
  declarations: [
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule,
    CodeHighlighterModule
  ],
  exports: [
    AnimationsComponent
  ]
})
export class AnimationsModule { }
