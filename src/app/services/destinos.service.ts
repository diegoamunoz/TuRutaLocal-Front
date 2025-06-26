import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  constructor( private http: HttpClient ) { }

  registerDestino( newDestino: any ) {
    return this.http.post( 'http://localhost:3000/api/destinos', newDestino )
  }
}
