import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  BASE_URL:string = environment.apiUrl

  constructor( private http:HttpClient) { }

  registerReserva ( newReserva: any) {
    return this.http.post( `${ this.BASE_URL }/api/reservas` , newReserva );

  }

  getReservas() {
    return this.http.get( `${ this.BASE_URL }/api/reservas` );
  }
}
