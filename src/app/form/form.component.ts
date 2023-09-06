import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name :string ='';
  email :string ='';
  message :string ='';
  isSubmitted :boolean = false;

  onSubmit():void{
    this.isSubmitted = true;
  }
}
