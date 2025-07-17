import { Component } from '@angular/core';
import { servicesService } from '../../../services/services.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-public',
  imports: [CurrencyPipe,JsonPipe, RouterLink],
  templateUrl: './servicios-public.component.html',
  styleUrl: './servicios-public.component.css'
})
export class serviciosPublicComponent {
  servicios:any=[]
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


