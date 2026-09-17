import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-main-content',
  styleUrl: './main-content.css',
  templateUrl: './main-content.html',
})
export class MainContent {
  temperature:number = 15;
  minTemperature:number = 9;
  maxTemperature:number = 29;
  city:string = "Graz";
  moisture:number = 85;
  windSpeed: number = 11.83;
}
