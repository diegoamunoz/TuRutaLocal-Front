import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinosService } from '../../../../services/destinos.service';

@Component({
  selector: 'app-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class destinosNewForm {
  formData!: FormGroup;
  servicios: any =  [];

  constructor(
    // private sServicio: servicesService,
    private destinosService: DestinosService,
    private router: Router 
  ){
    this.formData = new FormGroup({
      name: new FormControl ( '',[ Validators.required]),
      urlImage: new FormControl (),
      descripcion: new FormControl(),
      services: new FormControl ()   // TODO: Traer los datos antes de establecer las reglas 
    });
  }

  onSubmit(){
    console.log( this.formData.value );
    console.log(
      this.formData.valid,
      this.formData.invalid,
      this.formData.pristine,
      this.formData.dirty,
      this.formData.touched
    )

    if( this.formData.valid ){
      console.log( this.formData.value );
      this.destinosService.registerDestino( this.formData.value).subscribe({
        next: ( data ) => {
          console.log( data );
          this.router.navigateByUrl( '/dashboard/destinos' );
        },
        error: ( error ) => {
          console.error( error );
        },
        complete: () => {
          this.formData.reset();  // Limpiamos los campos del formulario
        }
      });
    }

  }
  
    ngOnDestroy() {
    console.log( 'ngOnDestroy' );
  }

}


  // ngOnInit() {
  //   this.sServicio.getServicios().subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       this.servicios = data
  //     },
  //     error: ( error ) => {
  //         console.error( error );
  //       },
  //     complete: () => {
  //       this.formData.reset();  // Limpiamos los campos del formulario
  //     }
  //   })
  // }


