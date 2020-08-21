import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationApiService } from '../services/location-api.service';
import { Locations } from 'src/app/interfaces/locations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

public locations: Locations[];
  public newLocations: Locations[] = [{locationName: '', country: '',  adminArea: '', key: 0}];
  displayedColumns: string[] = ['locationName', 'country', 'adminArea', 'key'];
dataSource: MatTableDataSource<Locations>;



constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private locationApiService: LocationApiService) { }

async ngOnInit() {

  this.locations = await this.locationApiService.get('');
  console.log(this.locations);

  this.newLocations[0].locationName = this.locations['EnglishName'][0];
    console.log(this.newLocations);

    this.newLocations[0].country = this.locations['country'][0]['EnglishName'];
    console.log(this.newLocations);

    this.newLocations[0].adminArea = this.locations['AdminastraitiveArea'][0]['EnglishName'];
    console.log(this.newLocations);

     this.newLocations[0].key = this.locations[0]['key'];
     console.log(this.newLocations);

    this.dataSource = new MatTableDataSource(this.newLocations);
}
}





 // constructor(private locationsApiService: LocationApiService) { }

//   ngOnInit() {
//   }
// async search() {

//  this.data = await this.locationsApiService.get(this.location);

// }
// async save() {
//   this.data = await this.locationsApiService.post(this.location);
//   console.log(this.data);
// }
// }
