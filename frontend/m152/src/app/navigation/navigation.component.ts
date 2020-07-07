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
  windowHeight;

  constructor(
    private translate: TranslateService,
    private languageConfig: LanguageConfig,
    private routernavigationService: RouternavigationService
  ) {

    this.languageConfig.languageChanged.subscribe(() => {
      this.setItems();
    });

    this.windowHeight = window.innerHeight / 100 * 80;

  }

  ngOnInit(): void {
    this.setItems();
  }

  setItems = (): void => {
    this.navItems = [
      {
        label: this.translate.instant('navigation.home'),
        icon: 'fa fa-home',
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
          this.routernavigationService.conceptNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.timeline'),
        icon: 'fa fa-calendar',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.timelineNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.licenses'),
        icon: 'far fa-copyright',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.licensesNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.fileformats'),
        icon: 'fa fa-file',
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
        label: this.translate.instant('navigation.pwa'),
        icon: 'fas fa-wifi',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.pwaNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.imprint'),
        icon: 'fa fa-copyright',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.imprintNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.mockup'),
        icon: 'fas fa-pen',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.mockupNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.styleguide'),
        icon: 'fas fa-remove-format',
        command: () => {
          this.sidebarVisible = false;
          this.routernavigationService.styleguideNavigate();
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.github'),
        icon: 'fab fa-github',
        command: () => {
          this.sidebarVisible = false;
          const url = 'https://github.com/MichiBaum/m152';
          window.open(url, '_blank');
        }
      } as MenuItem
    ] as MenuItem[];
  }

}
