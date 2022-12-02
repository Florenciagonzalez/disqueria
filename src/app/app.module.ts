import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisqueriaShopComponent } from './disqueria-shop/disqueria-shop.component';
import { DisqueriaContactComponent } from './disqueria-contact/disqueria-contact.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    DisqueriaShopComponent,
    DisqueriaContactComponent,
    AdminProductsComponent,
    CartComponent,
    InputIntegerComponent,  
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
