import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservasService } from '../../../../services/reservas.service';
import { servicesService } from '../../../../services/services.service';

@Component({
  selector: 'app-reserva-new',
  imports: [ ReactiveFormsModule],
=======
import { servicesService } from '../../../../services/services.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';

@Component({
  selector: 'app-reserva-new',
  imports: [ ReactiveFormsModule ],
>>>>>>> 252e7702f95604a7023cc23feca8e8293a2d5222
  templateUrl: './reserva-new.component.html',
  styleUrl: './reserva-new.component.css'
})
export class ReservaNewComponent {
<<<<<<< HEAD
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
=======
  formData!: FormGroup;
  servicios: any = [];

  constructor( 
    private servicioService: servicesService,
    private bookingService: BookingService
  ) {
    // TODO: Tarea para Diego, colocar las validaciones de los campos
    this.formData = new FormGroup({
      servicio: new FormControl( '', [] ),
      fechaReservada: new FormControl( '', [] ),
      cantidadPersonas: new FormControl( '', [] ),
      estado: new FormControl( '', [] ),
      // codigoReserva: new FormControl( '', [] )
    });
  }

  // La inicializacion del componente
  ngOnInit() {
    this.servicioService.getServicios().subscribe({
      next: ( data ) => {
        console.log( data );
        this.servicios = data;  // Guardando los servicios que se van a desplegar en el componente
>>>>>>> 252e7702f95604a7023cc23feca8e8293a2d5222
      },
      error: ( error ) => {
        console.error( error );
      },
<<<<<<< HEAD
      complete: () => {
        console.log( 'complete' );
      }
    });
  }
  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
    }
  }

=======
      complete: () => {}
    });
  }

  onSubmit() {
    if( this.formData.valid ) {
      console.log( this.formData.value );

      this.bookingService.registerBooking( this.formData.value ).subscribe({
        next: ( data ) => {
          console.log( data );
        },
        error: ( error ) => {
          console.error( error );
        },
        complete: () => {}
      });
    }
  }
}
>>>>>>> 252e7702f95604a7023cc23feca8e8293a2d5222
