import { Component } from '@angular/core';

import { servicesService } from '../../../../services/services.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './reserva-new.component.html',
  styleUrl: './reserva-new.component.css'
})
export class ReservaNewComponent {
  formData!: FormGroup;
  servicios: any = [];

  constructor( 
    private servicioService: servicesService,
    private bookingService: BookingService,
    private router: Router
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
    this.loadData();
  };

  loadData () {
    this.servicioService.getServicios().subscribe({
      next: ( data ) => {
        console.log( data );
        this.servicios = data;  // Guardando los servicios que se van a desplegar en el componente
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
    });
  }

  onDelete( id:string) {
    console.log(id);
    this.bookingService.deleteBookings(id).subscribe({
    next: (data) => {
      console.log(data);
      this.loadData();
    },
    error: (error) => {
      console.error( error);
    },
    complete: () => {}
     })
  }
  onSubmit() {
    if( this.formData.valid ) {
      console.log( this.formData.value );

      this.bookingService.registerBooking( this.formData.value ).subscribe({
        next: ( data ) => {
          console.log( data );
          this.router.navigateByUrl('/dashboard/reservas')
        },
        error: ( error ) => {
          console.error( error );
        },
        complete: () => {}
      });
    }
  }
}
