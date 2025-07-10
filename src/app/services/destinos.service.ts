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

    return this.http.post<any>( 'http://localhost:3000/api/destinos', newDestino, {headers: this.authService.getHeaders()})
  }

  getDestinos() {
    return this.http.get<any>( 'http://localhost:3000/api/destinos');

  }

  deleteDestinos(id: string){
    return this.http.delete<any>( 'http://localhost:3000/api/destinos/' +id, {headers: this.authService.getHeaders()})
  }

  updateDestinos(id:string, updateDestinos: any){
    return this.http.patch<any>( 'http://localhost:3000/api/destinos/' +id, updateDestinos, {headers: this.authService.getHeaders()})
  }

  getDestinoByid(id: string){
    return this.http.get<any>( 'http://localhost:3000/api/destinos/' +id, {headers: this.authService.getHeaders()})
  }

}


// ng generate service services/destinos-service