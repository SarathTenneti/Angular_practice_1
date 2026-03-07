import { Component } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-temp-forms',
  imports: [FormsModule],
  templateUrl: './temp-forms.html',
  styleUrl: './temp-forms.css',
})
export class TempForms {
  
  submitted(form: NgForm){
    console.log('submitted');
    console.log('form value:', form.value);
    console.log('form valid:', form.valid);
  }
}
