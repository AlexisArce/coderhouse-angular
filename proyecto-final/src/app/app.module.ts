import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartWidgetComponent } from './components/cart-widget/cart-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    LoginComponent,
    RegisterComponent,
    ItemDetailsComponent,
    CartComponent,
    CardComponent,
    NavbarComponent,
    CartWidgetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
