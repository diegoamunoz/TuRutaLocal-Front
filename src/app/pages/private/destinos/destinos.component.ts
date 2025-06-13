import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-destinos',
  imports: [ ReactiveFormsModule ],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})
export class DestinosComponent {
  formData!: FormGroup; 

  constructor(){
    this.formData = new FormGroup({
      name: new FormControl (),
      urlimage: new FormControl (),
      feedback: new FormControl (),
      services: new FormControl ()
    });
  }

}
