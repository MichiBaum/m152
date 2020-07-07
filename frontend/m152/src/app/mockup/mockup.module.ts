import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockupComponent } from './mockup.component';
import {CardModule, ListboxModule} from 'primeng';
import {AnimateModule} from '../animate/animate.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MockupComponent],
  imports: [
    CommonModule,
    CardModule,
    AnimateModule,
    TranslateModule,
    ListboxModule,
    FormsModule
  ],
  exports: [MockupComponent]
})
export class MockupModule { }
