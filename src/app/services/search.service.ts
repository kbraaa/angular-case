import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {catchError, map} from 'rxjs/operators';

interface ApiResponse {
  products: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = 'https://dummyjson.com/products/search?q=';

  private inputValue : BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  inputValue$ : Observable<Product[]> = this.inputValue.asObservable();

  constructor(private http: HttpClient) {}


  getSearch(keyword: string): Observable<Product[]> {
    if (keyword.length < 3) {
      return of([]);
    }

    const currentProducts = this.inputValue.getValue();
    if (currentProducts.some(product => product.title.toLowerCase().includes(keyword.toLowerCase()))) {
      console.log(`"${keyword}" kaydedilmiş veri`);
      console.log(currentProducts);
      return of(currentProducts);
    }

    return this.http.get<ApiResponse>(`${this.apiUrl}${keyword}`).pipe(
      map(response => {
        this.inputValue.next(response.products);
        console.log(response.products);
        return response.products;
      }),
      catchError((error) => {
        console.error('API Hatası:', error);
        return of([]);
      })
    );
  }
}
