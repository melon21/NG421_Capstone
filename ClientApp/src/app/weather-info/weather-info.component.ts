import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Weather} from 'src/app/interfaces/weather';
import {ForecastApiService} from 'src/app/services/forecast-api.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-weather',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  public weather: Weather[];
  public newWeather: Weather[] = [{minTemp: 0, maxTemp: 0,  day: '', night: '', humidity: 0, date: new Date (), wind: 0}];
  displayedColumns: string[] = ['day', 'night', 'maxTemp', 'minTemp', 'humidity', 'date', 'wind'];
  dataSource: MatTableDataSource<Weather>;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private forcastApiService: ForecastApiService) { }

    async ngOnInit() {
        this.weather = await this.forcastApiService.get('');
        console.log(this.weather);
        this.newWeather[0].maxTemp = this.weather["DailyForecasts"][0]["Temperature"]["Maximum"]["Value"];
        console.log(this.newWeather);

        this.newWeather[0].minTemp = this.weather["DailyForecasts"][0]["Temperature"]["Minimum"]["Value"];
        console.log(this.newWeather);

        this.newWeather[0].day = this.weather["DailyForecasts"][0]["Day"]["IconPhrase"];
        console.log(this.newWeather);

        this.newWeather[0].night = this.weather["DailyForecasts"][0]["Night"]["IconPhrase"];
        console.log(this.newWeather);

        this.newWeather[0].minTemp = this.weather["DailyForecasts"][0]["Temperature"]["Minimum"]["Value"];
        console.log(this.newWeather);

        this.dataSource = new MatTableDataSource(this.newWeather);
    }
}
