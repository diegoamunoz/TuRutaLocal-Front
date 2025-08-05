import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {

  constructor(  private http: HttpClient, private authService: AuthService ) { }

  registerResena( newResena: any ){
    console.log( 'DESTINO', newResena);

    return this.http.post<any>( 'http://localhost:3000/api/resenas', newResena, {headers: this.authService .getHeaders()})
  }

  getResenas(){
    return this.http.get( 'http://localhost:3000/api/resenas')
  } 
}
