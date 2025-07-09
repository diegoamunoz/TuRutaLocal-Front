import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class servicesService {



  constructor(private http: HttpClient) { }

  registerServicio (newServicio:any) {
    return this.http.post('http://localhost:3000/api/servicios',newServicio )
  }
  getServicios () {
    return this.http.get('http://localhost:3000/api/servicios');
  }

  deleteServicios (id: string ) { 
    // return this.http.delete( 'http://localhost:3000/api/servicios' + id );
    return this.http.delete( `http://localhost:3000/api/servicios/${ id }` );

  }
}
