import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products/';
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.apiUrl + '?delay=1000').pipe(
      map(res => {
        this.productsSubject.next(res.products);
         return res.products;
      })
    );
  }

  getProductDetail(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + id);
  }

  getCategory(categoryName: string): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(`${this.apiUrl}category/${categoryName}`);
  }

  sortProducts(order: 'low-to-high' | 'high-to-low' | 'default'): void {
    const currentProducts = this.productsSubject.getValue();
    let sortedProducts: Product[];
    if (order === 'low-to-high') {
      sortedProducts = [...currentProducts].sort((a, b) => a.discountPercentage - b.discountPercentage);
    } else if (order === 'high-to-low') {
      sortedProducts = [...currentProducts].sort((a, b) => b.discountPercentage - a.discountPercentage);
    } else {
      sortedProducts = [...currentProducts];
    }
    console.log(sortedProducts);

    this.productsSubject.next(sortedProducts);
  }
}
