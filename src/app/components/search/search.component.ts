  import { Component, OnInit } from '@angular/core';
  import { FormControl } from "@angular/forms";
  import { SearchService } from "../../services/search.service";
  import {Observable, of} from "rxjs";
  import { switchMap, debounceTime } from "rxjs/operators";
  import { Product } from "../../models/product.model";

  @Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
  })
  export class SearchComponent implements OnInit {
    inputControl: FormControl = new FormControl();
    searchResults$: Observable<Product[]> = of([]);
    recentSearches$: Observable<string[]>;
    isInputFocused: boolean = false;  // Odak durumunu takip et


    constructor(private searchService: SearchService) {
    this.recentSearches$ = this.searchService.getRecentSearches();
  }

  ngOnInit(): void {
    this.inputControl.valueChanges.pipe(
      debounceTime(300),
      switchMap((inputValue) => {
        const searchTerm = inputValue.trim();

        if (!searchTerm) return of([]);

        return this.searchService.getSearch(searchTerm);
      })
    ).subscribe((results): void => {
      this.searchResults$ = of(results);
    });
  }

  onSearchClick(searchKeyword: string): void {
    this.inputControl.setValue(searchKeyword);
    this.searchResults$ = this.searchService.getSearch(searchKeyword);
  }

  onFocus(): void {
    this.isInputFocused = true;
    console.log("onFocus Çalıştı");
  }

  onBlur(): void {
    this.isInputFocused = false;
    console.log("onBlur Çalıştı");
  }
}
