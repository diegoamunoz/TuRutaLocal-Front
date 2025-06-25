import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiciosComponent } from '../servicios.component';
import { servicesService } from '../../../../services/services.service';

@Component({
  selector: 'app-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class servicioNewFormcomponent {
  formData!:FormGroup ;
  categories:any = ['tour', 'safari', 'caminata']
  state:any = ['disponible', 'no-disponible', 'por-confirmar' ]

  constructor( private servicesService: servicesService ){
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      description: new FormControl( '', [Validators.required] ),
      price: new FormControl(0, [Validators.min(0), Validators.max(100) ]  ),
      category: new FormControl(),
      urlImage:new FormControl(),
      state: new FormControl('por-confirmar', [])
    });
  }

  onSubmit() {
    console.log(this.formData.value);
    console.log(
      this.formData.valid,
      this.formData.invalid,
      this.formData.pristine,
      this.formData.dirty,
      this.formData.touched
    );

    if (this.formData.valid) {
      console.log(this.formData.value);
      this.servicesService.registerServicio(this.formData.value).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) =>{
          console.error(error);

        },

        complete: () => {
          this.formData.reset();
        }
      })
    }

    this.formData.reset();
  }
    ngOnInit() {

  }
  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
  }
  
}
