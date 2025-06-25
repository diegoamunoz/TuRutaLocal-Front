import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServiciosService } from '../../../../servicios/servicios.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reservas-new-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})

export class ReservasNewForm {
  formData!:FormGroup 
  servicios:any=[]
  constructor (private serviciosService:ServiciosService) {
this.formData = new FormGroup({
    servicio: new FormControl('', [Validators.required]),
    fechaReserva: new FormControl('', [Validators.required]),
    cantidadPersonas: new FormControl('', [Validators.required]),
    estadoReserva: new FormControl('', [Validators.required]),
    codigoReserva: new FormControl('cliente', []) 
  });
  }
  

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
  ngOnInit() {
    this.serviciosService.getServicios().subscribe({
      next: ( data ) => {
        console.log( data );
        this.servicios = data;
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {
        console.log( 'complete' );
      }
    });
  }
  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
    }
  }


