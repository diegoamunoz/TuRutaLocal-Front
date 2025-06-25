import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }

  getServicios() {
    return this.http.get( 'http://localhost:3000/api/servicios' )

  }
}
