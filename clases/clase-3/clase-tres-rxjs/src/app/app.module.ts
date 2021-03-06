import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploUnoComponent } from './ejemplo-uno/ejemplo-uno.component';
import { EjemploDosComponent } from './ejemplo-dos/ejemplo-dos.component';
import { EjemploTresComponent } from './ejemplo-tres/ejemplo-tres.component';
import { EjemploCuatroComponent } from './ejemplo-cuatro/ejemplo-cuatro.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploUnoComponent,
    EjemploDosComponent,
    EjemploTresComponent,
    EjemploCuatroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
