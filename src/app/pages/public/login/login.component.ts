import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Atributos de la clase
  formData!: FormGroup; // Nombre Formulario

  constructor( private authService: AuthService, private router: Router ) {
    // Define la agrupacion de campos del formulario
    this.formData = new FormGroup({
      email: new FormControl( '', [ Validators.required, Validators.email ] ),
      password: new FormControl( '', [ Validators.required, Validators.minLength( 6 ), Validators.maxLength( 12 ) ] )
    });
  }

  onSubmit() {
    if( this.formData.valid ) {
      console.log( this.formData.value );  // {email: 'jcarlosj.dev@gmail.com', password: 'wqeqweqw'}
      
      this.authService.loginUser( this.formData.value ).subscribe({
        next: ( isAuthenticated: boolean ) => { // El tipo de 'data' ahora es boolean
          if ( isAuthenticated ) {
            console.log( 'Login exitoso, redirigiendo a dashboard' );
            this.router.navigateByUrl( 'dashboard' );
          } else {
            console.log( 'Login fallido, redirigiendo a home (desde next si el servicio no lanzó error)' );
            // Esto solo se ejecutaría si el servicio en su map retorna false sin lanzar un error.
            // Para el escenario de credenciales inválidas, el 'error' callback debería manejarse.
            this.router.navigateByUrl( 'home' );
          }
        },
        error: ( error: any ) => {
          console.error( 'Error en el login:', error );
          // Redirige al home en caso de un error real (ej. 401, o error de servidor)
          this.router.navigateByUrl( 'home' );
        },
        complete: () => {
          this.formData.reset();
        }
      });
    }
  }

}