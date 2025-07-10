import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { servicesService } from '../../../../services/services.service';

@Component({
  selector: 'app-servicio-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './servicio-edit.component.html',
  styleUrl: './servicio-edit.component.css'
})
export class ServicioEditComponent {
  formData!: FormGroup;
  categories: any = ['tour', 'safari', 'caminata']
  state: any = ['disponible', 'no-disponible', 'por-confirmar']
  selectedId!: string;


  constructor(private servicesService: servicesService,
    private router: Router,
    private servicioService: servicesService,
    private activateRoute: ActivatedRoute
  ) {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.min(0), Validators.max(100)]),
      category: new FormControl(),
      urlImage: new FormControl(),
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

      this.servicioService.updateServicio( this.selectedId, this.formData.value ).subscribe({
        next: ( data ) => {
          console.log( data );
        },
        error: ( error ) => {
          console.error( error );
        },
        complete: () => {}
      })
    }
  }

  ngOnInit() {
    this.activateRoute.params.subscribe({
      next: (data) => {
        console.log(data['id']);
        this.selectedId = data['data']
        this.servicesService.getServicioById(data['id']).subscribe({
          next: (data) => {
            console.log(data);
            this.formData.patchValue({
              name: data.name,
              description: data.description,
              price: data.price,
              category: data.category,
              urlImage: data.urlImage,
              state: data.state
            })
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {

          }
        })
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {

      }
    })
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
