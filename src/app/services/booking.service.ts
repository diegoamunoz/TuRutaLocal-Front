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
    return this.http.post<any>( 'http://localhost:3000/api/reservas', newBooking, { headers: this.authService.getHeaders() } )
  }

  getBookings() {
    return this.http.get<any>( 'http://localhost:3000/api/reservas' );
  }

  deleteBooking(id:string){
    return this.http.delete<any>('http://localhost:3000/api/reservas/'+id, { headers: this.authService.getHeaders() } )
  }

  updateBooking(id:string, updateBooking:any){
    return this.http.patch<any>( 'http://localhost:3000/api/reservas/'+id, updateBooking, {headers: this.authService.getHeaders() }  )
  }

  getBookingbyId(id:string){
    return this.http.get<any>( 'http://localhost:3000/api/reservas/'+id, { headers: this.authService.getHeaders() } )
  }
}