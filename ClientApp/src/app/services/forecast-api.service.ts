import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastApiService {

  API_URL = 'https://dataservice.accuweather.com/forecasts/v1/daily/1day/331131?apikey=RF9jPHpFC8IXHNAZUGrdC9BPQO93mzI8';
  API_KEY = 'RF9jPHpFC8IXHNAZUGrdC9BPQO93mzI8';
  constructor(private httpService: HttpClient) {}

  get(searchTerm: string): Promise<any> {

    const params: HttpParams = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('query', searchTerm);

    return this.httpService.get<any>(this.API_URL, {params}).toPromise();
  }
}
