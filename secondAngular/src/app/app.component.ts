import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WeatherComponent} from "./weather/weather.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponent],
//  templateUrl: '',./app.component.html
  template: '<h1>Hey now!</h1> <p>Welcome, {{title}} </p>' +
    '<br/>Your value is: {{theValue}}' +
    '<br/>' +
    '<button (click)="changeMe()">Increment</button>' +
  '<button (click)="lowerMe()">Decrement</button>' +
    '<hr/>' +
    '<app-weather></app-weather>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAngular';
  theValue: number = 1;

  changeMe = () => {
    this.theValue++;
  }
  lowerMe = ()  => {
    this.theValue--;
  }
}
