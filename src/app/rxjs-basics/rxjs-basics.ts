import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-rxjs-basics',
  imports: [],
  templateUrl: './rxjs-basics.html',
  styleUrl: './rxjs-basics.css',
})
export class RxjsBasics {

  cityList : string[] = ["hyd","delhi","chennai"];
  
  cityList$ = of(["hyd","delhi","chennai"]);
  
  cityList2$ = from(["hyd","1"]);
  

  constructor()
  {
    this.cityList$.subscribe( (cityData: string [] )=>{ 
      debugger;
      console.log(cityData) 
    })

    this.cityList2$.subscribe(  (cityData : string) =>{
      debugger;
      console.log(cityData)
    })
  

    const myObs$ =  new Observable(value=>{
      value.next("This is a demo text");
    })

    myObs$.subscribe((message) =>{
      debugger;
      console.log(message);
    });

  }

}
