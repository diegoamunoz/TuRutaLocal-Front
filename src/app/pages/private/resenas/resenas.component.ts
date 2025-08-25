import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResenasService } from '../../../services/resenas.service';


@Component({
  selector: 'app-resenas',
  imports: [ RouterLink ],
  templateUrl: './resenas.component.html',
  styleUrl: './resenas.component.css'
})
export class ResenasComponent {
  resenas: any = [];


  constructor (private resenasService: ResenasService){}
  ngOnInit(){
    this.onLoadData()
  }

  onLoadData(){
    this.resenasService.getResenas().subscribe({
      next: ( data ) => {
        console.log ( data );
        this.resenas = data;
      },
      error: ( error ) => {
        console.log ( error );
      },
      complete: () => {}
    });
  }

  onDelete(id: string){
    this.resenasService.deleteResenas(id).subscribe({
      next: ( data ) => {
        console.log ( data );
        this.onLoadData()
      },
      error: ( error ) => {
        console.log ( error );
      },
      complete: () => {}
    })
  }
}
