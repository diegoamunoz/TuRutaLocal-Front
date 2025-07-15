import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ResenasService } from "../../../../services/resenas.service";

@Component({
    selector: 'app-resenas',
    imports: [ReactiveFormsModule],
    templateUrl: './new-form.component.html',
    styleUrl: './new-form.component.css'
})
export class resenas{
    formData!: FormGroup;
    resenas: any =  [];

    constructor(private resenasService: ResenasService){
        this.formData = new FormGroup({
            usuario: new FormControl ( '',[Validators.required]),
            servicio: new FormControl ( '',[ Validators.required]),
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