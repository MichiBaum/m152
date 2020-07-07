import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReflectionComponent } from './reflection.component';
import {CardModule} from 'primeng';
import {AnimateModule} from '../animate/animate.module';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [ReflectionComponent],
  imports: [
    CommonModule,
    CardModule,
    AnimateModule,
    TranslateModule
  ]
})
export class ReflectionModule { }
