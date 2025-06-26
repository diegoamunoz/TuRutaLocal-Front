import { Component } from '@angular/core';
import { servicesService } from '../../../services/services.service';


@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  constructor ( private servicesservice : servicesService) { }

  ngOnInit() { 
    this.servicesservice.getServicios().subscribe({
      next:(data)=>{
        console.log(data);
      },  
      error:(error)=>{
        console.error(error);
      },
      complete:()=>{}

    })
  }
}
