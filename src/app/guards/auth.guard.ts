import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthService );

  authService.verifyAuthenticadeUser().subscribe( {
    next: ( data ) => {
      console.log( data );
    },
    error: ( error ) => {
      console.error( error );
    },
    complete: () => {}
  }
  );

  return true;
};
