import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DestinosService } from '../../../services/destinos.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-destinos-public',
  imports: [RouterLink],
  templateUrl: './destinos-public.component.html',
  styleUrl: './destinos-public.component.css'
})
export class DestinosPublicComponent {
  formData!: FormGroup;
  destinos: any =  [];

  constructor(
    private destinosService: DestinosService,
    private router: Router 
  ){
    this.formData = new FormGroup({
      name: new FormControl ( '',[ Validators.required]),
      urlImage: new FormControl (''),
      descripcion: new FormControl('')
    });
  }
  
  ngOnInit() {
    this.destinosService.getDestinos().subscribe({
      next: (data) => {
        console.log(data);
        this.destinos = data
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

