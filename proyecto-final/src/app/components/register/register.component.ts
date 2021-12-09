import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  get c() {
    return this.userForm.controls;
  }

  onSubmit() {
    console.log(this.userForm.value);
    Swal.fire('Registro exitoso', 'Datos enviados correctamente', 'success');
    this.userForm.reset();
  }
}
