import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsBasics } from './rxjs-basics/rxjs-basics';
// import { TempForms } from './temp-forms/temp-forms';
import {Countdown} from './countdown/countdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RxjsBasics, Countdown, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_practices');

}
