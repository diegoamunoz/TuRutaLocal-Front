import { Component } from '@angular/core';

import { servicesService } from '../../../../app/services/services.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../../../../app/services/booking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reserva-publica',
  imports: [ReactiveFormsModule],
  templateUrl: './reserva-publica.component.html',
  styleUrl: './reserva-publica.component.css'
})
export class ReservaPublicaComponent {

   formData!: FormGroup;
     servicios: any = [];
     scrollToFormulario(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth' })}
   
     constructor( 
       private servicioService: servicesService,
       private bookingService: BookingService,
       private router: Router
   
     ) {
   
       this.formData = new FormGroup({
         servicio: new FormControl( '', [] ),
         fechaReservada: new FormControl( '', [] ),
         cantidadPersonas: new FormControl( '', [] ),
         estado: new FormControl( 'pendiente'),
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
       this.bookingService.deleteBooking(id).subscribe({
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
            //  this.router.navigateByUrl('/dashboard/reservas')
           },
           error: ( error ) => {
             console.error( error );
           },
           complete: () => {}
         });
       }
     }
}



