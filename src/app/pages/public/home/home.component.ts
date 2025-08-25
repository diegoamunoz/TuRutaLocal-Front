import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DestinosService } from '../../../services/destinos.service';
import { Router, RouterLink } from '@angular/router';
import { ResenasService } from '../../../services/resenas.service';
import { RatingComponent } from "../../../shared/rating/rating.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  [x: string]: Object;
  cantidadDestinos: number = 2;

  formData!: FormGroup;
  destinos: any =  [];
  resenas: any = [];

  constructor(
    private destinosService: DestinosService,
    private resenasService: ResenasService,
    private router: Router 
  ){
    this.formData = new FormGroup({
      name: new FormControl ( '',[ Validators.required]),
      urlImage: new FormControl (''),
      descripcion: new FormControl('')
    }),
    this.formData = new FormGroup({
      // usuario: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
      comentario: new FormControl('', [Validators.required])
    })
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
    }),

    this.resenasService.getResenas().subscribe({
      next: (data) => {
        console.log(data);
        this.resenas = data
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.formData.reset();
      }
    })
  }
  
}