import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicensesComponent } from './licenses.component';
import {CardModule} from 'primeng';
import {TranslateModule} from '@ngx-translate/core';
import {AnimateModule} from '../animate/animate.module';



@NgModule({
  declarations: [LicensesComponent],
  imports: [
    CommonModule,
    CardModule,
    TranslateModule,
    AnimateModule
  ],
  exports: [
    LicensesComponent
  ]
})
export class LicensesModule { }
