import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceRequester {
  url = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(protected http: HttpClient) {}

  httpGet(action: string){
    return this.http.get(this.url + action + '&APPID=' + this.apiKey)
      .toPromise()
      .then((response: any) => {
         return response;
      })
      .catch((response: any) => {
          return this.handleError(response);
      });
  }

  protected handleError(response: any) {
    let message = response.message;
    let errorCode = response.status;

    // if (response.error) {
    //   try {
    //     if (response.error.hasOwnProperty('detail')) {
    //       message = response.error.detail;
    //     }
    //
    //     if (response.error.hasOwnProperty('status')) {
    //       errorCode = response.error.status;
    //     }
    //
    //   } catch (err) {
    //     message = 'Service unavailable.';
    //   }
    // }

    return Promise.reject({
      message: message,
      status: errorCode
    });
  }
}
