import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor( 
    private http: HttpClient,
    private authService: AuthService
  ) { }

  registerBooking( newBooking: any ) {
    return this.http.post( 'http://localhost:3000/api/reservas', newBooking, { headers: this.authService.getHeaders() } )
  }

  getBookings() {
    return this.http.get( 'http://localhost:3000/api/reservas' );
  }
}
