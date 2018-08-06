import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServiceRequester} from './services/service.requester';
import {WeatherService} from './services/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      FormsModule
  ],
  providers: [
      ServiceRequester,
      WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
