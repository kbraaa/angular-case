import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  sortedProducts: Product[] = [];


  selectedSortingValue = '';

  constructor(private productService: ProductService) {}

  setSelectedValue(value: any): void{
    console.log("setSelectedValue", value);
    this.selectedSortingValue = value;
    this.sortingProducts();
  }

  sortingProducts(): void{
    if (this.selectedSortingValue === 'low-to-high') {
      this.sortedProducts = [...this.products].sort((num1, num2) => num1.discountPercentage - num2.discountPercentage);
    } else if (this.selectedSortingValue === 'high-to-low') {
      this.sortedProducts = [...this.products].sort((num1, num2) => num2.discountPercentage - num1.discountPercentage);
    } else {
      this.sortedProducts = [...this.products];
    }
  }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
        this.sortedProducts = [...this.products];
      });
  }


}
