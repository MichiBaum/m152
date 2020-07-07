import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TimelineComponent} from './timeline/timeline.component';
import {ImprintComponent} from './imprint/imprint.component';
import {FileFormatsComponent} from './file-formats/file-formats.component';
import {AnimationsComponent} from './animations/animations.component';
import {ConceptComponent} from './concept/concept.component';
import {PwaComponent} from './pwa/pwa.component';
import {MockupComponent} from './mockup/mockup.component';
import {StyleguideComponent} from './styleguide/styleguide.component';
import {LicensesComponent} from './licenses/licenses.component';

const routes: Routes = [
  {
    path: '',
    component: ConceptComponent,
  },
  {
    path: 'concept',
    component: ConceptComponent,
  },
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
  },
  {
    path: 'pwa',
    component: PwaComponent,
  },
  {
    path: 'mockup',
    component: MockupComponent,
  },
  {
    path: 'styleguide',
    component: StyleguideComponent,
  },
  {
    path: 'licenses',
    component: LicensesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
