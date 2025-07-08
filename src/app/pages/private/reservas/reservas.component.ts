import { Component } from '@angular/core';
import { ReservasService } from '../../../services/reservas.service';

@Component({
  selector: 'app-reservas',
  imports: [],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  constructor ( private reservasService: ReservasService ) {};
  ngOnInit() {
    this.reservasService.getReservas().subscribe({
      next:( data ) => {
        console.log( data )
      },
      error:( error ) => {
        console.error( error )
      },
      complete: () => {}
    });
  }

}
