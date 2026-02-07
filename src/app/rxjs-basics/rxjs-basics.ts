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
    
    this.http.get<any[]>("https://fakestoreapi.com/carts").pipe(
      map(carts => 
        carts.map(cart => 
          cart.products.filter( (product : any) => 
            (product.productId % 2 === 0)
        ))
      )
    ).subscribe(console.log)

    
  }

}
