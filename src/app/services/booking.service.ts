import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  enviroment: any;

  constructor( 
    private http: HttpClient,
    private authService: AuthService) { 
    this.enviroment = environment

    }

  registerBooking( newBooking: any ) {
    return this.http.post<any>( `${this.enviroment.apiUrl}/reservas`, newBooking, { headers: this.authService.getHeaders() } )
  }

  getBookings() {
    return this.http.get<any>( `${this.enviroment.apiUrl}/reservas` );
  }

  deleteBooking(id:string){
    return this.http.delete<any>(`${this.enviroment.apiUrl}/reservas/`+id, { headers: this.authService.getHeaders() } )
  }

  updateBooking(id:string, updateBooking:any){
    return this.http.patch<any>( `${this.enviroment.apiUrl}/reservas/`+id, updateBooking, {headers: this.authService.getHeaders() }  )
  }

  getBookingbyId(id:string){
    return this.http.get<any>( `${this.enviroment.apiUrl}/reservas/`+id, { headers: this.authService.getHeaders() } )
  }
}