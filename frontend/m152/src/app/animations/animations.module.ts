import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import {TranslateModule} from '@ngx-translate/core';
import {CardModule, CodeHighlighterModule} from 'primeng';
import {CSS3AnimationsComponent} from './css3-animations/css3-animations.component';
import {SvgAnimationsComponent} from './svg-animations/svg-animations.component';
import {AngularAnimationsComponent} from './angular-animations/angular-animations.component';
import {CanvasAnimationsComponent} from './canvas-animations/canvas-animations.component';
import {AnimateModule} from '../animate/animate.module';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [
    AnimationsComponent,
    CSS3AnimationsComponent,
    SvgAnimationsComponent,
    AngularAnimationsComponent,
    CanvasAnimationsComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule,
    CodeHighlighterModule,
    AnimateModule,
    CoreModule,
  ],
  exports: [
    AnimationsComponent,
    CSS3AnimationsComponent,
    SvgAnimationsComponent,
    AngularAnimationsComponent,
    CanvasAnimationsComponent
  ]
})
export class AnimationsModule { }
