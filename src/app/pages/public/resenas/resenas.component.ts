import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResenasService } from '../../../services/resenas.service';
import { Router } from '@angular/router';
import { RatingComponent } from "../../../componentes/shared/rating/rating.component";

@Component({
  selector: 'app-resenas',
  imports: [RatingComponent],
  templateUrl: './resenas.component.html',
  styleUrl: './resenas.component.css'
})
export class ResenasPublic {
  formData!: FormGroup;
  resenas: any = [];

  constructor(
    private resenasService: ResenasService,
    private router: Router
  ){
    this.formData = new FormGroup({
      // usuario: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
      comentario: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(){
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

  ngOnDestroy(){
    console.log( 'ngOnDestroy' );
  }
}
