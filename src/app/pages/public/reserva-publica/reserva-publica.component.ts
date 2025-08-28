import { Component } from '@angular/core';

import { servicesService } from '../../../../app/services/services.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../../../../app/services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reserva-publica',
  imports: [ReactiveFormsModule, CurrencyPipe ],
  templateUrl: './reserva-publica.component.html',
  styleUrl: './reserva-publica.component.css'
})
export class ReservaPublicaComponent {
  serviceIdSelected!: string;
  serviceDetail!: any;
  total: number = 0;

  formData!: FormGroup;
  servicios: any = [];
  scrollToFormulario(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth' })
  }

  constructor(
    private servicioService: servicesService,
    private bookingService: BookingService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {

    this.formData = new FormGroup({
      nombreUsuario: new FormControl('', []),
      cedula: new FormControl('', []),
      telefono: new FormControl('', []),
      email: new FormControl('', []),
      direccion: new FormControl('', []),
      comentario: new FormControl('', []),
      fechaReservada: new FormControl('', []),
      cantidadPersonas: new FormControl( 1, []),
      total: new FormControl(0, []),
      // codigoReserva: new FormControl( '', [] )
    });
  }

  // La inicializacion del componente
  ngOnInit() {
    this.getParams();
    this.getReserveDetail();

    // Escuchar cambios en cantidadPersonas
    this.formData.get('cantidadPersonas')?.valueChanges.subscribe(valor => {
      const cantidad = valor || 1;
      if (this.serviceDetail) {
        this.formData.patchValue({
          total: this.serviceDetail.price * cantidad
        }, { emitEvent: false }); // 👈 evita loops infinitos
      }
    });
  }


  calcularTotal() {
    if (this.serviceDetail) {
      const cantidad = this.formData.get('cantidadPersonas')?.value || 1;
      this.total = this.serviceDetail.price * cantidad;
      this.formData.patchValue({
        total: this.serviceDetail.price * cantidad
      });
    }
  }

  getParams() {
    this.activatedRoute.params.subscribe({
      next: (data) => {
        this.serviceIdSelected = data[ 'id' ];
      },
      error: (error) => {
        console.error(error);

      }
    })
  }

  getReserveDetail() {
    this.servicioService.getServicioById(this.serviceIdSelected).subscribe({
      next: (data) => {
        this.serviceDetail = data;
        console.log(this.serviceDetail);

        // Calcular total inicial
        const cantidad = this.formData.get('cantidadPersonas')?.value || 1;
        this.formData.patchValue({
          total: this.serviceDetail.price * cantidad
        });

        // 👇 Solo aquí me suscribo, cuando ya tengo el precio
        this.formData.get('cantidadPersonas')?.valueChanges.subscribe(valor => {
          const cantidad = valor || 1;
          this.formData.patchValue({
            total: this.serviceDetail.price * cantidad
          }, { emitEvent: false });
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onDelete(id: string) {
    console.log(id);
    this.bookingService.deleteBooking(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => { }
    })
  }
  
  onSubmit() {
  if (this.formData.valid) {
    const cantidad = this.formData.get('cantidadPersonas')?.value || 1;
    this.formData.patchValue({
      total: this.serviceDetail.price * cantidad
    });

    this.bookingService.registerBooking(this.formData.value).subscribe({
      next: (data) => {
        console.log(data);

        Swal.fire({
          title: "Reserva registrada!",
          text: `${ data.nombreUsuario } llamaremos en breve para más detalles!`,
          icon: "success"
        });
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => { 
        this.formData.reset();
      }
    });
  }
}

}



