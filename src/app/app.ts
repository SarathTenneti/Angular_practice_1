import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsBasics } from './rxjs-basics/rxjs-basics';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RxjsBasics],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_practices');

}
