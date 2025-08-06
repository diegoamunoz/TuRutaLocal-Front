import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {
BASE_URL:string = environment.apiUrl
  constructor(  private http: HttpClient ) { }

  getResenas(){
    return this.http.get( `${this.BASE_URL}/api/resenas`)
  } 
}
