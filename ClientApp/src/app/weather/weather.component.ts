import { Component,Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weather: Weather[];
 // public newWeather: Weather = {weatherForcast:'', temprature: Number, humidity:'', timeOfDay:'', date:'', wind:''}

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
       
    }
    async ngOnInit() {
        this.weather = await this.http.get<Weather[]>(this.baseUrl + 'weather').toPromise();
    }

}
interface Weather {
weatherForcast: string;
temprature: number;
humidity: number;
timeOfDay: string;
date: number;
wind: number;
}
