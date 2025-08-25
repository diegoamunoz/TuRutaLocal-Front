import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  enviroment: any;

  constructor( private http:HttpClient) {
        this.enviroment = environment
    
   }

  registerReserva ( newReserva: any) {
    return this.http.post( `${ this.enviroment.apiUrl}/reservas` , newReserva );

  }

  getReservas() {
    return this.http.get( `${ this.enviroment.apiUrl}/reservas` );
  }
}
