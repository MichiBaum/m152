import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MenuItem} from 'primeng';
import {LanguageConfig} from '../core/language.config';
import {RouternavigationService} from '../core/services/routernavigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  navItems: MenuItem[];
  sidebarVisible: boolean;

  constructor(
    private translate: TranslateService,
    private languageConfig: LanguageConfig,
    private routernavigationService: RouternavigationService
  ) {

    this.languageConfig.languageChanged.subscribe(() => {
      this.setItems();
    });

  }

  ngOnInit(): void {
    this.setItems();
  }

  setItems = (): void => {
    this.navItems = [
      {
        label: this.translate.instant('navigation.home'),
        icon: 'pi pi-home',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.homeNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.concept'),
        icon: 'fa fa-book',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.homeNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.timeline'),
        icon: 'pi pi-calendar',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.timelineNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.fileformats'),
        icon: 'pi pi-file-o',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.fileformatsNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.animations'),
        icon: 'pi pi-spin pi-refresh',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.animationsNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.imprint'),
        icon: 'pi pi-info',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.imprintNavigate();
        }
      } as MenuItem
    ] as MenuItem[];
  }

}
