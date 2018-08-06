import {Component, OnInit} from '@angular/core';
import {WeatherService} from './services/weather.service';
import * as Moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allData = [];
  bestTemperatureRegions: any[];
  bestPlace: any[];
  isLoading = false;
  maleTemp = 21;
  femaleTemp = 22;
  humidity = 50;
  sex = 'male';
  currentDate = Moment().format('MMMM Do YYYY');

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    return this.getWeatherData();
  }

  getWeatherData() {
    this.isLoading = true;
    return this.weatherService.getWeatherStations()
      .then(res => {
        if (res && res.hasOwnProperty('list')) {
          this.allData = res.list;
          this.getBestPlace();
        }
      });
  }

  getBestPlace() {
    this.isLoading = true;
    const temp = this.getSex();
    this.bestTemperatureRegions = this.allData.filter(region => {
      return region.main.temp === temp;
    });

    this.bestTemperatureRegions.sort((a, b) => {
      return (Math.abs(a.main.humidity - this.humidity) < Math.abs(b.main.humidity - this.humidity) ? -1 : 1);
    });

    this.bestPlace = this.bestTemperatureRegions[0];
    this.bestTemperatureRegions.splice(0, 1);
    this.isLoading = false;
  }

  getSex() {
    return this.sex === 'male' ? this.maleTemp : this.femaleTemp;
  }
}
