import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'new-form-resenas',
    imports: [ReactiveFormsModule],
    templateUrl: './new-form.component.html',
    styleUrl: './new-form.component.css'
})
export class ResenasService {
    formData!: FormGroup;
    resenas: any =  [];

    constructor(private resenasService: ResenasService){
        this.formData = new FormGroup({
            usuario: new FormControl ( '',[Validators.required]),
            Servicio: new FormControl ( '',[ Validators.required]),
            score: new FormControl ( '',[ Validators.required]),
            comentario: new FormControl ( '',[ Validators.required])
        })
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
}