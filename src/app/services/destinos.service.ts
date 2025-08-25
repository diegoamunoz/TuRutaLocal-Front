import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {
  enviroment: any;

  constructor( private http: HttpClient, private authService: AuthService ) { 
    this.enviroment = environment
  }

  registerDestino( newDestino: any ){
    console.log( 'DESTINO', newDestino);

    return this.http.post<any>( `${ this.enviroment.apiUrl}/destinos`, newDestino, {headers: this.authService .getHeaders()})
  }

  getDestinos() {
    return this.http.get<any>( `${ this.enviroment.apiUrl}/destinos`);

  }

  getDestinosDestacado( cantidad: number ) {
    return this.http.get<any>( `${ this.enviroment.apiUrl}/destinos/c/`+ cantidad );
  }

  deleteDestinos(id: string){
    return this.http.delete<any>( `${ this.enviroment.apiUrl}/destinos/` +id, {headers: this.authService .getHeaders()})
  }

  updateDestinos(id:string, updateDestinos: any){
    return this.http.patch<any>( `${ this.enviroment.apiUrl}/destinos/` +id, updateDestinos, {headers: this.authService .getHeaders()})
  }

  getDestinoByid(id: string){
    return this.http.get<any>( `${ this.enviroment.apiUrl}/destinos/` +id, {headers: this.authService .getHeaders()})
  }

}


// ng generate service services/destinos-service