import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class servicesService {



  constructor(private http: HttpClient , private authService: AuthService) { }

  registerServicio (newServicio:any) {
    return this.http.post<any>('http://localhost:3000/api/servicios',newServicio, {headers: this.authService.getHeaders()} )
  }
  getServicios () {
    return this.http.get<any>('http://localhost:3000/api/servicios');
  }

  deleteServicios (id: string ) { 
    // return this.http.delete( 'http://localhost:3000/api/servicios' + id );
    return this.http.delete<any>( `http://localhost:3000/api/servicios/${ id }`, {headers: this.authService.getHeaders() } );

  }
  
  updateServicio ( id: string, updateServicio: any ) { 
    return this.http.patch<any>(`http://localhost:3000/api/servicios/${id}`, updateServicio , {headers: this.authService.getHeaders()}) 
  }
  getServicioById (id: string)  {
    return this.http.get<any> (`http://localhost:3000/api/servicios/${ id }`, {headers: this.authService.getHeaders() })
  }
}
