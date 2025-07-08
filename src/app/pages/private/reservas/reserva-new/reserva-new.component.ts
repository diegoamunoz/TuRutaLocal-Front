import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservasService } from '../../../../services/reservas.service';
import { servicesService } from '../../../../services/services.service';

@Component({
  selector: 'app-reserva-new',
  imports: [ ReactiveFormsModule],
  templateUrl: './reserva-new.component.html',
  styleUrl: './reserva-new.component.css'
})
export class ReservaNewComponent {
  formData!:FormGroup 
  servicios:any=[]
  constructor (
  private serviciosService:servicesService,
  private ReservasService: ReservasService
) {
this.formData = new FormGroup({
    servicio: new FormControl('', [Validators.required]),
    fechaReservada: new FormControl('', [Validators.required]),
    cantidadPersonas: new FormControl('', [Validators.required]),
    estadoReserva: new FormControl('', [Validators.required]),
    // codigoReserva: new FormControl('cliente', []) 
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
      this.ReservasService.registerReserva( this.formData.value).subscribe({
        next: ( data) => {
          console.log( data );
        },
        error: ( error) => {
          console.error( error );
        },
        complete: () => {
          this.formData.reset(); // Limpiamos el formulario
        }
      })
      
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

