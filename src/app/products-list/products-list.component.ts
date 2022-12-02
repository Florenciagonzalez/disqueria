import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import {Product} from './Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Product[] = [];


  constructor(private cart: ProductCartService, private productDataService: ProductDataService){}

  ngOnInit(): void{
    this.productDataService.getAll()
    .subscribe(products => this.products = products);
  }

  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

}
