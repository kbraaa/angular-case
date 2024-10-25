  import { Component, OnInit } from '@angular/core';
  import { FormControl } from "@angular/forms";
  import { SearchService } from "../../services/search.service";
  import {filter, Observable, of} from "rxjs";
  import { switchMap, tap, debounceTime } from "rxjs/operators";
  import { Product } from "../../models/product.model";

  @Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
  })
  export class SearchComponent implements OnInit {
    inputControl: FormControl = new FormControl();   //form builder - form group
    searchResults$: Observable<Product[]> = of([]);
    recentSearches: string[] = [];

    constructor(private searchService: SearchService) {}

    ngOnInit() : void  {
      this.inputControl.valueChanges.pipe(
        debounceTime(300),
        switchMap((inputValue) => {
          return this.searchService.getSearch(inputValue).pipe(
            tap(data => {
              this.recentSearches.push(inputValue.trim());
              console.log(this.recentSearches);
            })
          );
        })
      ).subscribe((results) => {
        this.searchResults$ = of(results);
      });
    }

    onSearchClick() : void {
      this.searchResults$ = this.searchService.getSearch(this.inputControl.value)
    }


  }
