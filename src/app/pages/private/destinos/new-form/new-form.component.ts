import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DestinosService } from '../../../../services/destinos.service';

@Component({
  selector: 'app-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class destinosNewForm {
  formData!: FormGroup;
  destinos: any =  [];

  constructor(private destinosService: DestinosService ){
    this.formData = new FormGroup({
      name: new FormControl ( '',[ Validators.required]),
      urlimage: new FormControl (),
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
    this.destinosService.getDestinos().subscribe({
      next: (data: any) => {
        console.log( data );
        this.destinos = data;
      },
      error: (error: any) => {
        console.log( error );
      },
      complete: () => {
        console.log( 'complete' );
      }
    })
  }

  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
  }

}
