import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprintComponent } from './imprint.component';
import {TranslateModule} from '@ngx-translate/core';
import {CardModule} from 'primeng';

@NgModule({
  declarations: [
    ImprintComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule
  ],
  exports: [
    ImprintComponent
  ]
})
export class ImprintModule { }
