import { Component } from '@angular/core';
import { servicesService } from '../../../services/services.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-servicios',
  imports: [ RouterLink , CurrencyPipe ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios:any = []

  constructor ( private servicesservice : servicesService ) { }

  ngOnInit() { 
    this.loadData();

  }

  loadData() {
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
  onDelete( id: string ) { 
    console.log(id);
    this.servicesservice.deleteServicios( id ).subscribe({
    next: (data) => {
      console.log(data);
      this.loadData();
    },
    error: (error) => {
      console.error(error);
      
    },
    complete: () => {}
    });
    

  }
}
