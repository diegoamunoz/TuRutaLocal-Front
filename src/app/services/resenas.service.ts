import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {

  constructor(  private http: HttpClient ) { }

  getResenas(){
    return this.http.get( 'http://localhost:3000/api/resenas')
  } 
}
