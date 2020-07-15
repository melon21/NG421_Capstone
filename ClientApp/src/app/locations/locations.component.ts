import { Component, OnInit } from '@angular/core';
import { LocationApiService } from '../services/location-api.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
location = '';
  constructor(private locationsApiService: LocationApiService) { }

  ngOnInit() {
  }
async search() {

 const data = await this.locationsApiService.get(this.location);
 console.log(data);
}
}
