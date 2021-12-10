import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  userForm = this.fb.group({
    firstName: ['', Validators.required, Validators.minLength(3)],
    lastName: ['', Validators.required, Validators.minLength(3)],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
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
