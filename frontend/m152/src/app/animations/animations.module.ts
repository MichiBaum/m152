import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import {TranslateModule} from '@ngx-translate/core';
import {CardModule, CodeHighlighterModule} from 'primeng';
import {CSS3AnimationsComponent} from "./css3-animations/css3-animations.component";



@NgModule({
  declarations: [
    AnimationsComponent,
    CSS3AnimationsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule,
    CodeHighlighterModule
  ],
  exports: [
    AnimationsComponent,
    CSS3AnimationsComponent
  ]
})
export class AnimationsModule { }
