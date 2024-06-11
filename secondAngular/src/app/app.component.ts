import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WeatherComponent} from "./weather/weather.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponent],
  templateUrl: './appComponent2.html',
  // template: moved this to its own file
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title = 'firstAngular';
  private theValue: number = 1;

  changeMe = () => {
    this.theValue++;
  }
  lowerMe = ()  => {
    this.theValue--;
  }
}
