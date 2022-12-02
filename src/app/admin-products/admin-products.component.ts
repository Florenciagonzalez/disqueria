import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductDataService } from '../product-data.service';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent {
  products: Product[] = [];


  productForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    artist: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
    stock: new FormControl(''),
    quantity: new FormControl(''),
  });


  constructor(private productDataService: ProductDataService){}

  ngOnInit(): void{
   this.getAll();
  }

  getAll(){
    this.productDataService.getAll()
    .subscribe(products => this.products = products);
  }

  addProduct(): void{
    this.productDataService.add(this.productForm.value).subscribe(() => {
      this.getAll();
    });
  }

  delete(product: Product): void{
    this.productDataService.delete(product).subscribe(() =>{
      this.getAll();
    });
  }

}
