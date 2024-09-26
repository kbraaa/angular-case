import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() asd = new EventEmitter<void>();

  constructor() {}



  onSortChange(event: MatSelectChange) {
    /*  const selectedValue = event.value;
     if (selectedValue === 'low-to-high') {
       this.sortedProducts = this.products.sort((num1, num2) => num1.price - num2.price);
     } else if (selectedValue === 'high-to-low') {
       this.sortedProducts = this.products.sort((num1, num2) => num2.price - num1.price);
     } else {
       this.sortedProducts = [...this.products];
     }
     console.log(this.sortedProducts);
     this.asd.emit(selectedValue);
     */

    const selectedValue = event.value;
    this.asd.emit(selectedValue);
   }

}
