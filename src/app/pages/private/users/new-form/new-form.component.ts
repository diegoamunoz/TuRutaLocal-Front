import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})

export class UserNewForm {
  formData!: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      nombre: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      movil: new FormControl(),
      rol: new FormControl(),

    });
        
  }

  onSubmit() {
    console.log( this.formData.value );
  }
}
