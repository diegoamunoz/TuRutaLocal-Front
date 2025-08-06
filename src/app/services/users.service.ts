import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
    BASE_URL:string = environment.apiUrl
  

  private API = '`${this.BASE_URL}/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

 registerUser(userData: any) {
  return this.http.post(`${this.API}/users`, userData);
}


  getUsers() {
    return this.http.get<any>( `${this.BASE_URL}/api/users/`, { headers: this.authService.getHeaders() } );
  }

  deleteUser(id:string){
    return this.http.delete<any>(`${this.BASE_URL}/api/users/`+id, { headers: this.authService.getHeaders() } )
  }

  updateUser(id:string, updateUser:any){
    return this.http.patch<any>( `${this.BASE_URL}/api/users/`+id, updateUser, {headers: this.authService.getHeaders() }  )
  }

  getUserbyId(id:string){
    return this.http.get<any>( `${this.BASE_URL}/api/users/`+id, { headers: this.authService.getHeaders() } )
  }


}