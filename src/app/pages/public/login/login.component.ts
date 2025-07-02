import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData!: FormGroup;


  constructor( private authService: AuthService)  {
    this.formData = new FormGroup({
      email: new FormControl( '', [Validators.required, Validators.email] ),
      password: new FormControl( '', [Validators.required, Validators.minLength(6), Validators.maxLength(12) ] )
    })
  }
  onSubmit() {
    if (this.formData.valid){
      console.log(this.formData.value);
      this.authService.loginUser( this.formData.value).subscribe({
        next: (data ) =>{ 
          console.log(data);
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