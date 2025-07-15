import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { servicesService } from '../../../../services/services.service';
import { BookingService } from '../../../../services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reserva-edit',
  imports: [ ReactiveFormsModule],
  templateUrl: './reserva-edit.component.html',
  styleUrl: './reserva-edit.component.css'
})
export class ReservaEditComponent {
  formData!: FormGroup;
  servicios: any = [];
  selectedId!: string;

  constructor( 
    private servicioService: servicesService,
    private bookingService: BookingService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ) {
    // TODO: Tarea para Diego, colocar las validaciones de los campos
    this.formData = new FormGroup({
      servicio: new FormControl( '', [] ),
      fechaReservada: new FormControl( '', [] ),
      cantidadPersonas: new FormControl( '', [] ),
      estado: new FormControl( '', [] ),
      // codigoReserva: new FormControl( '', [] )
    });
  }

  formatDateToYMD(dateStr: string): string {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // meses 0-11
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  // La inicializacion del componente
  ngOnInit() {
   
    this.activatedRoute.params.subscribe({
      next:(data) => {
        console.log( data['id'] )
        this.selectedId = data['id']
        this.bookingService.getBookingbyId(data['id']).subscribe({
          next:(data) => {
            console.log( data )
            console.log( this.formatDateToYMD(data.fechaReservada))
            this.formData.patchValue({
              servicio: data.servicio._id,
              fechaReservada: this.formatDateToYMD(data.fechaReservada),
              cantidadPersonas: data.cantidadPersonas,
              estado: data.estado
            })
          },
          error:(error)=> {
            console.error( error )
          },
          complete: () => {}
        })
      },
      error:(error)=> {
        console.error( error )
      },
      complete: () => {

      }
    })
    this.servicioService.getServicios().subscribe({
      next: ( data ) => {
        console.log( data );
        this.servicios = data;  // Guardando los servicios que se van a desplegar en el componente
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
    });
  }

  onSubmit() {
    if( this.formData.valid ) {
      console.log( this.formData.value );
      this.bookingService.updateBooking(this.selectedId,this.formData.value).subscribe({
        next:(data) => {
          console.log( data)
          this.router.navigateByUrl('/dashboard/reservas')
        },
        error: (error) => {
          console.error( error )
        },
        complete:() => {}
      })

      
    }
  }
}

