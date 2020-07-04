import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimelineComponent} from './timeline.component';
import {FullCalendarModule} from 'primeng';

@NgModule({
  declarations: [
    TimelineComponent
  ],
  exports: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule
  ]
})
export class TimelineModule { }
