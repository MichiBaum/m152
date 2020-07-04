import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprintComponent } from './imprint.component';
import {TranslateModule} from '@ngx-translate/core';
import {CardModule} from 'primeng';
import {AnimateModule} from '../animate/animate.module';

@NgModule({
  declarations: [
    ImprintComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule,
    AnimateModule
  ],
  exports: [
    ImprintComponent
  ]
})
export class ImprintModule { }
