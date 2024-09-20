import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  relatedProducts: Product[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];

      this.productService.getProductDetail(id).subscribe(
        (data: Product) => {
          this.product = data;

          const categoryName = data.category;

          this.productService.getCategory(categoryName).subscribe(
            (categoryData) => {
              this.relatedProducts = categoryData.products;
              console.log(this.relatedProducts);
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
  }
}
