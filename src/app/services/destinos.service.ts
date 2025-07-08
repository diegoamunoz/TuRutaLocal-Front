import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  constructor( private http: HttpClient ) { }

  getDestinos() {
    return this.http.get( 'http://localhost:3000/api/destinos' )

  }
}


// ng generate service services/destinos-service