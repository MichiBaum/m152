import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptComponent } from './concept.component';
import {CardModule} from 'primeng';
import {TranslateModule} from '@ngx-translate/core';
import {AnimateModule} from '../animate/animate.module';



@NgModule({
  declarations: [ConceptComponent],
  imports: [
    CommonModule,
    CardModule,
    TranslateModule,
    AnimateModule
  ]
})
export class ConceptModule { }
