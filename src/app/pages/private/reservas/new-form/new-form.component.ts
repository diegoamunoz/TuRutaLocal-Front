import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservas-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class ReservasNewForm {
  formData = new FormGroup({
    nombreServicio: new FormControl('', [Validators.required]),
    fechaReserva: new FormControl('', [Validators.required]),
    cantidadPersonas: new FormControl('', [Validators.required]),
    estadoReserva: new FormControl('', [Validators.required]),
    codigoReserva: new FormControl('cliente', [])
  });

  onSubmit() {
    console.log(
      'Invalid:', this.formData.invalid,
      'Valid:', this.formData.valid,
      'Pristine:', this.formData.pristine,
      'Dirty:', this.formData.dirty,
      'Touched:', this.formData.touched
    );

    if (this.formData.valid) {
      console.log( this.formData.value);
      this.formData.reset(); // Limpiamos el formulario
    }
  }
}
