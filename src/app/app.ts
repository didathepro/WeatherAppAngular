import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContent } from './main-content/main-content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WeatherApp');
}
