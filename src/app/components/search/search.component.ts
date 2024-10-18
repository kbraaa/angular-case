import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { SearchService } from "../../services/search.service";
import { Observable, of } from "rxjs";
import { switchMap, tap, debounceTime } from "rxjs/operators";
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputControl: FormControl = new FormControl();
  searchResults$: Observable<Product[]> = of([]); // Başlangıçta boş bir observable
  recentSearches: string[] = []; // Son aramalar dizisi

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.inputControl = new FormControl('');

    // inputControl için valueChanges dinleyin
    this.inputControl.valueChanges.pipe(
      debounceTime(300), // 300 ms gecikme
      switchMap((inputValue) => {
        if (inputValue && inputValue.length >= 3) {
          return this.searchService.getSearch(inputValue).pipe(
            tap(data => {
              console.log('API’den Gelen Veri:', data); // API'den gelen veriyi konsola yazdır
              if (!this.recentSearches.includes(inputValue)) {
                this.recentSearches.push(inputValue); // Yeni aramayı son aramalar listesine ekle
              }
            })
          );
        } else {
          return of([]); // Yeterli uzunlukta değilse boş bir dizi döndür
        }
      })
    ).subscribe((results) => {
      this.searchResults$ = of(results); // Sonuçları ayarlayın
    });
  }
}
