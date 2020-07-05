import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng';
import {CodeComponent} from './code/code.component';
import {AnimateModule} from '../animate/animate.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CodeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AnimateModule,
  ],
  exports: [
    CodeComponent
  ]
})
export class CoreModule { }
