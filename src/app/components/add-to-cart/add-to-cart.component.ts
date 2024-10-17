import {Component, Input} from '@angular/core';
import {Product} from "../../models/product.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {
  @Input() product: Product | undefined;

  constructor(private cartService: CartService) {}


  addToCart(): void {
    if(this.product){
      this.cartService.addToCart(this.product);
    }
  }

  isProductInCart(): boolean {
    if(this.product) {
      return this.cartService.isProductInCart(this.product.id);
    }else{
      return false;
    }
  }

  removeItem(): void {
    if(this.product){
      this.cartService.removeFromCart(this.product.id);
    }
  }
}
