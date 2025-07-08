import { Component } from '@angular/core';
<<<<<<< HEAD
import { ReservasService } from '../../../services/reservas.service';
=======
import { BookingService } from '../../../services/booking.service';
import { DatePipe } from '@angular/common';
>>>>>>> 252e7702f95604a7023cc23feca8e8293a2d5222

@Component({
  selector: 'app-reservas',
  imports: [ DatePipe ],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
<<<<<<< HEAD
  constructor ( private reservasService: ReservasService ) {};
  ngOnInit() {
    this.reservasService.getReservas().subscribe({
      next:( data ) => {
        console.log( data )
      },
      error:( error ) => {
        console.error( error )
      },
      complete: () => {}
    });
  }
=======
  bookings: any = [];
>>>>>>> 252e7702f95604a7023cc23feca8e8293a2d5222

  constructor( private bookingService: BookingService ) {}

  // Carga los datos en la inicializacion del componente
  ngOnInit() {
    this.bookingService.getBookings().subscribe({
      next: ( data ) => {
        console.log( data );
        this.bookings = data;   // Asignamos los datos que queremos visualizar en el componente
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
    });
  }
}
