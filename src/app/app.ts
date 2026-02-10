import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsBasics } from './rxjs-basics/rxjs-basics';  
import { TempForms } from './temp-forms/temp-forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RxjsBasics , TempForms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_practices');

}
