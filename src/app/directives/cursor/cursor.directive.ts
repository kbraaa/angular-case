import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import { SearchService } from '../../services/search.service'; // Service'i ekle
import {Observable, of} from 'rxjs';

@Directive({
  selector: '[appCursor]'
})
export class CursorDirective {

  @Output() outsideClick = new EventEmitter();


  constructor(
    private el: ElementRef,
   ) { }

  @HostListener('document:mousedown', ['$event'])
  onClick(event: MouseEvent): void {
    console.log("event" + event);
    if (!this.el.nativeElement.contains(event.target)) {
      this.outsideClick.emit(event);
    }
  }

}
