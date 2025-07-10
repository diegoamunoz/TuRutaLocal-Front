import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { servicesService } from '../../../../services/services.service';
import { DestinosService } from '../../../../services/destinos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destinos-edit',
  imports: [ ReactiveFormsModule ],
  templateUrl: './destinos-edit.component.html',
  styleUrl: './destinos-edit.component.css'
})
export class DestinosEditComponent {

  formData!: FormGroup;
  servicios: any =  [];
  selectedId!: string;

  constructor(
    private sServicio: servicesService,
    private destinosService: DestinosService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ){
    this.formData = new FormGroup({
      name: new FormControl ( '',[ Validators.required]),
      urlImage: new FormControl (),
      services: new FormControl ()   // TODO: Traer los datos antes de establecer las reglas 
    });
  }

  onSubmit(){
    if(this.formData.valid){
      console.log(this.formData.value)
      this.destinosService.updateDestinos(this.selectedId, this.formData.value).subscribe({
        next: (data) => {
          console.log(data)
          this.router.navigateByUrl( '/dashboard/destinos' )
        },
        error: (error) =>{
          console.error(error)
        },
        complete: () => {

        }
      })
    }
  }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (data) => {
        console.log(data['id'])
        this.selectedId = data[ 'id' ]
        this.destinosService.getDestinoByid(data['id']).subscribe({
          next: (data) => {
            console.log(data)
            this.formData.patchValue({
              name: data.name,  
              urlImage: data.urlImage,
              services: data.services._id
            })
          },
          error: (error) => {
            console.error( error );

          },
          complete: () => {

          } 
        })
      },
      error: ( error ) => {
          console.error( error );
        },
      complete: () => {
       
      }
    })
    this.sServicio.getServicios().subscribe({
      next: (data) => {
        console.log(data);
        this.servicios = data
      },
      error: ( error ) => {
          console.error( error );
        },
      complete: () => {
        this.formData.reset();  // Limpiamos los campos del formulario
      }
    })
  }

  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
  }

}


