import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  sortedProducts: Product[] = [];
  selectedSortingValue: 'low-to-high' | 'high-to-low' | 'default' = 'default';
  cartItems: Product[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.sortedProducts = [...this.products];
      this.productService.products$.subscribe(sortedProducts => {
        this.sortedProducts = sortedProducts;
      });

      this.cartService.cart$.subscribe(cartItems => {
        this.cartItems = cartItems;
      });
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  setSelectedValue(value: 'low-to-high' | 'high-to-low' | 'default'): void {
    this.selectedSortingValue = value;
    this.productService.sortProducts(this.selectedSortingValue);

  }




}
