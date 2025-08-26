import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
   imports: [ReactiveFormsModule],
})
export class RegisterComponent {
  formData: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      movil: new FormControl('', [Validators.required]),
      rol: new FormControl('cliente'), 
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      this.usersService.registerUser(this.formData.value).subscribe({
        next: (data) => {
          // console.log('Usuario registrado:', data);
          this.router.navigate(['/login']);
          this.formData.reset();
        },
        error: (err) => {
          this.formData.reset();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.error.errors.email
          });
          // console.error('Error registrando usuario', err.error.errors.email);
        }
      });
    }
  }
}
