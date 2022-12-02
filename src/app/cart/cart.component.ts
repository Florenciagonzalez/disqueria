import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  shopList$: Observable<Product[]>;
  
  constructor(private cart: ProductCartService){
    this.shopList$ = cart.shopList.asObservable();
  }

  ngOnInit(): void{
   
  }

  getTotal(){
    let total: number = 0;
    this.shopList$.subscribe((products: Product[]) =>{
      products.forEach(product => total += product.quantity * product.price);
    });
    return total;
  }

}

