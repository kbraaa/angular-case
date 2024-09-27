import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productList: Product[] = [];
  @Input() selectedValue: string = '';
  cartItems: Product[] = [];
  cartItemsCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
     this.cartService.cart$.subscribe(cartItems => {
      this.cartItems = cartItems;
       this.cartItemsCount = cartItems.length;
     });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  isProductInCart(productId: number): boolean {
    return this.cartItems.some(item => item.id === productId);
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}
