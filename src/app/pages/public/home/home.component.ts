import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DestinosService } from '../../../services/destinos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cantidadDestinos: number = 2;

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
    this.destinosService.getDestinosDestacado( this.cantidadDestinos ).subscribe({
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
}