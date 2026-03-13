import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsBasics } from './rxjs-basics/rxjs-basics';
// import { TempForms } from './temp-forms/temp-forms';
import {Countdown} from './countdown/countdown';
import {Form} from "./form/form";
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RxjsBasics, Countdown, FormsModule, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_practices');

  user : any ;

  constructor (private store : Store<any> )
  {
    store.select('user').subscribe(// here user is called slice it is used in app.config.ts
      data=>{
        this.user = data;
        console.log(this.user)
      }
    );
  }
}
