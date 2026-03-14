import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateName , updateEmail , updateMobile} from '../../actions';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  
  constructor( private store:Store<any>){}
  
  editName(input : HTMLInputElement){

    this.store.dispatch(updateName({name:input.value}));
    input.value = "";
  }
  
  editEmail( input : HTMLInputElement)
  {
    this.store.dispatch(updateEmail({email : input.value}));// here both type and payload together is called action
    input.value= "";
  }

  editMobile(input: HTMLInputElement) {
    const value = Number(input.value);
    this.store.dispatch(updateMobile({ mobile: value }));
    input.value = '';
  }

}
