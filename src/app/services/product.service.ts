import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Product} from '../models/product.model';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'https://dummyjson.com/products/';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.apiUrl + '?delay=1000').pipe(
      map(res => res.products)
    );
  }

  getProductDetail(id: number): Observable  <Product> {
   return this.http.get<Product>(this.apiUrl +id);
  }

  getCategory(categoryName: string): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(`${this.apiUrl}category/${categoryName}`);
  }


}

