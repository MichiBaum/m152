import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaComponent } from './pwa.component';
import {TranslateModule} from '@ngx-translate/core';
import {CardModule, CodeHighlighterModule} from 'primeng';
import {AnimateModule} from '../animate/animate.module';
import {CoreModule} from '../core/core.module';



@NgModule({
  declarations: [PwaComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule,
    AnimateModule,
    CoreModule,
    CodeHighlighterModule
  ],
  exports: [PwaComponent]
})
export class PwaModule { }
