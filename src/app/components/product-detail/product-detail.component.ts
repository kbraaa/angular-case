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
  loading: boolean = true;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.productService.getProductDetail(+params['id'])),
      switchMap((data: Product) => {
        this.product = data;
        const categoryName = data.category;
        return this.productService.getCategory(categoryName);
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
  }

}
