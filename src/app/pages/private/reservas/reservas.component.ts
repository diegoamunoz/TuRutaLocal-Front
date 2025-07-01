import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReservasService } from '../../../servicios/reservas.service';

@Component({
  selector: 'app-reservas',
  imports: [],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']

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

