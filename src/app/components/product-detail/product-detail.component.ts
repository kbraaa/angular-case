import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../../services/cart.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  relatedProducts: Product[] = [];
  cartItems: Product[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        const id = +params['id'];
        return this.productService.getProductDetail(id).pipe(
          switchMap((data: Product) => {
            this.product = data;
            const categoryName = data.category;
            return this.productService.getCategory(categoryName);
          })
        );
      })
    ).subscribe(
      (categoryData) => {
        this.relatedProducts = categoryData.products;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching product details or related products:', error);
      }
    );

    this.cartService.cart$.subscribe(cartItems => {
      this.cartItems = cartItems;
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

  addToCartOrRemove(): void {
    if (this.product) {
      if (this.isProductInCart(this.product.id)) {
        this.removeItem(this.product.id);
      } else {
        this.addToCart(this.product);
      }
    }
  }





}
