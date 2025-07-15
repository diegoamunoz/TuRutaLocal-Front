import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

 registerUser(userData: any) {
  return this.http.post(`${this.API}/users`, userData);
}


  getUsers() {
    return this.http.get<any>( 'http://localhost:3000/api/users/', { headers: this.authService.getHeaders() } );
  }

  deleteUser(id:string){
    return this.http.delete<any>('http://localhost:3000/api/users/'+id, { headers: this.authService.getHeaders() } )
  }

  updateUser(id:string, updateUser:any){
    return this.http.patch<any>( 'http://localhost:3000/api/users/'+id, updateUser, {headers: this.authService.getHeaders() }  )
  }

  getUserbyId(id:string){
    return this.http.get<any>( 'http://localhost:3000/api/users/'+id, { headers: this.authService.getHeaders() } )
  }


}