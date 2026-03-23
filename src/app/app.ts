import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { RxjsBasics } from './rxjs-basics/rxjs-basics';
// import { TempForms } from './temp-forms/temp-forms';
// import {Countdown} from './countdown/countdown';
// import {Form} from "./form/form";
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import {increment_action , decrement_action , reset_action} from './counter-actions';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule , CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_practices');
 
    count$: Observable<number>;
  
    increment(){
      this.store.dispatch(increment_action());
    }
  
    decrement()
    {
      this.store.dispatch(decrement_action());
    }
  
    reset()
    {
      this.store.dispatch(reset_action());
    }
  

    constructor(private store: Store<any> ) {
    this.count$ = this.store.select('count');
  }
}
