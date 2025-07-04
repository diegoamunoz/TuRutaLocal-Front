import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, of, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router);

  return authService.verifyAuthenticateUser()
    .pipe(
      map((data) => {
        console.log( 'guard', data);
        if (! data ){
          router.navigateByUrl('register')
          return false;
        }
        return true;
      } ),
      catchError(() => {
        return of(false)
      } )
    )
  }