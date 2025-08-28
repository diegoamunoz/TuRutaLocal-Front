import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {
  enviroment: any;

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.enviroment = environment
  }

  registerResena(newResena: any) {
    return this.http.post<any>(
      `${this.enviroment.apiUrl}/resenas`, 
      newResena, 
      { headers: this.authService.getHeaders() }
    )
  }

  // ✅ Público (solo aprobadas)
  getResenas() {
    return this.http.get(`${this.enviroment.apiUrl}/resenas`)
  }

  getResenaDestacada(cantidad: number) {
    return this.http.get<any>(`${this.enviroment.apiUrl}/resenas/c/`+ cantidad);
  }

  deleteResenas(id: string) {
    return this.http.delete<any>(
      `${this.enviroment.apiUrl}/resenas/` + id, 
      { headers: this.authService.getHeaders() }
    )
  }

  updateResenas(id:string, updateResenas: any) {
    return this.http.patch<any>(
      `${this.enviroment.apiUrl}/resenas/` + id, 
      updateResenas, 
      { headers: this.authService.getHeaders() }
    )
  }

  getResenasByid(id: string) {
    return this.http.get<any>(
      `${this.enviroment.apiUrl}/resenas/` + id, 
      { headers: this.authService.getHeaders() }
    )
  }

  // ✅ Nuevo: obtener todas las reseñas (admin)
  getAdminResenas() {
    return this.http.get<any>(
      `${this.enviroment.apiUrl}/resenas/admin`,
      { headers: this.authService.getHeaders() }
    )
  }

  // ✅ Nuevo: aprobar reseña
  approveResena(id: string) {
    return this.http.patch<any>(
      `${this.enviroment.apiUrl}/resenas/${id}/approve`, 
      {}, 
      { headers: this.authService.getHeaders() }
    )
  }
}
