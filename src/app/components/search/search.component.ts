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
        filter((inputValue)=>{
          return inputValue.length >= 3 && !this.recentSearches.includes(inputValue.trim());
        }),
        switchMap((inputValue) => {
          return this.searchService.getSearch(inputValue).pipe(
            tap(data => {
              this.recentSearches.push(inputValue.trim());
            })
          );
        })
      ).subscribe((results) => {
        this.searchResults$ = of(results);
      });
    }

    onSearchClick(search: string) : void {
      this.inputControl.setValue(search);
      this.searchService.getSearch(search).pipe()
        .subscribe((results) => {
        this.searchResults$ = of(results);
      });
    }


  }
