import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {
  constructor( private http: HttpClient, private authService: AuthService ) { }

  registerDestino( newDestino: any ){
    console.log( 'DESTINO', newDestino);

    return this.http.post( 'http://localhost:3000/api/destinos', newDestino, {headers: this.authService.getHeaders()})
  }

  getDestinos() {
    return this.http.get( 'http://localhost:3000/api/destinos')

  }
}


// ng generate service services/destinos-service