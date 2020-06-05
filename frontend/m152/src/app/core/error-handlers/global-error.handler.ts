import {ErrorHandler, Injectable, Injector} from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {
  }

  handleError(error) {
    console.log(error);

    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    throw error;
  }

}
