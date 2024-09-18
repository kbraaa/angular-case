import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Product} from '../models/product.model';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(page:number = 1): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.apiUrl + '?page=' + page).pipe(
      map(res => res.products)

    );
  }





}

