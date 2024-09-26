import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductSingleComponent} from "./product-single.component";
import {ProductDetailModule} from "../../components/product-detail/product-detail.module";

@NgModule({
  declarations: [
    ProductSingleComponent
  ],
  imports: [
    CommonModule,
    ProductDetailModule
  ],

})
export class ProductSingleModule { }
