import { Component } from '@angular/core';
import { from, of, map,switchMap, concatMap } from 'rxjs';
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
  
  source$ = of( {id : 1 , name :"sarath"},
                {id : 2 , name :"harish"}
  );
  answer$  = new Observable<number> ;

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
    
    //map - operator
    
    this.source$.pipe(
      map(v => v.name)
    ).subscribe( a => console.log(a));

    // switch Map -operator

    of(1,2,3).pipe(
      switchMap( id => of(`User ${id}`))
    ).subscribe(console.log)

    // conat Map - operator
    
     this.answer$ = of(1,2,3).pipe(
      concatMap( x => of(x*10))
    );
    this.answer$.subscribe(console.log)
  }

}
