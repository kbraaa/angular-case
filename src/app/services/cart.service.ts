import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product): void {
    const currentCart = this.cartSubject.getValue();
    this.cartSubject.next([...currentCart, product]);
  }

  removeFromCart(productId: number): void {
    const currentCart = this.cartSubject.getValue();
    const updatedCart = currentCart.filter(product => product.id !== productId);
    this.cartSubject.next(updatedCart);
  }




}
