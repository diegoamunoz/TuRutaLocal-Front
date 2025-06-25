import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiciosService } from '../../../../services/servicios.service';


@Component({
  selector: 'app-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class destinosNewForm {
  formData!: FormGroup;
  servicios: any =  [];

  constructor(private serviciosService: ServiciosService ){
    this.formData = new FormGroup({
      name: new FormControl ( '',[ Validators.required]),
      urlimage: new FormControl (),
      score: new FormControl (),
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
      console.log( this.formData.value )
    }

    this.formData.reset();  // limpiamos los campos del formulario 
  }
  
  ngOnInit() {
    this.serviciosService.getServicios().subscribe({
      next: (data) => {
        console.log(data);
        this.servicios = data
      },
      error: ( error ) => {
        console.error (error);
      },
      complete: () => {
        console.log ('complete')
      }
    }

    )
  }

  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
  }

}
