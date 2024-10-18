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
  searchResults$: Observable<Product[]> = of([]);
  recentSearches: string[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {

    this.inputControl.valueChanges.pipe(
      debounceTime(300),
      switchMap((inputValue) => {
        if (inputValue && inputValue.length >= 3) {
          return this.searchService.getSearch(inputValue).pipe(
            tap(data => {
              console.log('API’den Gelen Veri:', data);
              if (!this.recentSearches.includes(inputValue)) {
                this.recentSearches.push(inputValue);
              }
            })
          );
        } else {
          return of([]);
        }
      })
    ).subscribe((results) => {
      this.searchResults$ = of(results);
    });
  }
}
