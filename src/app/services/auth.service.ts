import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser ( credentials: any ) {
    return this.http.post('http://localhost:3000/api/auth/login', credentials)
  }
  saveLocalStorage( key: string ,value:any) {
    localStorage.setItem( key, value)
  }
  deleteLocalStorage(key: string){
  localStorage.removeItem(key)
  }

  verifyAuthenticateUser() {
    return this.http.get('http://localhost:3000/api/auth/re-new-token',{headers: this.getHeaders()})
    .pipe(
      map((data: any) => {
        console.log( 'service', data);
        return data.token;
      } ),
      catchError(() => {
        return of(false);
      } )
    );
  //   .pipe(tap( (data) => {
  //     console.log(data);
  //     return data;
  //   }),
  //   map((newData: any) => {
  //     return newData.token.lenght
  //   } ),
  //   catchError( () => {
  //     return of(false);
  //   } )
  // )
  }

  getHeaders() {
    const token = localStorage.getItem('token')??'';
    return new HttpHeaders().set('X-token', token);
  }
}

