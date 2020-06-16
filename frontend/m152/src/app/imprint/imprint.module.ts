import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprintComponent } from './imprint.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    ImprintComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ImprintComponent
  ]
})
export class ImprintModule { }
