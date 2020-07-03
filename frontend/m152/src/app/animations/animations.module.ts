import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import {TranslateModule} from '@ngx-translate/core';
import {CardModule, CodeHighlighterModule} from 'primeng';
import {CSS3AnimationsComponent} from "./css3-animations/css3-animations.component";
import {SvgAnimationsComponent} from './svg-animations/svg-animations.component';
import {AngularAnimationsComponent} from './angular-animations/angular-animations.component';



@NgModule({
  declarations: [
    AnimationsComponent,
    CSS3AnimationsComponent,
    SvgAnimationsComponent,
    AngularAnimationsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule,
    CodeHighlighterModule
  ],
  exports: [
    AnimationsComponent,
    CSS3AnimationsComponent,
    SvgAnimationsComponent,
    AngularAnimationsComponent
  ]
})
export class AnimationsModule { }
