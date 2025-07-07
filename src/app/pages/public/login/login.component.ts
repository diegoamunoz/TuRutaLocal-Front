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
  formData!: FormGroup;


  constructor( private authService: AuthService, private router:Router)  {
    this.formData = new FormGroup({
      email: new FormControl( '', [Validators.required, Validators.email] ),
      password: new FormControl( '', [Validators.required, Validators.minLength(6), Validators.maxLength(12) ] )
    })
  }
  onSubmit() {
    if (this.formData.valid){
      console.log(this.formData.value);
      this.authService.loginUser( this.formData.value).subscribe({
        next: (data: any ) =>{
          this.authService.saveLocalStorage('token', data.token)
          this.router.navigateByUrl('dashboard');
        },
        
        error: (error ) =>{
          console.error(error);
        },
        complete: ( ) =>{ 
          this.formData.reset();
        }
      })
  }
}
}