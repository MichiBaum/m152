import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
import {TranslateErrorHandler} from './core/error-handlers/translate-error.handler';
import {environment} from '../environments/environment';
import {LanguageConfig} from './core/language.config';
import {appInitializerProviders} from './core/app-initializer-provider';
import {GlobalErrorHandler} from './core/error-handlers/global-error.handler';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './header/header.module';
import {TimelineModule} from './timeline/timeline.module';
import {NavigationModule} from './navigation/navigation.module';
import {ImprintModule} from './imprint/imprint.module';
import {FileFormatsModule} from './file-formats/file-formats.module';
import {AnimationsModule} from './animations/animations.module';
import {AnimateModule} from './animate/animate.module';
import {CoreModule} from './core/core.module';
import {ConceptModule} from './concept/concept.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import {PwaModule} from './pwa/pwa.module';
import {MockupModule} from './mockup/mockup.module';
import {StyleguideModule} from './styleguide/styleguide.module';
import {LicensesModule} from './licenses/licenses.module';
import {TestingModule} from './testing/testing.module';
import {ReflectionModule} from './reflection/reflection.module';

export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

registerLocaleData(localeDe);
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/m152/ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler:
        {
          provide: MissingTranslationHandler,
          useClass: TranslateErrorHandler,
        }
    }),
    HeaderModule,
    TimelineModule,
    NavigationModule,
    HeaderModule,
    ImprintModule,
    FileFormatsModule,
    AnimationsModule,
    AnimateModule,
    CoreModule,
    ConceptModule,
    PwaModule,
    MockupModule,
    StyleguideModule,
    LicensesModule,
    TestingModule,
    ReflectionModule
  ],
  providers: [
    LanguageConfig,
    appInitializerProviders,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: APP_BASE_HREF,
      useValue: environment.base_href
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
