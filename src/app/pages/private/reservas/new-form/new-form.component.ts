import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})

export class ReservasNewForm {
  formData!: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      nombre: new FormControl('', [ Validators.required, Validators.minLength ( 5 ), Validators.maxLength(50) ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      movil: new FormControl('', [Validators.required]),
      rol: new FormControl('cliente', []),

    });
        
  }

  onSubmit() {
    
    console.log( this.formData.invalid,
      this.formData.valid,
      this.formData.invalid,
      this.formData.pristine,
      this.formData.dirty,
      this.formData.touched
    )

    if ( this.formData.valid )
    console.log( this.formData.value );

    this.formData.reset(); //Limpiamos los campos del formulario
    
  }
}