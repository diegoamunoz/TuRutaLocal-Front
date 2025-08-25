import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ResenasService } from "../../../../services/resenas.service";
import { Router } from "@angular/router";
import { RatingComponent } from "../../../../shared/rating/rating.component";

@Component({
  selector: 'app-resenas',
  imports: [ReactiveFormsModule, RatingComponent],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class resenasNewForm {
  formData!: FormGroup;
  resenas: any = [];

  constructor(
    private resenasService: ResenasService,
    private router: Router
  ) {
    this.formData = new FormGroup({
      // usuario: new FormControl('', [Validators.required]),
      score: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(5)]),
      comentario: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    console.log(this.formData.value);
    console.log(
      this.formData.valid,
      this.formData.invalid,
      this.formData.pristine,
      this.formData.dirty,
      this.formData.touched
    )

    if (this.formData.valid) {
      console.log(this.formData.value);
      this.resenasService.registerResena(this.formData.value).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigateByUrl('dashboard/resenas');
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          this.formData.reset();  // Limpiamos los campos del formulario
        }
      });
    }

  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}

