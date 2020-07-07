import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing.component';
import {ButtonModule, CardModule, RatingModule} from 'primeng';
import {AnimateModule} from '../animate/animate.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {TestComponent} from './test/test.component';

@NgModule({
  declarations: [TestingComponent, TestComponent],
  imports: [
    CommonModule,
    CardModule,
    AnimateModule,
    TranslateModule,
    RatingModule,
    FormsModule,
    ButtonModule
  ],
  exports: [TestingComponent]
})
export class TestingModule { }
