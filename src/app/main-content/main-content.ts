import { Component, inject, OnInit, signal } from '@angular/core';
import { WeatherApp } from '../services/weather-app';
import { WeatherData } from '../services/weather-data';

@Component({
  selector: 'app-main-content',
  styleUrl: './main-content.css',
  templateUrl: './main-content.html',
})
export class MainContent implements OnInit {
  private weatherService = inject(WeatherApp);

  weatherData = signal<WeatherData | null>(null);
  city = signal('');
  loading = signal(false);
  error = signal('');

  ngOnInit() {
    this.search('Graz');
  }

  search(name: string) {
    name = name.trim();
    if (!name) return;

    this.loading.set(true);
    this.error.set('');

    this.weatherService.getWeatherByCity(name).subscribe({
      next: ({ cityName, weather }) => {
        this.city.set(cityName);
        this.weatherData.set(weather);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Grad nije pronađen.');
        this.loading.set(false);
      },
    });
  }
}