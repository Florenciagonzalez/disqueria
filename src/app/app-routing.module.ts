import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { DisqueriaContactComponent } from './disqueria-contact/disqueria-contact.component';
import { DisqueriaShopComponent } from './disqueria-shop/disqueria-shop.component';

const routes: Routes = [
  {
    path: '',
    component: DisqueriaShopComponent
  },
  {
    path: 'contacto',
    component: DisqueriaContactComponent
  },
  {
    path: 'administrar',
    component: AdminProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
 }
