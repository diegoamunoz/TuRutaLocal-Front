import { Component } from '@angular/core';
import { servicesService } from '../../../services/services.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-servicios',
  imports: [ RouterLink ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios:any = []

  constructor ( private servicesservice : servicesService ) { }

  ngOnInit() { 
    this.servicesservice.getServicios().subscribe({
      next:(data)=>{
        console.log(data);
        this.servicios = data;
      },  
      error:(error)=>{
        console.error(error);
      },
      complete:()=>{}

    })
  }
}
