import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../../services/cart.service";

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
    this.route.params.subscribe(params => {
      const id = +params['id'];

      this.productService.getProductDetail(id).subscribe(
        (data: Product) => {
          this.product = data;
          this.loading = false;
          this.loading = true;

          const categoryName = data.category;

          this.productService.getCategory(categoryName).subscribe(
            (categoryData) => {
              this.relatedProducts = categoryData.products;
              this.loading = false;
            },
            (error) => {
              console.error('Error fetching related products:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
    });

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
