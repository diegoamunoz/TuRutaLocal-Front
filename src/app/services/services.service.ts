import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class servicesService {
  enviroment: any;


  constructor(private http: HttpClient , private authService: AuthService) { 
        this.enviroment = environment
    
  }

  registerServicio (newServicio:any) {
    return this.http.post<any>(`${ this.enviroment.apiUrl}/servicios`,newServicio, {headers: this.authService.getHeaders()} )
  }
  getServicios () {
    return this.http.get<any>(`${ this.enviroment.apiUrl}/servicios`);
  }

  deleteServicios (id: string ) { 
    // return this.http.delete( `${ this.enviroment.apiUrl} /servicios' + id );
    return this.http.delete<any>( `${ this.enviroment.apiUrl}/servicios/${ id }`, {headers: this.authService.getHeaders() } );

  }
  
  updateServicio ( id: string, updateServicio: any ) { 
    console.log(id, updateServicio);
    return this.http.patch<any>(`${ this.enviroment.apiUrl}/servicios/${id}`, updateServicio , {headers: this.authService.getHeaders()}) 
  }
  getServicioById (id: string)  {
    return this.http.get<any> (`${ this.enviroment.apiUrl}/servicios/${ id }`, {headers: this.authService.getHeaders() })
  }
}