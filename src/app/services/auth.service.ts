import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser ( credentials: any ) {
    return this.http.post<any>('http://localhost:3000/api/auth/login', credentials)
      .pipe(
        tap( ( response ) => {
          console.log( 'tap: ', response );

          if( ! response.msg ) {
            this.saveLocalStorage( 'token', response.token );
            console.log( 'tap: ', response.user );
            // TODO: Revisar que guarde los datos del usuario en el localStorage (Esta fallando)
            this.saveLocalStorage( 'user', JSON.stringify( response.user ) );
          }

          return response;
        } )
      )
  }
  saveLocalStorage( key: string ,value: any ) {
    localStorage.setItem( key, value)
  }
  deleteLocalStorage( key: string ){
    localStorage.removeItem( key )
  }

  // verifyAuthenticateUser() {
  //   return this.http.get( 'http://localhost:3000/api/auth/re-new-token', { headers: this.getHeaders() } )
  //     .pipe(
  //       map( ( data: any ) => {
  //         console.log( 'Service', data );

  //         return data.token;
  //       }),
  //       catchError( () => {
  //         return of( false );
  //       })
  //     );
  // //   .pipe(tap( (data) => {
  // //     console.log(data);
  // //     return data;
  // //   }),
  // //   map((newData: any) => {
  // //     return newData.token.lenght
  // //   } ),
  // //   catchError( () => {
  // //     return of(false);
  // //   } )
  // // )
  // }

  verifyAuthenticatedUser() : Observable<boolean> {
    return this.http.get<any>( 'http://localhost:3000/api/auth/re-new-token', { headers: this.getHeaders() } )
      .pipe(
        tap( ( response ) => {
          console.log( 'tap: ', response );

          return response;
        } ),
        map( response => {
          console.log( response.token );
          console.log( !! response.token );

          if( ! response.msg ) {
            this.saveLocalStorage( 'token', response.token );
            this.saveLocalStorage( 'user', response.user );
          }
          
          return !! response.token;
        } ),
        catchError( () => of( false ) )
      );
  }

  getHeaders() {
    const token = localStorage.getItem('token')??'';
    return new HttpHeaders().set('X-token', token);
  }
}

