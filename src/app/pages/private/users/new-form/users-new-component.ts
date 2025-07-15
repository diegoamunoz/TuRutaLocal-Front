import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './users-new-component.html',
  styleUrl: './users-new-component.css'
})

export class UserNewComponent {
  formData!: FormGroup;
  UsersService: any;

  constructor(
  private router: Router,
  private usersService: UsersService  // ← inyectar correctamente el servicio
) {
    this.formData = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength ( 5 ), Validators.maxLength(50) ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      movil: new FormControl('', [Validators.required]),
      rol: new FormControl('cliente', []),

    });
        
  }

  ngOnInit() {
  }

   onDelete( id:string) {
    console.log(id);
    this.UsersService.deleteUser(id).subscribe({
    next: (data: any) => {
      console.log(data);
    },
    error: (error: any) => {
      console.error( error);
    },
    complete: () => {}
     })
  }

  onSubmit() {
    
    console.log( )

    if ( this.formData.valid )
    console.log( this.formData.value );

    this.usersService.registerUser( this.formData.value ).subscribe({
        next: ( data: any ) => {
          console.log( data );
          // c
        },
        error: ( error: any ) => {
          console.error( error );
        },
        complete: () => {}
      });
    
  }
}