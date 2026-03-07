import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, takeWhile } from 'rxjs';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-countdown',
  imports: [FormsModule , JsonPipe , CommonModule ],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class Countdown {

  message = " Count Down Started";

  num = 0 ;
  timer : any ; 

  constructor(private cd : ChangeDetectorRef )
  {

  }

  startcount() {

    this.timer = setInterval(() => {
      if(this.num<=0)
      {
        this.message = " Count Down Limit Reached";
        clearInterval(this.timer);
        return;
      }

      this.message =" Count Down Running"
      this.num--;
      this.cd.markForCheck();
      console.log(this.num);

    }, 1000); 
    
  }
}
