import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleguideComponent } from './styleguide.component';
import {CardModule, ColorPickerModule, InplaceModule} from 'primeng';
import {AnimateModule} from '../animate/animate.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {InPlaceIconComponent} from './inPlaceIcon/inPlaceIcon.component';



@NgModule({
  declarations: [StyleguideComponent, InPlaceIconComponent],
    imports: [
        CommonModule,
        CardModule,
        AnimateModule,
        TranslateModule,
        ColorPickerModule,
        FormsModule,
        InplaceModule
    ],
  exports: [StyleguideComponent]
})
export class StyleguideModule { }
