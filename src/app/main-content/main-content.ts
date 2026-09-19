import { Component, inject, OnInit } from '@angular/core';
import { WeatherApp } from '../services/weather-app';
import { WeatherData } from '../services/weather-data';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-main-content',
  styleUrl: './main-content.css',
  templateUrl: './main-content.html',
})
export class MainContent implements OnInit {

  private weatherService = inject(WeatherApp);

  weatherData!: WeatherData;
  city: string = 'Graz';

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.weatherData = data;
      console.log(data);
    });
  }
}