import { Component } from '@angular/core';
import { from, of, map,switchMap, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-rxjs-basics',
  imports: [],
  templateUrl: './rxjs-basics.html',
  styleUrl: './rxjs-basics.css',
})
export class RxjsBasics {


  constructor(private http : HttpClient)
  {
    
    this.http.get<any[]>("https://fakestoreapi.com/products").pipe(
      map( products => 
        products.map( p => ({
          "discounted price" : p.price * 0.9,
          "original price"  : p.price,
          "discounted amount ": p.price *0.1
        }))
      )
    ).subscribe(console.log)

  }

}
