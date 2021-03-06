import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {ButtonModule, DropdownModule, SidebarModule} from 'primeng';
import {NavigationModule} from '../navigation/navigation.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    TranslateModule,
    SidebarModule,
    ButtonModule,
    NavigationModule
  ]
})
export class HeaderModule { }
