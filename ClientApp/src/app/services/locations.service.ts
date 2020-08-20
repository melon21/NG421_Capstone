

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Locations } from 'src/app/interfaces/locations';
import { LocationApiService } from './location-api.service';
import { ForecastApiService } from './forecast-api.service';
@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  // tslint:disable-next-line: max-line-length
  constructor (private httpClient: HttpClient, @Inject('BASE URL')private baseURL: string,  private locationApiService: LocationApiService, private forecastApiService: ForecastApiService, ) { }

 async getLocations() {
  return this.httpClient.get<Locations[]>('${this.baseURL}locations').toPromise();
 }
 async addLocaations() {
  return await this.httpClient.post<Locations[]>('${this.baseURL}locations', LocationsService).toPromise();
}
}
