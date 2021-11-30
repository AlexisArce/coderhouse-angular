import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import Swal from 'sweetalert2';
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
    price: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      RxwebValidators.numeric({ allowDecimal: true, isFormat: true }),
    ]),
    description: new FormControl(null),
    thumbnail: new FormControl(null, [
      Validators.pattern(
        '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
      ),
    ]),
  });

  get p() {
    return this.productForm.controls;
  }

  onSubmit() {
    console.log(this.productForm.value);
    Swal.fire('Registro exitoso', 'Datos enviados correctamente', 'success');
    this.productForm.reset();
  }
}
