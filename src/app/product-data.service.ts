import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './products-list/Product';

const URL = 'https://63857b57beaa6458266071fd.mockapi.io/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(URL)
                    .pipe(tap((products: Product[]) => products.forEach(product => product.quantity = 0)));
  }

  add(product: Product): Observable<Product>{
    return this.http.post<Product>(URL, product);
  }

  delete(product: Product): Observable<Product>{
    return this.http.delete<Product>(URL+'/'+ product.id);
  }
}
