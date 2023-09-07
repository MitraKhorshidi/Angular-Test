import { Component, inject } from '@angular/core';
import { MyFirstServiceService } from '../services/my-first-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  data: Array<{ name: string, email: string, message: string }> = [];
  private service = inject(MyFirstServiceService);

  constructor() {
    this.data = this.service.getAll();
    this.isSubmitted = this.service.messages.length > 0;

  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.service.insert({ name: this.name, email: this.email, message: this.message });
  }
  deletedata(index: number): void {
    this.service.delete(index);
  }
}
