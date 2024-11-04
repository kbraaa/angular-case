import {Directive, ElementRef, EventEmitter, Output, Renderer2} from '@angular/core';
import { SearchService } from '../services/search.service'; // Service'i ekle
import { Observable } from 'rxjs';

@Directive({
  selector: '[appCursor]'
})
export class CursorDirective {
  recentSearches$: Observable<string[]>;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private searchService: SearchService
  ) {

    this.recentSearches$ = this.searchService.getRecentSearches();

    this.renderer.listen('window', 'click', (e: Event) :void => {
      const target = e.target as HTMLElement;

      if (target.className.includes('searchArea')) {
        this.recentSearches$.subscribe(searches => {
          const currentSearchesCount = searches.length;
          console.log("search alanı içinde");

          if(currentSearchesCount > 0) {
              console.log("Son aramalar true");
          }else{
            console.log("Son aramalar false");
          }
        });
      }else{
        console.log("search alanı dışında");
      }
    });
  }
}
