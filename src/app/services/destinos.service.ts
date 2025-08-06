import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {
  BASE_URL:string = environment.apiUrl
  constructor( private http: HttpClient, private authService: AuthService ) { }

  registerDestino( newDestino: any ){
    console.log( 'DESTINO', newDestino);

    return this.http.post<any>( `${this.BASE_URL}/api/destinos`, newDestino, {headers: this.authService .getHeaders()})
  }

  getDestinos() {
    return this.http.get<any>( `${this.BASE_URL}/api/destinos`);

  }

  getDestinosDestacado( cantidad: number ) {
    return this.http.get<any>( `${this.BASE_URL}/api/destinos/c/`+ cantidad );
  }

  deleteDestinos(id: string){
    return this.http.delete<any>( `${this.BASE_URL}/api/destinos/` +id, {headers: this.authService .getHeaders()})
  }

  updateDestinos(id:string, updateDestinos: any){
    return this.http.patch<any>( `${this.BASE_URL}/api/destinos/` +id, updateDestinos, {headers: this.authService .getHeaders()})
  }

  getDestinoByid(id: string){
    return this.http.get<any>( `${this.BASE_URL}/api/destinos/` +id, {headers: this.authService .getHeaders()})
  }

}


// ng generate service services/destinos-service