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

  private inputValue: BehaviorSubject<{ keyword: string, products: Product[] }[]> =
    new BehaviorSubject<{ keyword: string, products: Product[] }[]>([]);

  private recentSearches: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {}

  getSearch(keyword: string): Observable<Product[]> {

    if (keyword.length < 3) return of([]);
    const cachedResult = this.inputValue.getValue().find(entry => entry.keyword === keyword);

    if (cachedResult) {
      this.updateRecentSearches(keyword);
      return of(cachedResult.products);
    }

    return this.http.get<ApiResponse>(`${this.apiUrl}${keyword}`).pipe(
      map(response => {
        this.updateCache(keyword, response.products);
        this.updateRecentSearches(keyword);
        return response.products;
      }),
      catchError((error) => {
        console.error('API Hatası:', error);
        return of([]);
      })
    );
  }

  private updateRecentSearches(searchTerm: string): void {
    const trimmedTerm = searchTerm.trim();

    if (!trimmedTerm) return;

    let currentSearches = this.recentSearches.getValue();
    currentSearches = currentSearches.filter(term => term !== trimmedTerm);

    currentSearches.unshift(trimmedTerm);

    if (currentSearches.length > 5) {
      currentSearches.pop();
    }

    this.recentSearches.next(currentSearches);
  }

  private updateCache(keyword: string, products: Product[]): void {
    let currentCache = this.inputValue.getValue();

    currentCache = currentCache.filter(entry => entry.keyword !== keyword);

    currentCache.unshift({ keyword, products });

    if (currentCache.length > 5) {
      currentCache.pop();
    }

    this.inputValue.next(currentCache);
  }

  getRecentSearches(): Observable<string[]> {
    return this.recentSearches.asObservable();
  }
}
