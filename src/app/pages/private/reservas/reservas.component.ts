import { Component } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservas',
  imports: [ DatePipe, RouterLink ],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  bookings: any = [];

  constructor( private bookingService: BookingService ) {}

  // Carga los datos en la inicializacion del componente
  ngOnInit() {
   this.onLoadData() 
  }

  onLoadData(){
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

  onDelete(id:string){
    this.bookingService.deleteBooking(id).subscribe({
      next: ( data ) => {
        console.log( data );
        this.onLoadData()   
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
    })

  }
}
