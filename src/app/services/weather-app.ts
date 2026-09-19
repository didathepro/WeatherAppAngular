import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../services/weather-data'

@Injectable({
  providedIn: 'root'
})
export class WeatherApp {

  private http = inject(HttpClient);

  private apiUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=47.0707&longitude=15.4395&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto';

  getWeather() {
    return this.http.get<WeatherData>(this.apiUrl);
  }
}