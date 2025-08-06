import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  BASE_URL:string = environment.apiUrl
  constructor( 
    private http: HttpClient,
    private authService: AuthService
  ) { }
  registerBooking( newBooking: any ) {
    return this.http.post<any>( `${this.BASE_URL}/api/reservas`, newBooking, { headers: this.authService.getHeaders() } )
  }

  getBookings() {
    return this.http.get<any>( `${this.BASE_URL}/api/reservas` );
  }

  deleteBooking(id:string){
    return this.http.delete<any>(`${this.BASE_URL}/api/reservas/`+id, { headers: this.authService.getHeaders() } )
  }

  updateBooking(id:string, updateBooking:any){
    return this.http.patch<any>( `${this.BASE_URL}/api/reservas/`+id, updateBooking, {headers: this.authService.getHeaders() }  )
  }

  getBookingbyId(id:string){
    return this.http.get<any>( `${this.BASE_URL}/api/reservas/`+id, { headers: this.authService.getHeaders() } )
  }
}