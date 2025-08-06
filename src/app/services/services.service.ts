import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class servicesService {

    BASE_URL:string = environment.apiUrl
  

  constructor(private http: HttpClient , private authService: AuthService) { }

  registerServicio (newServicio:any) {
    return this.http.post<any>(`${this.BASE_URL}/api/servicios`,newServicio, {headers: this.authService.getHeaders()} )
  }
  getServicios () {
    return this.http.get<any>(`${this.BASE_URL}/api/servicios`);
  }

  deleteServicios (id: string ) { 
    // return this.http.delete( '`${this.BASE_URL}/api/servicios' + id );
    return this.http.delete<any>( `${this.BASE_URL}/api/servicios/${ id }`, {headers: this.authService.getHeaders() } );

  }
  
  updateServicio ( id: string, updateServicio: any ) { 
    console.log(id, updateServicio);
    return this.http.patch<any>(`${this.BASE_URL}/api/servicios/${id}`, updateServicio , {headers: this.authService.getHeaders()}) 
  }
  getServicioById (id: string)  {
    return this.http.get<any> (`${this.BASE_URL}/api/servicios/${ id }`, {headers: this.authService.getHeaders() })
  }
}