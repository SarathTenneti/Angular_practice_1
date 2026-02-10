import { Component } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-temp-forms',
  imports: [FormsModule],
  templateUrl: './temp-forms.html',
  styleUrl: './temp-forms.css',
})
export class TempForms {
  uname: string = '';

  show(fc: any) {
    console.log(fc);
  }
}
