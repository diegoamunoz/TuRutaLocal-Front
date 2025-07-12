import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  formData!: FormGroup;
  selectedId!: string;

  constructor( 
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', []), // campo opcional
      movil: new FormControl('', [Validators.required]),
      rol: new FormControl('cliente', []),
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.selectedId = params['id'];

        this.usersService.getUserbyId(this.selectedId).subscribe({
          next: (data) => {
            console.log('User data:', data);

            // ✅ No hacemos patch de password
            this.formData.patchValue({
              name: data.name,
              email: data.email,
              username: data.username,
              movil: data.movil,
              rol: data.rol
            });
          },
          error: (error) => {
            console.error('Error cargando usuario', error);
          }
        });
      },
      error: (error) => console.error(error)
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      const userData = { ...this.formData.value };

      // ✅ Si no hay nueva contraseña, no se envía
      if (!userData.password || userData.password.trim() === '') {
        delete userData.password;
      }

      this.usersService.updateUser(this.selectedId, userData).subscribe({
        next: (data) => {
          console.log('Usuario actualizado:', data);
          this.router.navigateByUrl('/dashboard/users');
        },
        error: (error) => {
          console.error('Error actualizando usuario', error);
        }
      });
    }
  }
}
