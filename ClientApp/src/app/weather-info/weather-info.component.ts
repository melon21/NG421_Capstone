import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Weather} from 'src/app/interfaces/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  public weather: Weather[];
  public newWeather: Weather = {weatherForecast: '', temprature: 0, humidity: 0, timeOfDay: '', date: new Date (), wind: 0};

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    async ngOnInit() {
        this.weather = await this.http.get<Weather[]>(this.baseUrl + 'weather').toPromise();
    }
}
