import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TimelineComponent} from './timeline/timeline.component';
import {ImprintComponent} from './imprint/imprint.component';
import {FileFormatsComponent} from './file-formats/file-formats.component';
import {AnimationsComponent} from './animations/animations.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'timeline',
    component: TimelineComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'fileformats',
    component: FileFormatsComponent,
  },
  {
    path: 'animations',
    component: AnimationsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
