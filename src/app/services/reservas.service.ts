import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor( private http:HttpClient) { }

  registerReserva ( newReserva: any) {
    return this.http.post( 'http://localhost:3000/api/reservas' , newReserva );

  }

  getReservas() {
    return this.http.get( 'http://localhost:3000/api/reservas' );
  }
}
