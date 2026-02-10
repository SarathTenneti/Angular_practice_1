import { Component } from '@angular/core';
import { from, of, map,switchMap, debounceTime,concatMap, distinctUntilChanged, filter, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-basics',
  imports: [FormsModule],     
  templateUrl: './rxjs-basics.html',
  styleUrl: './rxjs-basics.css',
})
export class RxjsBasics {

  searchText$ = new Subject<string>() ;
  searchTexts : string='';

  constructor(private http : HttpClient)
  { 
    // this.searchText$ = this.searchTexts;
   this.searches(this.searchText$ , http)
  }

  searches(text : Observable<string> , http : HttpClient)
  {
    text.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(text => text.length >0),
      switchMap( text => 
        text
      )
    ).subscribe(console.log);

  }

}
