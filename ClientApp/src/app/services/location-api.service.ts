import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {
  post(location: string): any[] | PromiseLike<any[]> {

    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line: member-ordering
  locationKey: string;
  // tslint:disable-next-line: member-ordering
  API_URL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
  // tslint:disable-next-line: member-ordering
  API_KEY = 'RF9jPHpFC8IXHNAZUGrdC9BPQO93mzI8';
  constructor(private httpService: HttpClient) {}

  get(searchTerm: string): Promise<any> {

    const headers = new HttpHeaders();
    headers.append('X-Requested-With', 'XMLHttpRequest');
    const params: HttpParams = new HttpParams()
      .set('apikey', this.API_KEY)
      .set('q', searchTerm);

    return this.httpService.get<any>(`${this.API_URL}`, {headers, params}).toPromise();
  }
}
