import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class servicioNewFormcomponent {
formData!:FormGroup ;

  constructor(){
    this.formData = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      category: new FormControl(),
      state: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.formData.value);
  }
}
