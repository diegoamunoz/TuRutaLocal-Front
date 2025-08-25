import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  enviroment: any;



  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.enviroment = environment

  }

  registerUser(userData: any) {
    return this.http.post(`${this.enviroment.apiUrl}`, userData);
  }


  getUsers() {
    return this.http.get<any>(`${this.enviroment.apiUrl}/users/`, { headers: this.authService.getHeaders() });
  }

  deleteUser(id: string) {
    return this.http.delete<any>(`${this.enviroment.apiUrl}/users/` + id, { headers: this.authService.getHeaders() })
  }

  updateUser(id: string, updateUser: any) {
    return this.http.patch<any>(`${this.enviroment.apiUrl}/users/` + id, updateUser, { headers: this.authService.getHeaders() })
  }

  getUserbyId(id: string) {
    return this.http.get<any>(`${this.enviroment.apiUrl}/users/` + id, { headers: this.authService.getHeaders() })
  }


}