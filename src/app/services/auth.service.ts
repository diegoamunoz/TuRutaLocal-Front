import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL:string = environment.apiUrl

  constructor( private http: HttpClient, private router: Router ) { }

  loginUser ( credentials: any ) {    // credentials: {username: 'jcarlosj.dev@gmail.com', password: 'wqeqweqw'}
    return this.http.post<any>( `${this.BASE_URL}/api/auth/login`, credentials )
      .pipe(
        tap( ( response ) => {
          console.log( response );

          if( response.token && response.user ) {
            this.saveLocalStorage( 'token', response.token );   // Almacena el token en el localStorage
            this.saveLocalStorage( 'user', JSON.stringify( response.user ) );   // Almacena el token en el localStorage
          }

          return response;
        } ),
        map( ( response ) => {
            console.log( response );
            // Retorna true solo si el token y el user existen, indicando éxito.
            return response.token && response.user ? true : false;
        }),
        catchError( ( errorResponse ) => {
          console.error( errorResponse );
          // Importante: No "tragar" el error aquí si quieres que el error handler del componente se dispare.
          // Propaga el error o devuelve un Observable con error.
          if( errorResponse.status === 401 ) { // Usar === para comparación estricta
            console.error( errorResponse.error.msg );
            return throwError( () => new Error( errorResponse.error.msg || 'Credenciales inválidas' ) ); // Lanza un error
          }
          return throwError( () => new Error( 'Error: El servidor está fallando' ) ); // Lanza un error
        })
      );
  }

  logoutUser() {
    console.log( 'Cerrando sesión...' );
    this.deleteLocalStorage( 'token' );
    this.deleteLocalStorage( 'user' );
    // Redirige al usuario a la página de login después de cerrar sesión
    this.router.navigateByUrl( 'login' );
  }

  saveLocalStorage( key: string, value: any ) {
    localStorage.setItem( key, value );
  }

  // Eliminar cualquier key del LocalStorage
  deleteLocalStorage( key: string ) {
    localStorage.removeItem( key );
  }

  // Verificar el usuario autenticado
  verifyAuthenticateUser() {
    return this.http.get( `${this.BASE_URL}/api/auth/re-new-token`, { headers: this.getHeaders() } )
      .pipe(
        map( ( data: any ) => {
          console.log( 'Service verifyAuthenticateUser response:', data );
          // Asegúrate de que 'data' contenga la lógica para determinar si está autenticado.
          // Por ejemplo, si tu backend envía un campo 'isAuthenticated' o 'user' si la sesión es válida.
          // Para este ejemplo, asumamos que si la llamada es exitosa y hay un 'user', entonces está autenticado.
          if (data && data.user && data.token) {
              this.saveLocalStorage('token', data.token); // Opcional: Renovar token si el backend lo envía
              this.saveLocalStorage('user', JSON.stringify(data.user));
              return true;
          }
          return false;
        }),
        catchError( (error) => {
          console.error('Error en verifyAuthenticateUser:', error);
          this.deleteLocalStorage('token'); // Limpia token si la validación falla
          this.deleteLocalStorage('user');
          return of( false ); // Devuelve false si hay un error (no autenticado)
        })
      );
  }
  
  getHeaders() {
    const token = localStorage.getItem( 'token' ) ?? '';    // Obtiene el token del localStorage
    return new HttpHeaders().set( 'X-Token', token );       // Envuelve el token en una Header tipo Http
  }
}
