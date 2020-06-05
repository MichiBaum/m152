import {Injectable} from '@angular/core';
import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

@Injectable()
export class TranslateErrorHandler implements MissingTranslationHandler {

  constructor() { }

  handle(params: MissingTranslationHandlerParams) {
    console.log(params)
    return params.key;
  }
}
