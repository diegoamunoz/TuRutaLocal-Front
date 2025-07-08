import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  constructor( private http: HttpClient ) { }

  getDestinos( newDestino: any) {
    return this.http.get( 'http://localhost:3000/api/destinos', newDestino, { headers: this.} )

  }
}


// ng generate service services/destinos-service