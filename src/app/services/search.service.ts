import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';

interface ApiResponse {
  products: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = 'https://dummyjson.com/products/search?q=';

  constructor(private http: HttpClient) {}

  getSearch(keyword: string): Observable<Product[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}${keyword}`).pipe(
      map(response => response.products),
      catchError((error) => {
        console.error('API Hatası:', error);
        return of([]);
      })
    );
  }
}
