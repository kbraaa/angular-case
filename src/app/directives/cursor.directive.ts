import {Directive, ElementRef, EventEmitter, Input, Output, Renderer2} from '@angular/core';
import { SearchService } from '../services/search.service'; // Service'i ekle
import {Observable, of} from 'rxjs';

@Directive({
  selector: '[appCursor]'
})
export class CursorDirective {
  recentSearches$: Observable<string[]>;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private searchService: SearchService,
   ) {

    this.recentSearches$ = this.searchService.getRecentSearches();

    this.renderer.listen('window', 'click', (e: Event) :void => {
      const target = e.target as HTMLElement;

      if (target.className.includes('searchArea')) {
        this.recentSearches$.subscribe(searches => {
          const currentSearchesCount = searches.length;

          if(currentSearchesCount > 0) {
            this.searchService.showPopup = true;
          }else{
            this.searchService.showPopup = false;
           }
        });
      }else{
        this.searchService.showPopup = false;
      }
    });
  }
}
