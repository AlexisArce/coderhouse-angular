import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  productForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    description: new FormControl(null),
    thumbnail: new FormControl(null),
  });

  onSubmit() {
    console.log(this.productForm.value);
  }
}
