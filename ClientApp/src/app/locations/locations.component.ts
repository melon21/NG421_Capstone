import { Component, OnInit } from '@angular/core';
import { LocationApiService } from '../services/location-api.service';
import { Locations } from 'src/app/interfaces/locations';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
location = '';
data: any[] = [];
  constructor(private locationsApiService: LocationApiService) { }

  ngOnInit() {
  }
async search() {

 this.data = await this.locationsApiService.get(this.location);

}
}
