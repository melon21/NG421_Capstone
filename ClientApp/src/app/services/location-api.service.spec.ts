import { TestBed } from '@angular/core/testing';

import { LocationApiService } from './location-api.service';

describe('locationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationApiService = TestBed.get(LocationApiService);
    expect(service).toBeTruthy();
  });
});
