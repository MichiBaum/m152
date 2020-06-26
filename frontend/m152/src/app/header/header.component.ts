import { Component, OnInit } from '@angular/core';
import {PrimeNgBase} from '../core/models/primeng-base.model';
import {LanguageConfig} from '../core/language.config';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideLeftMiddleRight', [
      state('left', style({transform: 'translateX(-30%) rotate(-10deg)'})),
      state('middle', style({transform: 'translateX(0%) rotate(0deg)'})),
      state('right', style({transform: 'translateX(30%) rotate(10deg)'})),
      transition('left => middle', animate('500ms ease-in')),
      transition('middle => right', animate('500ms ease-in')),
      transition('right => left', animate('500ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  languages: PrimeNgBase[];
  selectedLanguage: PrimeNgBase;
  headerAnimationState = 'middle';

  constructor(public languageConfig: LanguageConfig) { }

  ngOnInit(): void {
    this.initLanguages();
    this.selectedLanguage = this.initSelectedLanguage();
  }

  initLanguages = () => {
    this.languages = this.languageConfig.languages.map((lang) => {
      return {label: lang.name, field: lang.isoCode, value: lang.isoCode} as PrimeNgBase;
    });
  }

  selectLanguage = (event) => {
    this.languageConfig.setLanguage(
      this.languageConfig.languages.find((lang) => lang.isoCode === event.value)
    );
  }

  private initSelectedLanguage = (): PrimeNgBase => {
    return {field: this.languageConfig.current.isoCode, label: this.languageConfig.current.name} as PrimeNgBase;
  }

  toggleHeaderAnimationState() {
    if (this.headerAnimationState === 'left') {
      this.headerAnimationState = 'middle';
    } else if (this.headerAnimationState === 'middle') {
      this.headerAnimationState = 'right';
    } else if (this.headerAnimationState === 'right') {
      this.headerAnimationState = 'left';
    }
  }
}
