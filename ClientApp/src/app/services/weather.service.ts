import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Weather} from 'src/app/interfaces/weather'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient,@Inject('BASE URL')private baseURL:string) { }

 async getWeather(){
  return this.httpClient.get<Weather[]>('${this.baseURL}weather').toPromise();
 }
 async addWeather(){
  return await this.httpClient.post<Weather[]>('${this.baseURL}weather', WeatherService).toPromise();
}
}
