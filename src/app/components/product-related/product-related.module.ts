import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRelatedComponent} from "./product-related.component";



@NgModule({
  declarations: [
    ProductRelatedComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductRelatedComponent,
  ]
})
export class ProductRelatedModule { }
