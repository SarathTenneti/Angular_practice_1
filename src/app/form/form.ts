import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  
  constructor( private store:Store<any>){}
  
  updateName(input : HTMLInputElement){

    this.store.dispatch({type : 'name-edit' , payload : input.value});
    input.value = "";
  }

  updateEmail( input : HTMLInputElement)
  {
    this.store.dispatch({type:'email-edit',payload : input.value});
    input.value= "";
  }

  updateMobile( input : HTMLInputElement){
    this.store.dispatch({type : 'mobile-edit' , payload : input.value});
    input.value="";
  }

}
