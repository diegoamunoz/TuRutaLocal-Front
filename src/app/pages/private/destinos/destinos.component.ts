import { Component } from '@angular/core';
import { DestinosService } from '../../../services/destinos.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-destinos',
  imports: [ RouterLink ],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})
export class DestinosComponent {
  destinos: any = [];


  constructor (private destinosService: DestinosService){}
  ngOnInit(){
    //detecta cuando el componente se ha inicializado
    this.onLoadData()
  }

  onLoadData(){
    this.destinosService.getDestinos().subscribe({
      next: ( data ) => {
        console.log ( data );
        this.destinos = data;
      },
      error: ( error ) => {
        console.log ( error );
      },
      complete: () => {}
    });
  }

  onDelete(id: string){
    this.destinosService.deleteDestinos(id).subscribe({
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
