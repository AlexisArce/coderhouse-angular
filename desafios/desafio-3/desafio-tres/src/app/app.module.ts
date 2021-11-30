import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, FormularioComponent, NavbarComponent],
  imports: [BrowserModule, ReactiveFormsModule, RxReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
