import { Component } from '@angular/core';
import { DestinosService } from '../../../services/destinos.service';


@Component({
  selector: 'app-destinos',
  imports: [ ],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})
export class DestinosComponent {
  destinos: any = [];


  constructor (private destinosService: DestinosService){}
  ngOnInit(){
    //detecta cuando el componente se ha inicializado
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
}
