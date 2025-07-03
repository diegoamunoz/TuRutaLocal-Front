import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  loginUser ( credentials: any ) { 
    return this.http.post( 'http://localhost:3000/api/auth/login', credentials )
  }

  saveLocalStorage( key: string, value: any ) {
    localStorage.setItem( key, value)
  }

  deleteLocalStorage( key:string){
    localStorage.removeItem(key ); 
  }

  verifyAuthenticadeUser() {
    return this.http.get( 'http://localhost:3000/api/auth/re-new-token', { headers: this.getHeaders()})
  }

  
  getHeaders() {
    const token = localStorage.getItem( 'token') ?? ''; //Obtiene el token del localStorage
     return new HttpHeaders().set( 'X-Token' , token); //Envuelve el token en una Header tipo Http
  }
}
