import { Injectable } from '@angular/core';
import {ServiceRequester} from './service.requester';
import {environment} from '../../environments/environment';

@Injectable()
export class WeatherService {
  constructor(public requester: ServiceRequester) {
  }
  url = 'data/2.5/box/city?';

  getWeatherStations() {
    return this.requester.httpGet(this.url +
        `bbox=${environment.lonLeft},${environment.latBottom},${environment.lonRight},${environment.latTop},${environment.zoom}`)
      .then(res => {
        return res;
      });
  }
}
