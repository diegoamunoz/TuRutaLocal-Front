import { Component } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservas',
  imports: [ DatePipe ],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  bookings: any = [];

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
