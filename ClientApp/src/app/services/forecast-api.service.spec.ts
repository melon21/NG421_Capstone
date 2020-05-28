import { TestBed } from '@angular/core/testing';

import { ForecastApiService } from './forecast-api.service';

describe('ForecastApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForecastApiService = TestBed.get(ForecastApiService);
    expect(service).toBeTruthy();
  });
});
