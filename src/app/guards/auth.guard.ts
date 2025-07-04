import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthService );
  const router = inject( Router );

  return authService.verifyAuthenticadeUser()
    .pipe(
      map( ( data ) => {
        console.log( data );

        if( ! data ) {
          router.navigateByUrl( 'register' )
          return false;
        }
        return true;
      }),
      catchError( () => {
        return of ( false );
      })
    );

};
