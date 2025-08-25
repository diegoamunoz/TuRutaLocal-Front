import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {
  enviroment: any;

  constructor(  private http: HttpClient, private authService: AuthService ) { 
        this.enviroment = environment
  }

  registerResena( newResena: any ){
    console.log( 'RESENA', newResena);

    return this.http.post<any>( `${ this.enviroment.apiUrl}/resenas`, newResena, {headers: this.authService .getHeaders()})
  }

  getResenas(){
    return this.http.get( `${ this.enviroment.apiUrl}/resenas`)
  } 

  deleteResenas(id: string){
    return this.http.delete<any>( `${ this.enviroment.apiUrl}/resenas/` +id, {headers: this.authService .getHeaders()})
  }

  updateResenas(id:string, updateResenas: any){
    return this.http.patch<any>( `${ this.enviroment.apiUrl}/resenas/` +id, this.updateResenas, {headers: this.authService .getHeaders()})
  }

  getResenasByid(id: string){
    return this.http.get<any>( `${ this.enviroment.apiUrl}/resenas/` +id, {headers: this.authService .getHeaders()})
  }

}
