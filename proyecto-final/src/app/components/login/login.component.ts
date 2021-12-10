import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  get c() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
