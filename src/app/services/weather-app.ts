import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, throwError } from 'rxjs';
import { WeatherData } from '../services/weather-data';

interface GeocodingResponse {
  results?: { name: string; latitude: number; longitude: number; country: string }[];
}

@Injectable({ providedIn: 'root' })
export class WeatherApp {
  private http = inject(HttpClient);

  private geoUrl = 'https://geocoding-api.open-meteo.com/v1/search';
  private weatherUrl = 'https://api.open-meteo.com/v1/forecast';

  getWeather(lat: number, lon: number) {
    return this.http.get<WeatherData>(this.weatherUrl, {
      params: {
        latitude: lat,
        longitude: lon,
        current: 'temperature_2m,relative_humidity_2m,wind_speed_10m',
        daily: 'temperature_2m_max,temperature_2m_min',
        timezone: 'auto',
      },
    });
  }

  getWeatherByCity(name: string) {
    return this.http
      .get<GeocodingResponse>(this.geoUrl, { params: { name, count: 1 } })
      .pipe(
        switchMap(res => {
          const place = res.results?.[0];
          if (!place) return throwError(() => new Error('City not found'));

          return this.getWeather(place.latitude, place.longitude).pipe(
            map(weather => ({ cityName: place.name, weather }))
          );
        })
      );
  }
}