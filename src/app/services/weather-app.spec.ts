import { TestBed } from '@angular/core/testing';
import { WeatherApp } from './weather-app';

describe('WeatherApp', () => {
  let service: WeatherApp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherApp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
