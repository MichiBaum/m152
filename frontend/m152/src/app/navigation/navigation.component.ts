import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MenuItem} from 'primeng';
import {LanguageConfig} from '../core/language.config';

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
        routerLink: 'home',
        command: () => {
          this.sidebarVisible = false;
        }
      } as MenuItem,
      {
        label: this.translate.instant('navigation.timeline'),
        icon: 'pi pi-calendar',
        routerLink: 'timeline',
        command: () => {
          this.sidebarVisible = false;
        }
      } as MenuItem,
    ] as MenuItem[];
  }

}
